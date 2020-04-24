import React from 'react';

const About = () => (
  <div className="px-6 sm:px-32 lg:px-64 text-lg text-gray-900">
    <h2 className="text-2xl font-semibold text-gray-700 mb-3">
      About
    </h2>
    <p className="mb-6">
      Hi, I&apos;m Brett Fisher, the creator of Logfish.
      Logfish is a simple solution for real time logging in the browser.
      I was inspired to create it while writing React tests that could have
      significant amounts of console output and I wanted to filter out
      specific debugging statements.
    </p>
    <p className="mb-6">
      Now when you need to debug your code or just want a quick way to
      temporarily log some information in a single location without having
      to scour through lots of other irrelevant logs, Logfish has you covered!
      Just install the logfish npm package, pass it your API key, and you&apos;re
      ready to go.
    </p>
    <p>
      {'Feel free to contact me via '}
      <a href="https://twitter.com/brettfishy" className="text-blue-500 hover:underline">{'Twitter'}</a>
,
      <a href="https://www.facebook.com/profile.php?id=100011282975663" className="text-blue-500 hover:underline">
        {' '}
Facebook
      </a>
,
      {' or '}
      <a href="https://www.linkedin.com/in/brett-fisher-82580416b/" className="text-blue-500 hover:underline">LinkedIn</a>
.
    </p>
  </div>
);

export default About;
