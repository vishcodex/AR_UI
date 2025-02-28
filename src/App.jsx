import React, { useState, useEffect, useRef } from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// Components
import Sidebar from './components/Sidebar'
import Chatbot from './components/Chatbot'

// Pages
import Dashboard from './pages/Dashboard'
import Customers from './pages/Customers'
import Payments from './pages/Payments'
import CollectorDashboard from './pages/CollectorDashboard'
import Collections from './pages/Collections'
import Claims from './pages/Claims'

function App() {
  const navigate = useNavigate()
  const [messages, setMessages] = useState([])
  const [wsConnected, setWsConnected] = useState(false)
  const ws = useRef(null)

  // Function to handle navigation via chatbot
  const handleNavigation = (intent) => {
    // Convert intent to lowercase for case-insensitive matching
    const lowerIntent = intent.toLowerCase()
    
    if (lowerIntent === 'dashboard') {
      navigate('/')
      return 'Navigating to Dashboard page'
    } else if (lowerIntent === 'customers') {
      navigate('/customers')
      return 'Navigating to Customers page'
    } else if (lowerIntent === 'payments') {
      navigate('/payments')
      return 'Navigating to Payments page'
    } else if (lowerIntent === 'collector dashboard') {
      navigate('/collector-dashboard')
      return 'Navigating to Collector Dashboard page'
    } else if (lowerIntent === 'collections') {
      navigate('/collections')
      return 'Navigating to Collections page'
    } else if (lowerIntent === 'claims') {
      navigate('/claims')
      return 'Navigating to Claims page'
    } else {
      return 'Sorry, I can\'t find that page. Please try again.'
    }
  }

  // Setup WebSocket connection
  useEffect(() => {
    // Initialize WebSocket connection
    ws.current = new WebSocket('ws://localhost:8000/ws/chat')
    
    // Connection opened
    ws.current.onopen = () => {
      console.log('WebSocket connection established')
      setWsConnected(true)
    }
    
    // Listen for messages from the server
    ws.current.onmessage = (event) => {
      const response = JSON.parse(event.data)
      setMessages(prevMessages => [...prevMessages, { text: response.text, sender: 'bot' }])
    }
    
    // Connection closed
    ws.current.onclose = () => {
      console.log('WebSocket connection closed')
      setWsConnected(false)
    }
    
    // Connection error
    ws.current.onerror = (error) => {
      console.error('WebSocket error:', error)
      setWsConnected(false)
    }
    
    // Cleanup on component unmount
    return () => {
      if (ws.current) {
        ws.current.close()
      }
    }
  }, [])

  // Function to handle chatbot messages
  const handleChatMessage = (message) => {
    // Add user message to chat history
    setMessages(prevMessages => [...prevMessages, { text: message, sender: 'user' }])
    
    // Convert message to lowercase for case-insensitive matching
    const lowerMessage = message.toLowerCase()
    
    // Intent-based pattern matching
    const isNavigationIntent = /\b(take|go|navigate|show|open|view|see|display)\s+(me\s+)?(to|the)?\s*/i.test(message)
    
    let intent = null
    
    // Check for dashboard/home intent
    if (/(dashboard|home|main|overview|start|landing)/i.test(lowerMessage) && !/(collector)/i.test(lowerMessage)) {
      intent = 'dashboard'
    }
    // Check for customers/clients intent
    else if (/(customers|customer|clients|client|people|users)/i.test(lowerMessage)) {
      intent = 'customers'
    }
    // Check for payments/billing intent
    else if (/(payments|payment|pay|billing|invoice|money|transaction)/i.test(lowerMessage)) {
      intent = 'payments'
    }
    // Check for collector dashboard intent
    else if (/(collector.*dashboard|collector.*overview)/i.test(lowerMessage)) {
      intent = 'collector dashboard'
    }
    // Check for collections intent
    else if (/(collections|collection|collect)/i.test(lowerMessage)) {
      intent = 'collections'
    }
    // Check for claims intent
    else if (/(claims|claim|insurance claim|medical claim)/i.test(lowerMessage)) {
      intent = 'claims'
    }
    
    if (intent) {
      // Handle navigation intents locally
      const response = handleNavigation(intent)
      setMessages(prevMessages => [...prevMessages, { text: response, sender: 'bot' }])
    } else if (wsConnected) {
      // Send non-navigation queries to the backend via WebSocket
      ws.current.send(JSON.stringify({ text: message }))
      // The response will be handled by the onmessage event handler
    } else {
      // Fallback if WebSocket is not connected
      const response = 'Sorry, I\'m having trouble connecting to the backend. Please try again later.'
      setMessages(prevMessages => [...prevMessages, { text: response, sender: 'bot' }])
    }
  }

  return (
    <Flex h="100vh">
      <Sidebar />
      <Box flex="1" overflow="auto">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/collector-dashboard" element={<CollectorDashboard />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/claims" element={<Claims />} />
        </Routes>
      </Box>
      <Chatbot messages={messages} onSendMessage={handleChatMessage} />
    </Flex>
  )
}

export default App