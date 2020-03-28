

import React from 'react';
import TableList from '../views/TableList';
import axios from 'axios';



const [url, setUrl] = useState('http://127.0.0.1:8080/api/indexed/?endIndex=100&src=lever&startIndex=98');

const fetchPosts = async () => {
    const response = await axios.get(url);
    setResult(response.data);
    setLoading(false);
  };


export {fetchPosts};
  