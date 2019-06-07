import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Payment from 'containers/Payment';
import PhoneList from 'containers/PhoneList';
import ClientList from 'containers/ClientList';
import ModelList from 'containers/ModelList';
import ServiceList from 'containers/ServiceList';
import TariffList from 'containers/TariffList';

const Routes = () => (
  <Switch>
    <Route exact path="/phones" component={PhoneList} />
    <Route exact path="/pay" component={Payment} />
    <Route exact path="/clients" component={ClientList} />
    <Route exact path="/models" component={ModelList} />
    <Route exact path="/services" component={ServiceList} />
    <Route exact path="/tariffs" component={TariffList} />
    <Route exact path="/" render={() => <Redirect to="/phones" />} />
    <Route render={() => <Redirect to="/phones" />} />
  </Switch>
);

export default Routes;
