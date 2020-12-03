export function wrapperDetectRoute(pathState) {
  if (pathState === undefined || pathState.from === 'Intro') {
    return flipPage.idleFromIntro;
  } else if (pathState.from === 'AllTodo') {
    return flipPage.idle;
  }
}

export function jarDetectRoute(pathState) {
  if (pathState === undefined || pathState.from === 'Intro') {
    return jarMotion.idle;
  } else if (pathState.from === 'AllTodo') {
    return false;
  }
}

export const flipPage = {
  idleFromIntro: {
    transition: {
      duration: 0,
    },
  },
  idle: {
    rotateY: -85,
  },
  show: {
    rotateY: 0,
    transition: {
      duration: 0.2,
    },
  },
  hidden: {
    rotateY: -85,
  },
  exit: {
    rotateY: 85,
    transition: {
      duration: 0.2,
    },
  },
};

export const jarMotion = {
  idle: {
    transition: {
      duration: 0,
    },
  },
  show: {
    scale: 1.5,
    transition: {
      duration: 0.7,
    },
  },
  hover: {
    rotate: [0, -15, 15, -10, 10, -5, 5, 0],
  },
};
