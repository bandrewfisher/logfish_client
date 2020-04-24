import React, { useState, useEffect } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import socket from './socket';
import NavBar from './components/NavBar';
import Button from './components/base/Button';
import Sidebar from './components/Sidebar';
import PhoneModal from './components/PhoneModal';
import TurnOffPhoneModal from './components/PhoneModal/TurnOffPhoneModal';
import Toast from './components/base/Toast';
import About from './components/About';

const App = () => {
  const [apiKey, setApiKey] = useState<string>('');
  const [logs, setLogs] = useState<string[]>([]);
  const [phoneModalOpen, setPhoneModalOpen] = useState<boolean>(false);
  const [turnOffPhoneModalOpen, setTurnOffPhoneModalOpen] = useState<boolean>(false);
  const [copyToastOpen, setCopyToastOpen] = useState<boolean>(false);
  const [isPhoneSetup, setIsPhoneSetup] = useState<boolean>(false);

  useEffect(() => {
    socket.on('CONNECT', (key: string) => {
      setApiKey(key);
    });
    socket.on('DATA', (data: any) => {
      setLogs((l) => [data, ...l]);
    });
  }, []);

  const copyApiKey = () => {
    setCopyToastOpen(true);
  };

  return (
    <Router>
      <div className="pt-24">
        <NavBar />
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route path="/">
            <div className="w-full flex">
              <Sidebar />
              <div className="flex-grow pr-6">
                <h2 className="text-2xl font-semibold text-gray-700 mb-3">
                  Your temporary API key (click to copy):
                </h2>
                <CopyToClipboard text={apiKey} onCopy={copyApiKey}>
                  <div className="rounded bg-green-200 p-3 border border-green-400 mb-8 cursor-pointer">
                    {apiKey}
                  </div>
                </CopyToClipboard>
                <div className="flex">
                  <div className="mr-4">
                    <h5 className="text-lg text-gray-700">
                      Your logs will appear below!
                    </h5>
                    <h5 className="text-lg text-gray-700">
                      Or try logging to your phone!
                    </h5>
                  </div>
                  {isPhoneSetup ? (
                    <Button
                      handleClick={() => setTurnOffPhoneModalOpen(true)}
                    >
                      Turn off phone logging
                    </Button>
                  ) : (
                    <Button handleClick={() => setPhoneModalOpen(true)}>
                      Set up phone logging
                    </Button>
                  )}
                </div>
                <textarea
                  className="w-full bg-gray-200 rounded h-full mt-6"
                  readOnly
                  value={logs.join('\n')}
                />
              </div>
              <PhoneModal
                open={phoneModalOpen}
                handleClose={() => setPhoneModalOpen(false)}
                onSetupSuccess={() => {
                  setIsPhoneSetup(true);
                }}
              />
              <TurnOffPhoneModal
                open={turnOffPhoneModalOpen}
                handleClose={() => setTurnOffPhoneModalOpen(false)}
                handleTurnOffPhone={() => setIsPhoneSetup(false)}
              />
            </div>
            <Toast open={copyToastOpen} text="Copied!" onClose={() => setCopyToastOpen(false)} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
export default App;
