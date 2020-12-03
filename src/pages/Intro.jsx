import { IntroCopy } from '../components/controller/IntroCopy';
import { StartBtn } from '../components/controller/StartBtn';
import { OnOffLineHint } from '../components/controller/onOffLineHint';
// UI styled
import { Wrapper } from '../components/style/Wrapper';
import JarIconDesign from '../components/svg/JarDesign';

// Animation
import { dissolve } from '../animation/dissolve';

export function Intro() {
  return (
    <Wrapper variants={dissolve} initial='idle' animate='show' exit='exit'>
      <JarIconDesign />
      <IntroCopy />
      <StartBtn title='開始' />
      <OnOffLineHint />
    </Wrapper>
  );
}
