import * as React from 'react';
import styled from 'styled-components';

// The Jar SVG is designed by zangwang. All right reserved.

function JarDesign(props) {
  return (
    <svg width={65} height={111} fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M8 3l2 19c0 1.657 10.297 3 23 3s23-1.343 23-3l2-19H8z'
        fill='url(#prefix__paint0_linear)'
      />
      <ellipse cx={33} cy={3} rx={25} ry={3} fill='url(#prefix__paint1_linear)' />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M5 13.333v4.334c0 .863 1.63 1.667 4.44 2.342V23.5c-.222 1.567-1.736 2.232-3.34 2.937-1.98.87-4.1 1.8-4.1 4.563v70c0 4.418 13.88 8 31 8 17.12 0 31-3.582 31-8V31c0-2.762-2.12-3.693-4.1-4.563-1.604-.705-3.118-1.37-3.34-2.937l-.052-3.478C59.35 19.344 61 18.535 61 17.667v-4.334C61 10.94 48.464 9 33 9S5 10.94 5 13.333zM57 13c0 1.657-10.745 3-24 3S9 14.657 9 13s10.745-3 24-3 24 1.343 24 3z'
        fill='url(#prefix__paint2_linear)'
      />
      <path
        d='M9.44 20.01h1a1 1 0 00-.766-.973l-.234.972zm0 3.49l.99.14a.999.999 0 00.01-.14h-1zM6.1 26.437l.402.915-.402-.915zm53.8 0l-.402.915.402-.915zM56.56 23.5l-1 .015c0 .042.004.084.01.125l.99-.14zm-.052-3.478l-.232-.973a1 1 0 00-.768.988l1-.015zM6 17.667v-4.334H4v4.334h2zm3.674 1.37c-1.376-.33-2.395-.678-3.047-1.017-.328-.17-.513-.311-.603-.407-.086-.09-.024-.069-.024.054H4c0 .554.266 1 .573 1.323.303.32.702.583 1.133.806.865.448 2.066.84 3.5 1.186l.468-1.945zm-1.234.972V23.5h2v-3.49h-2zm.01 3.35c-.063.443-.295.786-.758 1.13-.498.37-1.165.667-1.995 1.032l.805 1.831c.775-.34 1.667-.727 2.382-1.258.75-.557 1.387-1.33 1.546-2.454l-1.98-.28zm-2.753 2.162c-.957.42-2.136.93-3.052 1.738C1.67 28.121 1 29.31 1 31h2c0-1.073.39-1.73.97-2.242.638-.564 1.51-.957 2.532-1.406l-.805-1.83zM1 31v70h2V31H1zm0 70c0 1.661 1.285 2.973 2.915 3.968 1.689 1.03 4.066 1.922 6.915 2.657C16.543 109.099 24.38 110 33 110v-2c-8.501 0-16.163-.89-21.67-2.311-2.761-.713-4.924-1.545-6.373-2.429C3.45 102.341 3 101.548 3 101H1zm32 9c8.62 0 16.457-.901 22.17-2.375 2.85-.735 5.226-1.627 6.915-2.657C63.715 103.973 65 102.661 65 101h-2c0 .548-.45 1.341-1.957 2.26-1.449.884-3.611 1.716-6.373 2.429C49.163 107.11 41.501 108 33 108v2zm32-9V31h-2v70h2zm0-70c0-1.69-.67-2.879-1.645-3.74-.916-.81-2.094-1.318-3.052-1.739l-.805 1.831c1.023.45 1.894.842 2.533 1.406.58.512.969 1.17.969 2.242h2zm-4.697-5.479c-.83-.365-1.497-.663-1.995-1.033-.463-.343-.695-.686-.758-1.128l-1.98.28c.16 1.124.795 1.897 1.546 2.454.715.531 1.607.918 2.382 1.258l.805-1.83zm-2.743-2.036l-.052-3.478-2 .03.052 3.478 2-.03zM60 17.667c0-.124.063-.145-.026-.052-.092.097-.28.24-.612.412-.662.34-1.694.69-3.086 1.022l.464 1.945c1.45-.346 2.664-.74 3.538-1.19.435-.224.837-.488 1.143-.808.31-.324.579-.772.579-1.33h-2zm0-4.334v4.334h2v-4.334h-2zM33 10c7.697 0 14.644.483 19.646 1.257 2.51.389 4.484.844 5.81 1.329.669.244 1.113.476 1.372.672.281.212.172.245.172.075h2c0-.768-.5-1.319-.966-1.67-.487-.37-1.143-.682-1.89-.956-1.509-.551-3.634-1.03-6.192-1.426C47.82 8.487 40.767 8 33 8v2zM6 13.333c0 .17-.109.137.172-.075.259-.196.703-.428 1.372-.672 1.326-.485 3.3-.94 5.81-1.329C18.356 10.483 25.303 10 33 10V8c-7.767 0-14.82.487-19.952 1.281-2.558.396-4.683.875-6.191 1.426-.748.274-1.404.587-1.891.955-.465.352-.966.903-.966 1.671h2zM33 17c6.655 0 12.699-.337 17.095-.886 2.19-.274 4.01-.606 5.302-.987.639-.189 1.207-.407 1.637-.669.36-.22.966-.682.966-1.458h-2c0-.362.27-.419-.009-.249-.21.129-.584.288-1.16.458-1.138.336-2.832.651-4.985.92C45.556 14.665 39.6 15 33 15v2zM8 13c0 .776.605 1.238.966 1.458.43.262.998.48 1.637.669 1.292.381 3.111.713 5.302.987 4.396.55 10.44.886 17.095.886v-2c-6.6 0-12.556-.335-16.846-.871-2.153-.269-3.848-.584-4.985-.92-.576-.17-.95-.33-1.16-.458-.279-.17-.009-.113-.009.249H8zm25-4c-6.655 0-12.699.337-17.095.886-2.19.274-4.01.606-5.302.987-.639.189-1.207.407-1.637.669-.36.22-.966.682-.966 1.458h2c0 .362-.27.419.009.249.21-.129.584-.288 1.16-.458 1.137-.336 2.832-.651 4.985-.92C20.444 11.335 26.4 11 33 11V9zm25 4c0-.776-.605-1.238-.966-1.458-.43-.262-.998-.48-1.637-.669-1.291-.381-3.111-.713-5.302-.987C45.699 9.336 39.655 9 33 9v2c6.6 0 12.556.335 16.846.871 2.153.269 3.848.584 4.985.92.576.17.95.33 1.16.458.279.17.009.113.009-.249h2z'
        fill='url(#prefix__paint3_linear)'
      />
      <ellipse
        cx={33}
        cy={101}
        rx={30}
        ry={8}
        fill='url(#prefix__paint4_linear)'
        fillOpacity={0.8}
        stroke='url(#prefix__paint5_linear)'
        strokeOpacity={0.7}
        strokeWidth={0.5}
      />
      <g filter='url(#prefix__filter0_f)'>
        <path
          d='M2 101c0-4.418 13.88-8 31-8 0 0 12 0 21.5 2.5'
          stroke='url(#prefix__paint6_linear)'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <g filter='url(#prefix__filter1_f)'>
        <path
          d='M2 100c0-4.418 13.88-8 31-8 0 0 12 0 21.5 2.5'
          stroke='url(#prefix__paint7_linear)'
          strokeWidth={0.5}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <path
        d='M63 100c0 4.418-13.431 8-30 8-16.569 0-30-3.582-30-8'
        stroke='#D7D7D7'
        strokeOpacity={0.7}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M63 98c0 4.418-13.431 8-30 8-16.569 0-30-3.582-30-8'
        stroke='url(#prefix__paint8_linear)'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M63 99c0-4.418-13.431-8-30-8-16.569 0-30 3.582-30 8'
        stroke='url(#prefix__paint9_linear)'
        strokeOpacity={0.7}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M11 20.212a.5.5 0 10-1 0h1zm-.5 3.288l.496.066A.498.498 0 0011 23.5h-.5zm-2.925 2.934l-.225-.447.225.447zM3.5 102.5a.5.5 0 001 0h-1zm52.454-82.285a.5.5 0 00-1 .014l1-.014zM55.5 23.5l-.5.007c0 .02.002.04.004.059l.496-.066zm2.925 2.934l.225-.447-.225.447zM61.5 101a.5.5 0 001 0h-1zm-56-87h1-1zM33 9.5c-7.473 0-14.248.449-19.165 1.177-2.455.364-4.468.8-5.878 1.294-.703.246-1.285.516-1.702.818-.401.29-.755.69-.755 1.211h1c0-.032.024-.171.342-.401.303-.22.78-.451 1.445-.684 1.322-.463 3.263-.889 5.694-1.249C18.837 10.946 25.561 10.5 33 10.5v-1zM60.5 14c0-.52-.353-.92-.755-1.211-.417-.302-1-.572-1.701-.818-1.41-.494-3.424-.93-5.879-1.294C47.248 9.949 40.472 9.5 33 9.5v1c7.44 0 14.163.447 19.019 1.166 2.431.36 4.372.786 5.694 1.249.664.233 1.142.465 1.445.684.318.23.342.37.342.401h1zm0 4v-4h-1v4h1zM33 22.5c7.472 0 14.248-.448 19.165-1.177 2.455-.364 4.468-.8 5.879-1.294.702-.246 1.284-.516 1.7-.818.403-.29.756-.69.756-1.211h-1c0 .032-.024.171-.342.401-.303.22-.78.451-1.445.684-1.322.463-3.263.889-5.694 1.249-4.855.72-11.58 1.166-19.019 1.166v1zM5.5 18c0 .52.354.92.755 1.211.417.302 1 .572 1.702.818 1.41.494 3.423.93 5.878 1.294C18.752 22.052 25.527 22.5 33 22.5v-1c-7.44 0-14.163-.447-19.019-1.166-2.431-.36-4.372-.786-5.694-1.249-.664-.233-1.142-.465-1.445-.684-.318-.23-.342-.37-.342-.401h-1zm0-4v4h1v-4h-1zM33 16.962c6.404 0 12.21-.311 16.424-.815 2.103-.252 3.828-.554 5.036-.896.6-.17 1.103-.357 1.465-.569.322-.188.718-.503.718-.99h-1c0-.104.072-.046-.223.127-.254.148-.661.309-1.232.47-1.134.32-2.798.616-4.883.865-4.163.498-9.928.807-16.305.807v1zm-23.643-3.27c0 .487.396.802.718.99.362.212.864.4 1.465.57 1.208.341 2.933.643 5.036.895 4.213.504 10.02.815 16.424.815v-1c-6.377 0-12.142-.31-16.305-.808-2.085-.25-3.75-.544-4.883-.865-.57-.161-.978-.322-1.232-.47-.295-.173-.223-.23-.223-.127h-1zM33 10.423c-6.404 0-12.21.31-16.424.815-2.103.251-3.828.553-5.036.895-.6.17-1.103.358-1.465.57-.322.188-.718.503-.718.99h1c0 .103-.072.045.223-.127.254-.149.661-.309 1.232-.47 1.134-.321 2.798-.616 4.883-.865 4.163-.498 9.928-.808 16.305-.808v-1zm23.643 3.27c0-.487-.396-.802-.718-.99-.362-.212-.864-.4-1.465-.57-1.208-.342-2.933-.644-5.036-.895-4.213-.505-10.02-.815-16.424-.815v1c6.377 0 12.142.31 16.305.808 2.085.25 3.75.544 4.883.864.57.162.978.322 1.232.47.295.173.223.231.223.127h1zM10 20.211V23.5h1v-3.288h-1zm.004 3.222c-.167 1.26-1.199 1.82-2.654 2.553l.45.893c1.339-.674 2.948-1.445 3.196-3.314l-.992-.132zM7.35 25.987c-.85.428-1.822.913-2.567 1.669-.77.78-1.283 1.831-1.283 3.344h1c0-1.252.41-2.05.995-2.642.61-.619 1.426-1.035 2.305-1.478l-.45-.893zM3.5 31v71.5h1V31h-1zm51.454-10.77L55 23.506l1-.014-.046-3.278-1 .014zm.05 3.336c.248 1.869 1.857 2.64 3.196 3.314l.45-.893c-1.455-.733-2.487-1.293-2.654-2.553l-.992.132zM58.2 26.88c.88.443 1.695.86 2.305 1.478.585.593.995 1.39.995 2.642h1c0-1.513-.513-2.563-1.283-3.345-.745-.755-1.717-1.24-2.567-1.668l-.45.893zM61.5 31v70h1V31h-1z'
        fill='url(#prefix__paint10_linear)'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M8 3l1 10c0 1.657 10.745 3 24 3s24-1.343 24-3l1-10H8z'
        fill='url(#prefix__paint11_linear)'
      />
      <ellipse cx={33} cy={3} rx={25} ry={3} fill='url(#prefix__paint12_linear)' />
      <g filter='url(#prefix__filter2_f)'>
        <path
          d='M45.5 84C68.095 80.221 57 33 57 33s-14.432 3-24 3-25-3-25-3 13.2 55.064 37.5 51z'
          fill='url(#prefix__paint13_linear)'
          fillOpacity={0.7}
        />
      </g>
      <g filter='url(#prefix__filter3_f)'>
        <path
          d='M2 101V60s0 19 15 33c17.345 16.189 26.14 15.601 26.94 15.508l.06-.008-.06.008c-.93.122-12.556 1.561-26.94-1.008C2 104.821 2 101 2 101z'
          fill='url(#prefix__paint14_linear)'
          fillOpacity={0.8}
        />
      </g>
      <defs>
        <linearGradient
          id='prefix__paint0_linear'
          x1={60}
          y1={5}
          x2={11}
          y2={21.5}
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#F6DBBF' />
          <stop offset={0.65} stopColor='#8A512E' />
          <stop offset={1} stopColor='#552813' />
        </linearGradient>
        <linearGradient
          id='prefix__paint1_linear'
          x1={34}
          y1={-8}
          x2={9}
          y2={7}
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#F6DBBF' />
          <stop offset={1} stopColor='#B37043' />
        </linearGradient>
        <linearGradient
          id='prefix__paint2_linear'
          x1={32.75}
          y1={20}
          x2={32.75}
          y2={109}
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#F0EBF1' stopOpacity={0.4} />
          <stop offset={1} stopColor='#F9F5F6' stopOpacity={0.3} />
        </linearGradient>
        <linearGradient
          id='prefix__paint3_linear'
          x1={33}
          y1={9}
          x2={33}
          y2={109}
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#F1F1F1' stopOpacity={0.25} />
          <stop offset={1} stopColor='#989898' stopOpacity={0.51} />
        </linearGradient>
        <linearGradient
          id='prefix__paint4_linear'
          x1={33}
          y1={93}
          x2={33}
          y2={109}
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#F3F3F3' stopOpacity={0.58} />
          <stop offset={1} stopColor='#D7D6D6' stopOpacity={0.6} />
        </linearGradient>
        <linearGradient
          id='prefix__paint5_linear'
          x1={33}
          y1={93}
          x2={33}
          y2={109}
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#F2F2F2' stopOpacity={0.46} />
          <stop offset={1} stopColor='#C8C8C8' stopOpacity={0.51} />
        </linearGradient>
        <linearGradient
          id='prefix__paint6_linear'
          x1={52}
          y1={101}
          x2={-3.5}
          y2={101}
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#565656' />
          <stop offset={1} stopColor='#565656' stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id='prefix__paint7_linear'
          x1={55}
          y1={100}
          x2={10.5}
          y2={100}
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#fff' />
          <stop offset={1} stopColor='#fff' stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id='prefix__paint8_linear'
          x1={63}
          y1={106}
          x2={3}
          y2={106}
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#fff' stopOpacity={0.07} />
          <stop offset={0.5} stopColor='#fff' />
          <stop offset={1} stopColor='#fff' stopOpacity={0.23} />
        </linearGradient>
        <linearGradient
          id='prefix__paint9_linear'
          x1={63}
          y1={95}
          x2={3.965}
          y2={93.595}
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#F2F2F2' stopOpacity={0.2} />
          <stop offset={0.453} stopColor='#fff' />
          <stop offset={1} stopColor='#F2F2F2' stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id='prefix__paint10_linear'
          x1={0}
          y1={100.5}
          x2={56}
          y2={13.5}
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#fff' />
          <stop offset={1} stopColor='#fff' stopOpacity={0.03} />
        </linearGradient>
        <linearGradient
          id='prefix__paint11_linear'
          x1={60}
          y1={5}
          x2={11}
          y2={21.5}
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#F6DBBF' />
          <stop offset={0.65} stopColor='#8A512E' />
          <stop offset={1} stopColor='#552813' />
        </linearGradient>
        <linearGradient
          id='prefix__paint12_linear'
          x1={34}
          y1={-8}
          x2={9}
          y2={7}
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#F6DBBF' />
          <stop offset={1} stopColor='#B37043' />
        </linearGradient>
        <linearGradient
          id='prefix__paint13_linear'
          x1={30}
          y1={28.5}
          x2={39}
          y2={89}
          gradientUnits='userSpaceOnUse'
        >
          <stop offset={0.354} stopColor='#fff' stopOpacity={0.58} />
          <stop offset={1} stopColor='#fff' stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id='prefix__paint14_linear'
          x1={-4.5}
          y1={92}
          x2={19.5}
          y2={89}
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#CCC7C7' />
          <stop offset={1} stopColor='#C5B3B3' stopOpacity={0} />
        </linearGradient>
        <filter
          id='prefix__filter0_f'
          x={0.5}
          y={91.5}
          width={55.5}
          height={11}
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity={0} result='BackgroundImageFix' />
          <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
          <feGaussianBlur stdDeviation={0.5} result='effect1_foregroundBlur' />
        </filter>
        <filter
          id='prefix__filter1_f'
          x={0.75}
          y={90.75}
          width={55}
          height={10.5}
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity={0} result='BackgroundImageFix' />
          <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
          <feGaussianBlur stdDeviation={0.5} result='effect1_foregroundBlur' />
        </filter>
        <filter
          id='prefix__filter2_f'
          x={7}
          y={32}
          width={53.724}
          height={53.214}
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity={0} result='BackgroundImageFix' />
          <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
          <feGaussianBlur stdDeviation={0.5} result='effect1_foregroundBlur' />
        </filter>
        <filter
          id='prefix__filter3_f'
          x={1}
          y={59}
          width={44}
          height={51.019}
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity={0} result='BackgroundImageFix' />
          <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
          <feGaussianBlur stdDeviation={0.5} result='effect1_foregroundBlur' />
        </filter>
      </defs>
    </svg>
  );
}

const JarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  min-width: 120px;
  min-height: 120px;
`;

function JarIconDesign() {
  return (
    <JarWrapper>
      <JarDesign></JarDesign>
    </JarWrapper>
  );
}

export default JarIconDesign;
