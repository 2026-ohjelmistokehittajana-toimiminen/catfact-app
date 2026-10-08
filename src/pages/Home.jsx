import { Button, Container, Paper, Stack, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import axios from 'axios'

const getRandomFact = async () => {
  try {
    const response = await axios.get('https://catfact.ninja/fact')
    const data = await response.data
    return data.fact
  } catch (error) {
    console.error('Error fetching random fact:', error)
    return 'Failed to fetch a random fact.'
  }
}

const Home = () => {
  const [randomFact, setRandomFact] = useState('')

  useEffect(() => {
    getRandomFact().then((fact) => setRandomFact(fact))
  }, [])

  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Stack spacing={3}>
        <Typography variant="h4" component="h1" color="primary">
          Welcome to the Cat Fact App!
        </Typography>
        <Paper elevation={1} sx={{ p: 3 }}>
          <Stack spacing={2}>
            <Typography variant="h6" component="h2">
              Random Cat Fact
            </Typography>
            <Typography component="p">
              {randomFact}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => getRandomFact().then((fact) => setRandomFact(fact))}
              sx={{ alignSelf: 'flex-start' }}
            >
              Get New Fact
            </Button>
          </Stack>
        </Paper>
      </Stack>
    </Container>
  )
}

export default Home