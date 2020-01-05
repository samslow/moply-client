import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Playlist, PlaylistLobby } from 'pages';
import Menu from 'components/Menu';

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Route exact path="/" component={Home} />
        <Switch>
          <Route path="/playlist/:channelId" component={Playlist} />
          <Route path="/playlist" component={PlaylistLobby} />
        </Switch>
      </div>
    );
  }
}

export default App;