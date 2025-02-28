import React from 'react'
import { Box, Grid, GridItem, Stat, StatLabel, StatNumber, StatHelpText, Card, CardBody, Heading } from '@chakra-ui/react'

const CollectorDashboard = () => {
  // Mock data for the collector dashboard
  const stats = {
    totalCollections: '$125,000',
    pendingCases: '45',
    successRate: '78%',
    activeAccounts: '156'
  }

  return (
    <Box p={8}>
      <Heading mb={6}>Collector Dashboard</Heading>
      <Grid templateColumns='repeat(2, 1fr)' gap={6}>
        <GridItem>
          <Card>
            <CardBody>
              <Stat>
                <StatLabel>Total Collections</StatLabel>
                <StatNumber>{stats.totalCollections}</StatNumber>
                <StatHelpText>Current month</StatHelpText>
              </Stat>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem>
          <Card>
            <CardBody>
              <Stat>
                <StatLabel>Pending Cases</StatLabel>
                <StatNumber>{stats.pendingCases}</StatNumber>
                <StatHelpText>Requires attention</StatHelpText>
              </Stat>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem>
          <Card>
            <CardBody>
              <Stat>
                <StatLabel>Success Rate</StatLabel>
                <StatNumber>{stats.successRate}</StatNumber>
                <StatHelpText>Last 30 days</StatHelpText>
              </Stat>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem>
          <Card>
            <CardBody>
              <Stat>
                <StatLabel>Active Accounts</StatLabel>
                <StatNumber>{stats.activeAccounts}</StatNumber>
                <StatHelpText>In collection process</StatHelpText>
              </Stat>
            </CardBody>
          </Card>
        </GridItem>
      </Grid>
    </Box>
  )
}

export default CollectorDashboard