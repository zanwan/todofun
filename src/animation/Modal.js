export const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

export const animeForm = {
  visible: {
    opacity: 1,
    scale: 1,
    y: '10vh',
    transition: { type: 'spring', bounce: 0.5 },
  },
  hidden: { opacity: 0, scale: 0.5, y: '25vh' },
};

export const ConfirmAnimeForm = {
  visible: {
    opacity: 1,
    scale: 1,
    y: '25vh',
    transition: { type: 'spring', bounce: 0.5 },
  },
  hidden: { opacity: 0, scale: 0.5, y: '30vh' },
};
