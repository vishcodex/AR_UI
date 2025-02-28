import React from 'react'
import { Box, Table, Thead, Tbody, Tr, Th, Td, Heading, Card, CardBody, Badge, Text, HStack, Icon } from '@chakra-ui/react'
import { FiCheckCircle, FiAlertCircle, FiClock } from 'react-icons/fi'

const Payments = () => {
  // Mock data for payments
  const payments = [
    {
      id: 1,
      patientName: 'John Smith',
      amount: '$350.00',
      date: '2023-06-15',
      status: 'Completed',
      method: 'Credit Card'
    },
    {
      id: 2,
      patientName: 'Sarah Johnson',
      amount: '$1,200.50',
      date: '2023-06-10',
      status: 'Completed',
      method: 'Bank Transfer'
    },
    {
      id: 3,
      patientName: 'Michael Brown',
      amount: '$750.50',
      date: '2023-06-05',
      status: 'Pending',
      method: 'Check'
    },
    {
      id: 4,
      patientName: 'Emily Davis',
      amount: '$2,100.25',
      date: '2023-05-28',
      status: 'Failed',
      method: 'Credit Card'
    },
    {
      id: 5,
      patientName: 'Robert Wilson',
      amount: '$125.00',
      date: '2023-05-20',
      status: 'Completed',
      method: 'PayPal'
    }
  ]

  // Function to determine status icon and color
  const getStatusProps = (status) => {
    switch (status) {
      case 'Completed':
        return { icon: FiCheckCircle, color: 'green' }
      case 'Pending':
        return { icon: FiClock, color: 'orange' }
      case 'Failed':
        return { icon: FiAlertCircle, color: 'red' }
      default:
        return { icon: FiClock, color: 'gray' }
    }
  }

  return (
    <Box p={8}>
      <Heading mb={6}>Payments</Heading>
      <Card>
        <CardBody>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Patient</Th>
                <Th>Amount</Th>
                <Th>Date</Th>
                <Th>Status</Th>
                <Th>Method</Th>
              </Tr>
            </Thead>
            <Tbody>
              {payments.map((payment) => {
                const { icon, color } = getStatusProps(payment.status)
                return (
                  <Tr key={payment.id}>
                    <Td>{payment.patientName}</Td>
                    <Td>{payment.amount}</Td>
                    <Td>{payment.date}</Td>
                    <Td>
                      <HStack>
                        <Icon as={icon} color={`${color}.500`} />
                        <Badge colorScheme={color}>{payment.status}</Badge>
                      </HStack>
                    </Td>
                    <Td>{payment.method}</Td>
                  </Tr>
                )
              })}
            </Tbody>
          </Table>
        </CardBody>
      </Card>
    </Box>
  )
}

export default Payments