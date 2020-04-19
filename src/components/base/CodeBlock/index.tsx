import React, { ReactNode } from 'react';

export interface CodeBlockProps {
  children: ReactNode;
}
const CodeBlock = ({ children }: CodeBlockProps) => (
  <div className="bg-gray-200 rounded-md border-gray-300 border p-2 inline-block">
    <code>{children}</code>
  </div>
);

export default CodeBlock;
