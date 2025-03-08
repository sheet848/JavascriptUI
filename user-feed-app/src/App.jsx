import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import UserList from './components/UserList'

function App() {

  const [data, updateData] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=10')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const userData = data.results;
        console.log(userData);
        updateData(userData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Header title='UserList' />
      <div className="row d-flex justify-content-center">
      {data.map((item, index) => (
        <UserList key={index} item={item} />
      ))}
      </div>
    </>
  )
}

export default App
