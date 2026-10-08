import { Box, Container, Paper, Stack, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import axios from "axios"

const Breeds = () => {
  const [breeds, setBreeds] = useState([])

  useEffect(() => {
    axios.get('https://catfact.ninja/breeds?limit=10')
      .then(response => {
        setBreeds(response.data.data)
      })
      .catch(error => {
        console.error('Error fetching cat breeds:', error)
      })
  }, [])

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Stack spacing={1} sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" color="primary">
          Cat Breeds
        </Typography>
        <Typography color="text.secondary">
          Here you can find information about different cat breeds.
        </Typography>
      </Stack>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
          gap: 2,
        }}
      >
        {breeds.map((breed) => (
          <Paper key={breed.breed} variant="outlined" sx={{ p: 2.5 }}>
            <Stack spacing={1.5}>
              <Typography variant="h6" component="h2" color="primary">
                {breed.breed}
              </Typography>
              <Stack spacing={0.5}>
                <Typography variant="body2">
                  <Box component="span" sx={{ color: 'text.secondary' }}>Origin: </Box>
                  {breed.origin}
                </Typography>
                <Typography variant="body2">
                  <Box component="span" sx={{ color: 'text.secondary' }}>Country: </Box>
                  {breed.country}
                </Typography>
                <Typography variant="body2">
                  <Box component="span" sx={{ color: 'text.secondary' }}>Coat: </Box>
                  {breed.coat}
                </Typography>
                <Typography variant="body2">
                  <Box component="span" sx={{ color: 'text.secondary' }}>Pattern: </Box>
                  {breed.pattern}
                </Typography>
              </Stack>
            </Stack>
          </Paper>
        ))}
      </Box>
    </Container>
  )
}

export default Breeds