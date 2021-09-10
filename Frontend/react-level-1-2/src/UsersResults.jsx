import React from 'react';
import PropTypes from 'prop-types';

import { Card, Icon, Button, Grid } from 'semantic-ui-react';

const UsersResults = ({ isLoading, users, loadMoreUsers }) => (
  <main>
    <Card.Group itemsPerRow={3}>
      {users.map((user) => (
        <Card
          key={user.id}
          image={user.avatar_url}
          header={user.login}
          href={user.html_url}
        />
      ))}
    </Card.Group>
    <Grid centered>
      <Grid.Row>
        <Button onClick={loadMoreUsers}>
          <Icon
            loading={isLoading}
            name={isLoading ? 'spinner' : 'arrow alternate circle down'}
          />
          Récupérer plus de users
        </Button>
      </Grid.Row>
    </Grid>
  </main>
);

UsersResults.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      login: PropTypes.string.isRequired,
      avatar_url: PropTypes.string.isRequired,
      html_url: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  loadMoreUsers: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default UsersResults;
