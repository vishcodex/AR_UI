import React from 'react'
import { Box, VStack, Button, useColorModeValue } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { FiHome, FiUsers, FiDollarSign } from 'react-icons/fi'

const Sidebar = () => {
  const bgColor = useColorModeValue('gray.100', 'gray.700')
  const buttonColor = useColorModeValue('gray.200', 'gray.600')

  return (
    <Box w="200px" bg={bgColor} p={4} h="100vh">
      <VStack spacing={4} align="stretch">
        <Button
          as={RouterLink}
          to="/"
          leftIcon={<FiHome />}
          variant="ghost"
          justifyContent="flex-start"
          w="full"
          _hover={{ bg: buttonColor }}
        >
          Dashboard
        </Button>
        <Button
          as={RouterLink}
          to="/customers"
          leftIcon={<FiUsers />}
          variant="ghost"
          justifyContent="flex-start"
          w="full"
          _hover={{ bg: buttonColor }}
        >
          Customers
        </Button>
        <Button
          as={RouterLink}
          to="/payments"
          leftIcon={<FiDollarSign />}
          variant="ghost"
          justifyContent="flex-start"
          w="full"
          _hover={{ bg: buttonColor }}
        >
          Payments
        </Button>
      </VStack>
    </Box>
  )
}

export default Sidebar