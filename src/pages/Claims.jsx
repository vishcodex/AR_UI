import React from 'react'
import { Box, Table, Thead, Tbody, Tr, Th, Td, Heading, Card, CardBody, Badge, HStack, Icon } from '@chakra-ui/react'
import { FiCheckCircle, FiAlertCircle, FiClock } from 'react-icons/fi'

const Claims = () => {
  // Mock data for claims
  const claims = [
    {
      id: 1,
      claimNumber: 'CLM-2023-001',
      patientName: 'John Smith',
      amount: '$2,450.00',
      submissionDate: '2023-06-15',
      status: 'Approved'
    },
    {
      id: 2,
      claimNumber: 'CLM-2023-002',
      patientName: 'Sarah Johnson',
      amount: '$1,875.50',
      submissionDate: '2023-06-10',
      status: 'Pending'
    },
    {
      id: 3,
      claimNumber: 'CLM-2023-003',
      patientName: 'Michael Brown',
      amount: '$3,420.75',
      submissionDate: '2023-06-05',
      status: 'Denied'
    },
    {
      id: 4,
      claimNumber: 'CLM-2023-004',
      patientName: 'Emily Davis',
      amount: '$980.25',
      submissionDate: '2023-05-28',
      status: 'Approved'
    },
    {
      id: 5,
      claimNumber: 'CLM-2023-005',
      patientName: 'Robert Wilson',
      amount: '$1,250.00',
      submissionDate: '2023-05-20',
      status: 'Pending'
    }
  ]

  // Function to determine status icon and color
  const getStatusProps = (status) => {
    switch (status) {
      case 'Approved':
        return { icon: FiCheckCircle, color: 'green' }
      case 'Pending':
        return { icon: FiClock, color: 'orange' }
      case 'Denied':
        return { icon: FiAlertCircle, color: 'red' }
      default:
        return { icon: FiClock, color: 'gray' }
    }
  }

  return (
    <Box p={8}>
      <Heading mb={6}>Claims</Heading>
      <Card>
        <CardBody>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Claim Number</Th>
                <Th>Patient Name</Th>
                <Th>Amount</Th>
                <Th>Submission Date</Th>
                <Th>Status</Th>
              </Tr>
            </Thead>
            <Tbody>
              {claims.map((claim) => {
                const { icon, color } = getStatusProps(claim.status)
                return (
                  <Tr key={claim.id}>
                    <Td>{claim.claimNumber}</Td>
                    <Td>{claim.patientName}</Td>
                    <Td>{claim.amount}</Td>
                    <Td>{claim.submissionDate}</Td>
                    <Td>
                      <HStack>
                        <Icon as={icon} color={`${color}.500`} />
                        <Badge colorScheme={color}>{claim.status}</Badge>
                      </HStack>
                    </Td>
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

export default Claims