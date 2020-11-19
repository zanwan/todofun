import styled from 'styled-components';
import { motion } from 'framer-motion';

export const WrapperFlipR = styled(motion.div)`
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
  padding: 120px 15px 0px 15px;
  border: 2px solid red;
  margin: auto;
`;
