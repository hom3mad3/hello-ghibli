const React = require('react');
const axios = require('axios');
const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;
const Switch = ReactRouter.Switch;

const Container = require('./Container');
const Nav = require('./Nav');

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <h1>Hello Ghibli</h1>
          <Switch>
            <Route exact path='/' component={Container} />
            <Route render={() => {
              return <h2>:(</h2>
            }} />
          </Switch>
        </div>
      </Router>
    )
  }
}

module.exports = App;
