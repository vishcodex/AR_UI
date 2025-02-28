import React from 'react'
import { Box, Table, Thead, Tbody, Tr, Th, Td, Heading, Card, CardBody, Badge, Avatar, HStack, Text } from '@chakra-ui/react'

const Customers = () => {
  // Mock data for customers
  const customers = [
    {
      id: 1,
      name: 'John Smith',
      email: 'john.smith@example.com',
      balance: '$1,250.00',
      status: 'Current',
      lastPayment: '2023-06-15'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah.j@example.com',
      balance: '$3,420.75',
      status: 'Overdue',
      lastPayment: '2023-04-22'
    },
    {
      id: 3,
      name: 'Michael Brown',
      email: 'mbrown@example.com',
      balance: '$750.50',
      status: 'Current',
      lastPayment: '2023-06-01'
    },
    {
      id: 4,
      name: 'Emily Davis',
      email: 'emily.davis@example.com',
      balance: '$4,800.25',
      status: 'Overdue',
      lastPayment: '2023-03-10'
    },
    {
      id: 5,
      name: 'Robert Wilson',
      email: 'rwilson@example.com',
      balance: '$125.00',
      status: 'Current',
      lastPayment: '2023-06-20'
    }
  ]

  return (
    <Box p={8}>
      <Heading mb={6}>Customers</Heading>
      <Card>
        <CardBody>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Customer</Th>
                <Th>Email</Th>
                <Th>Balance</Th>
                <Th>Status</Th>
                <Th>Last Payment</Th>
              </Tr>
            </Thead>
            <Tbody>
              {customers.map((customer) => (
                <Tr key={customer.id}>
                  <Td>
                    <HStack>
                      <Avatar size="sm" name={customer.name} />
                      <Text>{customer.name}</Text>
                    </HStack>
                  </Td>
                  <Td>{customer.email}</Td>
                  <Td>{customer.balance}</Td>
                  <Td>
                    <Badge colorScheme={customer.status === 'Current' ? 'green' : 'red'}>
                      {customer.status}
                    </Badge>
                  </Td>
                  <Td>{customer.lastPayment}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </CardBody>
      </Card>
    </Box>
  )
}

export default Customers