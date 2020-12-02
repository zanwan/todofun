import { IntroCopy } from '../components/controller/IntroCopy';
import { StartBtn } from '../components/controller/StartBtn';
import { OnOffLineHint } from '../components/controller/onOffLineHint';
// UI styled
import { Wrapper } from '../components/style/Wrapper';
import { Jar } from '../components/svg/JarIcon';

// Animation
import { dissolve } from '../animation/dissolve';

export function Intro() {
  return (
    <Wrapper variants={dissolve} initial='idle' animate='show' exit='exit'>
      <Jar />
      <IntroCopy />
      <StartBtn title='開始' />
      <OnOffLineHint />
    </Wrapper>
  );
}
