import { Route, NavLink } from 'react-router-dom';
import Checkboxes from './Checkboxes';
import GithubUserSearch from './GithubUserSearch';
import { Button } from 'semantic-ui-react';
import './styles/app.scss';

function App() {
  return (
    <div className='App'>
      <div className='navBar'>
        <Button className='button facebook' as={NavLink} to='/checkboxes'>
          Checkboxes
        </Button>

        <Button className='button black' as={NavLink} to='/github-user-search'>
          GitHub Search
        </Button>
      </div>

      <Route exact path='/checkboxes'>
        <Checkboxes />
      </Route>

      <Route exact path='/github-user-search'>
        <GithubUserSearch />
      </Route>
    </div>
  );
}

export default App;
