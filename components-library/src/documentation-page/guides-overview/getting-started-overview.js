import React from 'react';
import 'styled-components/macro';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const GettingStartedOverview = () => (
  <div
    css={`
      padding: 1rem;
    `}
  >
    <h1>Getting started</h1>
    <p>
      The first step to use the <b>GS UI library</b> is to install the package
      in your package json. To do that you have to run:
    </p>
    <SyntaxHighlighter language='javascript' style={a11yDark}>
      {`npm install gs-ui-library`}
    </SyntaxHighlighter>
    <p
      css={`
        padding-top: 1rem;
      `}
    >
      Once you have the package installed, you will notice that{' '}
      <a href='https://www.npmjs.com/package/react'>{`react >= 17.0.1`}</a>,{' '}
      <a href='https://www.npmjs.com/package/react-dom'>{`react-dom >= 17.0.1`}</a>{' '}
      and{' '}
      <a href='https://www.npmjs.com/package/styled-components'>{`styled components >= 5.2.2`}</a>{' '}
      are peer dependencies. You need to install these dependencies in your
      project to use the library
    </p>
    <p
      css={`
        padding-top: 1rem;
      `}
    >
      All done! Once you finish with this, you are ready to use the library!
    </p>
  </div>
);

export default GettingStartedOverview;
