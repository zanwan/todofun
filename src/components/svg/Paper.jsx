import * as React from 'react';

export function PaperGraphic() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      width='345'
      height='467'
    >
      <g>
        <defs>
          <path
            d='M 9 9.5 L 13 89.5 L 20 323.5 L 9 451 L 172.5 457.5 L 336 454.5 L 331.5 443.5 L 336 241 L 331.5 26 L 336 9.5 L 178.5 13 L 63.5 9.5 Z'
            id='a1000z'
          ></path>
          <filter
            id='a1002z'
            x='-7.1%'
            y='-5.2%'
            width='113.6%'
            height='110.0%'
            filterUnits='objectBoundingBox'
          >
            <feOffset dx='2' dy='2' in='SourceAlpha' result='a1004z'></feOffset>
            <feGaussianBlur stdDeviation='3' in='a1004z' result='a1005z'></feGaussianBlur>
            <feColorMatrix
              colorInterpolationFilters='sRGB'
              values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.25 0'
              type='matrix'
              in='a1005z'
              result='a1006z'
            ></feColorMatrix>
          </filter>
        </defs>
        <g filter='url(#a1002z)'>
          <use
            strokeWidth='4'
            stroke='black'
            fill='black'
            fillOpacity='1'
            strokeOpacity='1'
            xlinkHref='#a1000z'
            clipPath='url(#a1001z)'
          ></use>
        </g>
        <use
          xlinkHref='#a1000z'
          fill='rgb(255, 255, 255)'
          clipPath='url(#a1001z)'
          strokeWidth='4'
          stroke='hsl(0, 0%, 0%)'
        ></use>
      </g>
    </svg>
  );
}
