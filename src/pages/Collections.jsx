import React from 'react'
import { Box, Table, Thead, Tbody, Tr, Th, Td, Heading, Card, CardBody, Badge, HStack, Icon } from '@chakra-ui/react'
import { FiCheckCircle, FiAlertCircle, FiClock } from 'react-icons/fi'

const Collections = () => {
  // Mock data for collections
  const collections = [
    {
      id: 1,
      accountName: 'Memorial Hospital',
      amount: '$45,000.00',
      assignedDate: '2023-06-15',
      status: 'In Progress',
      collector: 'John Smith'
    },
    {
      id: 2,
      accountName: 'City Medical Center',
      amount: '$32,750.50',
      assignedDate: '2023-06-10',
      status: 'Pending',
      collector: 'Sarah Johnson'
    },
    {
      id: 3,
      accountName: 'Wellness Clinic',
      amount: '$18,420.75',
      assignedDate: '2023-06-05',
      status: 'Completed',
      collector: 'Michael Brown'
    },
    {
      id: 4,
      accountName: 'Family Practice Group',
      amount: '$27,890.25',
      assignedDate: '2023-05-28',
      status: 'In Progress',
      collector: 'Emily Davis'
    },
    {
      id: 5,
      accountName: 'Urgent Care Center',
      amount: '$15,675.00',
      assignedDate: '2023-05-20',
      status: 'Completed',
      collector: 'Robert Wilson'
    }
  ]

  // Function to determine status icon and color
  const getStatusProps = (status) => {
    switch (status) {
      case 'Completed':
        return { icon: FiCheckCircle, color: 'green' }
      case 'Pending':
        return { icon: FiClock, color: 'orange' }
      case 'In Progress':
        return { icon: FiAlertCircle, color: 'blue' }
      default:
        return { icon: FiClock, color: 'gray' }
    }
  }

  return (
    <Box p={8}>
      <Heading mb={6}>Collections</Heading>
      <Card>
        <CardBody>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Account Name</Th>
                <Th>Amount</Th>
                <Th>Assigned Date</Th>
                <Th>Status</Th>
                <Th>Collector</Th>
              </Tr>
            </Thead>
            <Tbody>
              {collections.map((collection) => {
                const { icon, color } = getStatusProps(collection.status)
                return (
                  <Tr key={collection.id}>
                    <Td>{collection.accountName}</Td>
                    <Td>{collection.amount}</Td>
                    <Td>{collection.assignedDate}</Td>
                    <Td>
                      <HStack>
                        <Icon as={icon} color={`${color}.500`} />
                        <Badge colorScheme={color}>{collection.status}</Badge>
                      </HStack>
                    </Td>
                    <Td>{collection.collector}</Td>
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

export default Collections