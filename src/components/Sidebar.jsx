import React from 'react'
import { Box, VStack, Button, useColorModeValue } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { FiHome, FiUsers, FiDollarSign, FiFileText, FiDatabase, FiActivity } from 'react-icons/fi'

const Sidebar = () => {
  const bgColor = useColorModeValue('gray.100', 'gray.700')
  const buttonColor = useColorModeValue('gray.200', 'gray.600')

  return (
    <Box w="200px" bg="sidebar.bg" p={4} h="100vh">
      <VStack spacing={4} align="stretch">
        <Button
          as={RouterLink}
          to="/"
          leftIcon={<FiHome color="sidebar.iconColor" />}
          variant="sidebar-nav"
          justifyContent="flex-start"
          w="full"
        >
          Dashboard
        </Button>
        <Button
          as={RouterLink}
          to="/customers"
          leftIcon={<FiUsers color="sidebar.iconColor" />}
          variant="sidebar-nav"
          justifyContent="flex-start"
          w="full"
        >
          Customers
        </Button>
        <Button
          as={RouterLink}
          to="/payments"
          leftIcon={<FiDollarSign color="sidebar.iconColor" />}
          variant="sidebar-nav"
          justifyContent="flex-start"
          w="full"
        >
          Payments
        </Button>
        <Button
          as={RouterLink}
          to="/claims"
          leftIcon={<FiFileText color="sidebar.iconColor" />}
          variant="sidebar-nav"
          justifyContent="flex-start"
          w="full"
        >
          Claims
        </Button>
        <Button
          as={RouterLink}
          to="/collections"
          leftIcon={<FiDatabase color="sidebar.iconColor" />}
          variant="sidebar-nav"
          justifyContent="flex-start"
          w="full"
        >
          Collections
        </Button>
        <Button
          as={RouterLink}
          to="/collector-dashboard"
          leftIcon={<FiActivity color="sidebar.iconColor" />}
          variant="sidebar-nav"
          justifyContent="flex-start"
          w="full"
        >
          Collector Dashboard
        </Button>
      </VStack>
    </Box>
  )
}

export default Sidebar