const app = require('express')()
const http = require('http').createServer(app)

app.get('/', (req, res) => {
  res.send('<h1>Welcome to the socket.io apps</h1>')
})

http.listen(3000, () => {
  console.log('listening on *:3000')
})
