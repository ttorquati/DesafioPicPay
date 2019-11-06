import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ModalRoute } from 'react-router-modal';
import { isMobile } from 'react-device-detect';

import Home from './pages/Home';
import Payment from './pages/Payment';
import Card from './pages/Card';
import CardList from './pages/CardList';
import Confirmation from './pages/Confirmation';

export default function Routes() {
  return (
    <>
      {isMobile ? (
        <Switch>
          <Route path="/payment" component={Payment} />
          <Route path="/confirmation" component={Confirmation} />
          <Route path="/card" component={Card} />
          <Route path="/card-list" component={CardList} />
          <Route path="/" exact component={Home} />
        </Switch>
      ) : (
        <>
          <ModalRoute path="/payment" parentPath="/" component={Payment} />
          <ModalRoute
            path="/confirmation"
            parentPath="/"
            component={Confirmation}
          />
          <ModalRoute path="/card" parentPath="/" component={Card} />
          <ModalRoute path="/card-list" parentPath="/" component={CardList} />
          <ModalRoute path="/modal-test" parentPath="/">
            Hello
          </ModalRoute>
          <Route path="/" component={Home} />
        </>
      )}
    </>
  );
}
