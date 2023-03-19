import { useState } from 'react';

import { Form, FormInput, Button } from './SearchBar.styled';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchQuery = evt => {
    setSearchQuery(evt.target.value.toLowerCase());
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (searchQuery.trim() === '') {
      alert('Enter the film title');
    }

    onSearch(searchQuery);
    setSearchQuery('');
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="searchQuery"
          value={searchQuery}
          autoComplete="off"
          autoFocus
          placeholder="Search ..."
          onChange={handleSearchQuery}
        />
        <Button type="submit">Search</Button>
      </Form>
    </>
  );
};

export default SearchBar;
