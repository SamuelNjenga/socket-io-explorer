const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http); //initialize a new instance of socket.io by passing the http (the HTTP server) object

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

//listen on the connection event for incoming sockets and log it to the console
io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
      console.log('user disconnected'); //Each socket also fires a special disconnect event:
    });
  });

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      console.log('message: ' + msg);
    });
  });

  io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg); //send the message to everyone, including the sender.
  });
});
http.listen(3000, () => {
  console.log('listening on *:3000')
})
