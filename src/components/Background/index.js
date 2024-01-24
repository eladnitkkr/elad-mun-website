import React from 'react';
import { Global, css } from '@emotion/react';

export default function Background({ children, src }) {
  return (
    <>
      <Global
        styles={css`
          body {
            height: 100%;
            background: url('${src}') no-repeat center center fixed !important;
            background-color: #e2e8f0 !important;
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
            background-size: cover !important;
          }
        `}
      />
      {children}
    </>
  );
}
