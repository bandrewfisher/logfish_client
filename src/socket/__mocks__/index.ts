type SocketCb = (...args: any[]) => void;
const EVENTS: { [key: string]: SocketCb } = {};
const on = (event: string, cb: SocketCb) => {
  console.log('ON');
  EVENTS[event] = cb;
};

export const trigger = (event: string, ...args: any[]) => {
  console.log(EVENTS);
  EVENTS[event](args);
};

const socket = {
  on,
};

export default socket;
