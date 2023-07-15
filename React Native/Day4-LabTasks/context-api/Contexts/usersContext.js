import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const MyContext = createContext();

export const UsersContext = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    axios
      .get('https://dummyjson.com/users')
      .then(response => {
        setUsers(response.data.users);
      })
      .catch(error => {
        console.error(error);
      });
  }, []); 
  
  const filterUsers = () => {
    const filtered = users.filter(user =>
        user.firstName.toLowerCase().includes(searchText.toLowerCase()) ||
        user.lastName.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  useEffect(() => {
    filterUsers();
  }, [searchText, users]);

  return (
    <MyContext.Provider value={{ filteredUsers, setSearchText }}>
      {children}
    </MyContext.Provider>
  );
};
