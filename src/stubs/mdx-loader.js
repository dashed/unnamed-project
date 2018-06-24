// @flow

/* istanbul ignore file */
// ignore entire file from code coverage

// ref: https://gist.github.com/MoOx/12ac2bee8d876a5c1fe1593e4815895d

// Make flow happy for statements of: import Hello from './hello.mdx';
//
// Imported *.mdx files are just React components

// 3rd-party imports

import * as React from 'react';

// component

const ImportedMDXFile = () => {
  return <div />;
};

export default ImportedMDXFile;
