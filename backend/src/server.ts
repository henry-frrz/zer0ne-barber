import express from 'express'

const app = express()
const port = 3333

app.get('/health', (request, response) => {
  response.json({ status: 'Hello World!' })
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
