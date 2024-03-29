import express from 'express'
const app = express()
app.use(express.json) // Middleware que transforma la req.body a json

const PORT = 3000

app.get('/ping', (_, res) => {
  console.log('Someone pinged here!!!')
  res.send('pong')
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})