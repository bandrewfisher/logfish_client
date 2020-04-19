import React from 'react';

import CodeBlock from '../base/CodeBlock';

const Sidebar = () => (
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
);

export default Sidebar;
