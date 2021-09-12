import React, { useState } from 'react';
import { Message, Form, Input, Segment } from 'semantic-ui-react';
import axios from 'axios';
import UsersResults from './UsersResults';
import './styles/githubUserSearch.scss';

export default function GithubUserSearch() {

  // State for input search
  const [searchValue, setSearchValue] = useState('');

  // State for store data from api
  const [usersData, setUsersData] = useState(null);

  // State for handle loading
  const [isLoading, setIsLoading] = useState(false);

  // State for handle load more by storing number which will be incremented after
  const [currentPage, setCurrentPage] = useState(1);

  // Function to handle submit with validation : if there is empty input and any non-whitespace character it will interrupts function
  const handleSubmit = () => {
    if (!searchValue || !/\S/.test(searchValue)) {
      return;
    }
    // Setting loading to true at the before calling api and getting results
    setIsLoading(true);

    // Github api called with axios
    axios
      .get(`https://api.github.com/search/users?q=${searchValue}&per_page=9`)
      .then((response) => {
        setUsersData(response.data);
      })
      .catch((error) => {
        // Handle to many request errors which correspond to a 403
        if (error.response.status === 403) {
          alert(
            'Vous avez dépassé le nombre maximales de requêtes, veuillez patienter avant de recommencer, merci.'
          );
        }
        console.error(error.response);
      })
      .finally(() => {
        // Setting loading to false at the end of calling after results received
        setIsLoading(false);
      });
  };

  // Function to handle load more, it will call github api again with incremented variable in URL stored in our state, then push results in our usersDatas state
  const handleLoadMore = () => {
    setIsLoading(true);
    setCurrentPage(currentPage + 1);

    axios
      .get(
        `https://api.github.com/search/users?q=${searchValue}&per_page=9&page=${
          currentPage + 1
        }`
      )
      .then((response) => {
        const newUsersData = {
          ...usersData,
          items: [...usersData.items, ...response.data.items],
        };

        setUsersData(newUsersData);
      })
      .catch((error) => {
        if (error.response.status === 403) {
          alert(
            'Vous avez dépassé le nombre maximales de requêtes, veuillez patienter avant de recommencer, merci.'
          );
        }

        console.error(error.response);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <Segment>
        <Form onSubmit={handleSubmit}>
          <Input
            fluid
            autoFocus
            loading={isLoading}
            icon='search'
            placeholder='Chercher des users github'
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
          />
        </Form>
      </Segment>
      {usersData ? (
        <>
          <Message>
            La recherche a renvoyé {usersData.total_count}{' '}
            {usersData.items.length > 1 ? 'résultats' : 'résultat'}
          </Message>
          <UsersResults
            isLoading={isLoading}
            users={usersData.items}
            loadMoreUsers={handleLoadMore}
          />
        </>
      ) : (
        <Message info>
          <Message.Header>
            Bienvenue sur l'explorateur de profils Github
          </Message.Header>
          <p>
            Pour commencer, tapez votre recherche ci dessus et appuyez sur
            entrée
          </p>
        </Message>
      )}
    </>
  );
}
