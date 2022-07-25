import http from 'http';
import app from './app';

const server = http.createServer(app);
const PORT = process.env.SERVER_PORT || 8000;

server.listen(PORT, () => {
	console.log(`server listening to port ${PORT}...`);
});
