import styled from 'styled-components';
import { motion } from 'framer-motion';

export const WrapperFlip = styled(motion.div)`
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  width: calc(100% / 2);
  min-width: 375px;
  height: 100vh;
  padding: 120px 15px 100px 15px;
  margin: auto;
  overflow-y: scroll;
`;
