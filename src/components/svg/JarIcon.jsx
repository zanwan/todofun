import * as React from 'react';
import styled from 'styled-components';

// Not Using for Now

function JarSVG() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      x='0'
      y='0'
      enableBackground='new 0 0 463.4 463.4'
      version='1.1'
      viewBox='0 0 463.4 463.4'
      xmlSpace='preserve'
    >
      <path
        d='M401.028 668.96c-.1-.1-.1-.2-.2-.3-3.2-4.8-6.9-9.6-10.4-14.2-10-13.2-20.4-26.8-22.3-41.3 12.3-.8 22.5-11.3 22.5-23.6 0-12.8-10.9-23.7-23.9-23.7h-88c-9.2-15.8-26.9-25.5-47.1-25.5h-.1c-20.1 0-37.8 9.9-46.4 25.5h-88.5c-13 0-23.9 10.8-23.9 23.7 0 12.4 10.3 23 22.7 23.6-3.3 14.6-14.5 30.2-25.4 45.4-2.4 3.3-4.8 6.7-7.1 10-.1.1-.2.3-.3.4-5.1 8.4-7.4 18.6-6.1 28v231.9c-1.3 23.8 8.6 46.9 26.7 62l.9.6c11.9 7.3 24.7 11.1 38 11.1l219.6 1.2c11.6 0 22.9-2.9 32.7-8.4.2-.1.5-.3.7-.5 20.4-14.8 32.1-38.7 32.1-65.8v-231.4c-.1-8.4-1.2-20.3-6.2-28.7zm-169.5-113.6h.1c10.8 0 20.9 3.9 28 10.5h-55.8c6.7-6.6 16.6-10.5 27.7-10.5zm-143.8 34.2c0-4.5 4.2-8.7 8.9-8.7h270c4.7 0 8.9 4.1 8.9 8.7s-4.2 8.7-8.9 8.7h-270c-4.7-.1-8.9-4.2-8.9-8.7zm278.8 393c-7.5 4.1-16.1 6.3-24.9 6.3l-219.6-1.2c-10.3 0-20.3-2.9-29.7-8.6-14.2-12.1-22-30.5-20.9-49.4v-233.1c0-.4 0-.7-.1-1.1-.9-6 .6-12.9 3.9-18.5 2.2-3.2 4.6-6.5 6.9-9.7 12.2-17 24.8-34.5 28.3-52.7.1-.5.1-.9.1-1.4h242.4v.8c2.1 18.9 14 34.5 25.4 49.5 3.5 4.6 6.8 9 9.8 13.4 2.4 4.1 3.9 11.9 3.9 20.8v231.5h.1c0 22-9.3 41.5-25.6 53.4z'
        transform='translate(0 -540.36)'
      ></path>
      <path
        d='M366.828 805.96c-4.1 0-7.5 3.4-7.5 7.5v94.6c0 17.8-5.6 35.2-16.3 50.4-2.4 3.3-1.6 8 1.8 10.4 1.3 1 2.8 1.4 4.3 1.4 2.4 0 4.7-1.1 6.2-3.1 12.4-17.8 19-38.2 19-59.1v-94.6c0-4.1-3.4-7.5-7.5-7.5z'
        transform='translate(0 -540.36)'
      ></path>
    </svg>
  );
}

const JarWrapper = styled.svg`
  width: 100px;
  height: 100px;
  min-width: 100px;
  min-height: 100px;
`;

export function Jar() {
  return (
    <JarWrapper>
      <JarSVG></JarSVG>
    </JarWrapper>
  );
}
