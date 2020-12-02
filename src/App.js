import React from 'react';
import { MainContainer } from './components/style/MainContainer';
// Pages
import { Intro } from './pages/Intro';
import { Home } from './pages/Home';
import { AllTodo } from './pages/AllTodo';
// Animation
import { AnimatePresence } from 'framer-motion';
// Router
import { Switch, Route, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();

  return (
    <MainContainer>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route exact path='/'>
            <Intro />
          </Route>
          <Route exact path='/home'>
            <Home pathState={location.state} />
          </Route>
          <Route exact path='/all'>
            <AllTodo />
          </Route>
        </Switch>
      </AnimatePresence>
    </MainContainer>
  );
}

export default App;
