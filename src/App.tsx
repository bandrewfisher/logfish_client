import React, { useState, useEffect, ReactNode } from 'react';
import socket from './socket';

import NavBar from './components/NavBar';
import Button from './components/base/Button';
import Modal from './components/base/Modal';

const CodeBlock = ({ children }: { children: ReactNode }) => (
  <div className="bg-gray-200 rounded-md border-gray-300 border p-2 inline-block">
    <code>{children}</code>
  </div>
);

export interface LfContainerProps {
  apiKey: string;
  logs: string[];
}
const LfContainer = ({ apiKey, logs }: LfContainerProps) => {
  const [phoneModalOpen, setPhoneModalOpen] = useState<boolean>(false);

  return (
    <div className="w-full flex">
      <div className="px-6">
        <h3 className="text-gray-600 font-semibold text-xl mb-6">
          How&apos;s it work?
        </h3>
        <ul>
          <li>1. Download the npm package.</li>
          <li>
            <CodeBlock>$ npm install logfish</CodeBlock>
          </li>
          <li>2. Create a logfish object.</li>
          <li>
            <CodeBlock>
              {`const lf = require('logfish');`}
              <br />
              {`// or `}
              <br />
              {`import lf from 'logfish';`}
            </CodeBlock>
          </li>
          <li>3. Copy your API key.</li>
          <li>4. Log!</li>
        </ul>
      </div>
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
      />
    </div>
  );
};

const App = () => {
  const [apiKey, setApiKey] = useState<string>('');
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    socket.on('CONNECT', (key: string) => {
      setApiKey(key);
    });
    socket.on('DATA', (data: any) => {
      console.log(data);
      setLogs(l => [data, ...l]);
    });
  }, []);

  return (
    <div className="pt-24">
      <NavBar />
      <LfContainer apiKey={apiKey} logs={logs} />
    </div>
  );
};
export default App;
