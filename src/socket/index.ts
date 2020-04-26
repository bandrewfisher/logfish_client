import io from 'socket.io-client';

// const socket = io.connect('http://localhost:8081');
const socket = io.connect(process.env.LOGFISH_SERVER_URL || 'http://localhost:8081');
export default socket;
