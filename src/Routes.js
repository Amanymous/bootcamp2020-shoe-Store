import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './component/Home';
import { About } from './component/About';
import { Product } from './component/Product';
import { ProductItem } from './component/ProductItem';
import { Navbar } from './component/Navbar';

export function RouteConfig() {
  return (
    <div>
      <Router>
        {/* <Switch> */}
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/product" component={Product} />
        <Route exact path="/product/:id" component={ProductItem} />
        <Route exact path="*" component={() => <h1>Not Found</h1>} />
        {/* </Switch> */}
      </Router>
    </div>
  );
}
