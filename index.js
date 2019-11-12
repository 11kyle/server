const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send('Hello, Server!');
});

io.on('connection', socket => {
    console.log('New client connected');

    socket.on('disconnect', () => {
		console.log('Client disconnected');
	});
});

server.listen(port, () => {
    console.log(`Listening on port ${port}`);
});