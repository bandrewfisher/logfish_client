import React from 'react';

import CodeBlock from '../base/CodeBlock';

const Sidebar = () => (
  <div className="px-6">
    <h3 className="text-gray-700 font-semibold text-xl mb-6">
      How&apos;s it work?
    </h3>
    <ul className="text-gray-700 text-lg">
      <li>1. Download the npm package.</li>
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
          {'import lf from \'logfish\''}
        </CodeBlock>
      </li>
      <li>3. Copy your API key.</li>
      <li>4. Log!</li>
      <li>
        <CodeBlock>
          {'const logger = new lf(\'API_KEY_HERE\')'}
          <br />
          {'logger.info(\'my cool message\')'}
          <br />
          {'logger.warn(\'oh no!\')'}
          <br />
          {'logger.error(\'We have a problem\')'}
          <br />
          {'logger.debug(\'Better than console.log\')'}
        </CodeBlock>
      </li>
    </ul>
  </div>
);

export default Sidebar;
