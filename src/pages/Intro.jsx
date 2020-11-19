import { Wrapper } from '../components/style/Wrapper';
import { Jar } from '../components/JarIcon';
import { AppTitle } from '../components/AppTitle';
import { StartBtn } from '../components/StartBtn';
import { OnOffLineHint } from '../components/onOffLineHint';

const animMotion = {
  idle: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
  exit: {
    transition: {
      duration: 0,
    },
  },
};

export function Intro() {
  return (
    <Wrapper variants={animMotion} initial='idle' animate='show' exit='exit'>
      <Jar />
      <AppTitle />
      <StartBtn title='開始' />
      <OnOffLineHint />
    </Wrapper>
  );
}
