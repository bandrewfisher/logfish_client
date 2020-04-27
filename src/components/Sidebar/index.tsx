import React from 'react';

import CodeBlock from '../base/CodeBlock';

const Sidebar = () => (
  <div className="px-6">
    <h3 className="text-gray-700 font-semibold text-xl mb-6">
      How&apos;s it work?
    </h3>
    <ul className="text-gray-700 text-lg">
      <li>
        1.
        <a href="https://www.npmjs.com/package/logfish" className="text-blue-500 hover:underline">
          {' Download the npm package'}
.
        </a>
      </li>
      <li>
        <CodeBlock>$ npm install logfish</CodeBlock>
      </li>
      <li>2. Create a logfish object.</li>
      <li>
        <CodeBlock>
          {'const lf = require(\'logfish\').default'}
          <br />
          {'// or '}
          <br />
          {'import Logfish from \'logfish\''}
        </CodeBlock>
      </li>
      <li>3. Copy your API key.</li>
      <li>4. Log!</li>
      <li>
        <CodeBlock>
          {'const lf = new Logfish(\'API_KEY_HERE\', \'SERVER_URL\');'}
          <br />
          {'lf.info(\'my cool message\')'}
          <br />
          {'lf.warn(\'oh no!\')'}
          <br />
          {'lf.error(\'We have a problem\')'}
          <br />
          {'lf.debug(\'Better than console.log\')'}
        </CodeBlock>
      </li>
    </ul>
  </div>
);

export default Sidebar;
