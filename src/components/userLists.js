import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import UserCard from './userCard';
const UserLists = () => {
    const [data, setData] = useState([]);
    
    
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => { setData(response.data); })
            
    }, [])

    return (
        <>
              
        <h1 style={{marginTop:'4rem',marginBottom:'2rem'}}>Users List</h1>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: '1rem' }}>
    
          {data.map(el =>
          <UserCard user={el} />)}
            </div>
            </>
  )
}

export default UserLists