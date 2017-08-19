const React = require('react');
const axios = require('axios');
const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;
const Switch = ReactRouter.Switch;

const ListFilms = require('./ListFilms');
const Nav = require('./Nav');

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path='/' component={ListFilms} />
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
