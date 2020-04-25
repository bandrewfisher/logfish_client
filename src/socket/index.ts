import io from 'socket.io-client';

// const socket = io.connect('http://localhost:8081');
const socket = io.connect(process.env.LOGFISH_SERVER_URL || 'http://logfish.us-west-2.elasticbeanstalk.com/');
export default socket;
