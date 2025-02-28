import React, { useState, useRef, useEffect } from 'react'
import {
  Box,
  Input,
  IconButton,
  VStack,
  HStack,
  Text,
  useColorModeValue,
  Flex,
  Spacer,
  Collapse,
  useDisclosure
} from '@chakra-ui/react'
import { FiSend, FiMessageSquare, FiX } from 'react-icons/fi'

const Chatbot = ({ messages, onSendMessage }) => {
  const [input, setInput] = useState('')
  const { isOpen, onToggle } = useDisclosure()
  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.600')
  const userBubbleColor = useColorModeValue('brand.500', 'brand.400')
  const botBubbleColor = useColorModeValue('gray.100', 'gray.700')
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim()) {
      onSendMessage(input)
      setInput('')
    }
  }

  return (
    <Box
      position="fixed"
      bottom={4}
      right={4}
      zIndex={10}
      width={isOpen ? '350px' : 'auto'}
      transition="width 0.3s"
    >
      {/* Chat toggle button */}
      <Box position="absolute" bottom={0} right={0}>
        <IconButton
          icon={isOpen ? <FiX /> : <FiMessageSquare />}
          colorScheme={isOpen ? 'gray' : 'brand'}
          borderRadius="full"
          size="lg"
          onClick={onToggle}
          aria-label="Toggle chat"
          boxShadow="md"
        />
      </Box>

      {/* Chat window */}
      <Collapse in={isOpen} animateOpacity>
        <Box
          bg={bgColor}
          borderRadius="lg"
          boxShadow="lg"
          border="1px"
          borderColor={borderColor}
          overflow="hidden"
          mb={16} // Space for the toggle button
        >
          {/* Chat header */}
          <Flex
            bg="brand.500"
            color="white"
            p={3}
            alignItems="center"
          >
            <Text fontWeight="bold">Healthcare Assistant</Text>
            <Spacer />
          </Flex>

          {/* Chat messages */}
          <Box
            height="300px"
            overflowY="auto"
            p={3}
            css={{
              '&::-webkit-scrollbar': {
                width: '4px',
              },
              '&::-webkit-scrollbar-track': {
                width: '6px',
              },
              '&::-webkit-scrollbar-thumb': {
                background: 'gray',
                borderRadius: '24px',
              },
            }}
          >
            <VStack spacing={3} align="stretch">
              {messages.length === 0 ? (
                <Text color="gray.500" textAlign="center" py={4}>
                  How can I help you today? Try asking me to navigate to a page.
                </Text>
              ) : (
                messages.map((msg, index) => (
                  <Box
                    key={index}
                    alignSelf={msg.sender === 'user' ? 'flex-end' : 'flex-start'}
                    bg={msg.sender === 'user' ? userBubbleColor : botBubbleColor}
                    color={msg.sender === 'user' ? 'white' : 'black'}
                    borderRadius="lg"
                    px={3}
                    py={2}
                    maxWidth="70%"
                  >
                    <Text>{msg.text}</Text>
                  </Box>
                ))
              )}
              <div ref={messagesEndRef} />
            </VStack>
          </Box>

          {/* Chat input */}
          <Box p={3} borderTop="1px" borderColor={borderColor}>
            <form onSubmit={handleSubmit}>
              <HStack>
                <Input
                  placeholder="Type a message..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  variant="filled"
                />
                <IconButton
                  colorScheme="brand"
                  aria-label="Send message"
                  icon={<FiSend />}
                  type="submit"
                />
              </HStack>
            </form>
          </Box>
        </Box>
      </Collapse>
    </Box>
  )
}

export default Chatbot