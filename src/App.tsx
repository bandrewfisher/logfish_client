import React, { useState, useEffect } from 'react';
import socket from './socket';

import NavBar from './components/NavBar';
import Button from './components/base/Button';
import Modal from './components/base/Modal';
import Sidebar from './components/Sidebar';

const App = () => {
  const [apiKey, setApiKey] = useState<string>('');
  const [logs, setLogs] = useState<string[]>([]);
  const [phoneModalOpen, setPhoneModalOpen] = useState<boolean>(false);
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  const verifyPhoneNumber = () => {
    socket.emit('ADD-PHONE', phoneNumber);
  };

  const renderModalContent = () => (
    <>
      <p className="mb-4">
        Input your phone number below to set up mobile logging.
      </p>
      <input
        className="mb-4 px-3 h-10 rounded-md border border-solid border-blue-500"
        value={phoneNumber}
        onChange={({ target: { value } }) => setPhoneNumber(value)}
      />
    </>
  );

  useEffect(() => {
    socket.on('CONNECT', (key: string) => {
      setApiKey(key);
    });
    socket.on('DATA', (data: any) => {
      console.log(data);
      setLogs(l => [data, ...l]);
    });
    socket.on('ADD-PHONE-ERROR', (message: string) => {
      console.log(message);
    });
  }, []);

  return (
    <div className="pt-24">
      <NavBar />
      <div className="w-full flex">
        <Sidebar />
        <div className="flex-grow pr-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">
            Your temporary API key:
          </h2>
          <div className="rounded bg-green-200 p-3 border border-green-400 mb-8">
            {apiKey}
          </div>
          <div className="flex">
            <div className="mr-4">
              <h5 className="text-lg text-gray-700">
                Your logs will appear below!
              </h5>
              <h5 className="text-lg text-gray-700">
                Or try logging to your phone!
              </h5>
            </div>
            <Button handleClick={() => setPhoneModalOpen(true)}>
              Set up phone logging
            </Button>
          </div>
          <textarea
            className="w-full bg-gray-200 rounded h-full mt-6"
            readOnly
            value={logs.join('\n')}
          />
        </div>
        <Modal
          title="Set up phone logging"
          handleClose={() => setPhoneModalOpen(false)}
          open={phoneModalOpen}
          content={renderModalContent()}
        />
      </div>
    </div>
  );
};
export default App;
