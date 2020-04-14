import React, { useState, useEffect, ReactNode } from 'react';
import cx from 'classnames';
import socket from './socket';

export interface NavItemProps {
  children: ReactNode;
  end?: boolean;
}
const NavItem = ({ children, end }: NavItemProps) => {
  return (
    <div
      className={cx(
        'font-semibold text-gray-500 hover:text-blue-600 cursor-pointer',
        end ? '' : 'mr-3'
      )}
    >
      {children}
    </div>
  );
};

const CodeBlock = ({ children }: { children: ReactNode }) => (
  <div className="bg-gray-200 rounded-md border-gray-300 border p-2 inline-block">
    <code>{children}</code>
  </div>
);

export interface LfContainerProps {
  apiKey: string;
  logs: string[];
}
const LfContainer = ({ apiKey, logs }: LfContainerProps) => (
  <div className="w-full flex">
    <div className="w-1/3">
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
    <div className="w-2/3">
      <h2 className="text-2xl font-semibold text-gray-700 mb-3">
        Your temporary API key:
      </h2>
      <div className="rounded bg-green-200 p-3 border border-green-400 mb-8">
        {apiKey}
      </div>
      <h5 className="text-gray-600">Your logs will appear here!</h5>
      <textarea
        className="w-full bg-gray-200 rounded h-full"
        readOnly
        value={logs.join('\n')}
      />
    </div>
  </div>
);

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
    <div className="pt-24 px-6">
      <div className="fixed top-0 inset-x-0 bg-transparent h-24 flex justify-between p-6 text-xl">
        <div className="font-bold">logfish</div>
        <div className="flex">
          <NavItem>about</NavItem>
          <NavItem end>support</NavItem>
        </div>
      </div>
      <LfContainer apiKey={apiKey} logs={logs} />
    </div>
  );
};
export default App;
