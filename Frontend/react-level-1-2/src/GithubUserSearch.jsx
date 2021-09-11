import React, { useState } from 'react';
import { Message, Form, Input, Segment } from 'semantic-ui-react';
import axios from 'axios';
import UsersResults from './UsersResults';
import './styles/githubUserSearch.scss';

export default function GithubUserSearch() {
  const [searchValue, setSearchValue] = useState('');
  const [usersData, setUsersData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSubmit = () => {
    if (!searchValue || !/\S/.test(searchValue)) {
      return;
    }

    setIsLoading(true);

    axios
      .get(`https://api.github.com/search/users?q=${searchValue}&per_page=9`)
      .then((response) => {
        setUsersData(response.data);
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
            {usersData.items.length > 1 ? 'résultats' : 'résulat'}
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
