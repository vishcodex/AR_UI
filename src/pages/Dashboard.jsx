import React from 'react'
import { Box, Grid, GridItem, Stat, StatLabel, StatNumber, StatHelpText, Card, CardBody, Heading } from '@chakra-ui/react'

const Dashboard = () => {
  // Mock data for the dashboard
  const stats = {
    totalReceivables: '$245,000',
    overdue: '$52,000',
    patientsCount: '1,234',
    avgDaysOutstanding: '45'
  }

  return (
    <Box p={8}>
      <Heading mb={6}>Dashboard</Heading>
      <Grid templateColumns='repeat(2, 1fr)' gap={6}>
        <GridItem>
          <Card>
            <CardBody>
              <Stat>
                <StatLabel>Total Receivables</StatLabel>
                <StatNumber>{stats.totalReceivables}</StatNumber>
                <StatHelpText>Current outstanding balance</StatHelpText>
              </Stat>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem>
          <Card>
            <CardBody>
              <Stat>
                <StatLabel>Overdue Amount</StatLabel>
                <StatNumber>{stats.overdue}</StatNumber>
                <StatHelpText>Past 30 days</StatHelpText>
              </Stat>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem>
          <Card>
            <CardBody>
              <Stat>
                <StatLabel>Active Patients</StatLabel>
                <StatNumber>{stats.patientsCount}</StatNumber>
                <StatHelpText>Total patient accounts</StatHelpText>
              </Stat>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem>
          <Card>
            <CardBody>
              <Stat>
                <StatLabel>Average Days Outstanding</StatLabel>
                <StatNumber>{stats.avgDaysOutstanding}</StatNumber>
                <StatHelpText>Days to payment</StatHelpText>
              </Stat>
            </CardBody>
          </Card>
        </GridItem>
      </Grid>
    </Box>
  )
}

export default Dashboard