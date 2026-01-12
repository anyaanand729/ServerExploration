import {useEffect, useState} from 'react'
import './App.css'

function App() {

    const[ ,setUsers] = useState<string>('');


    //GET
  useEffect(() => {
      const API_URL = "https://localhost:3000/users"

      fetch(API_URL)
          .then((response) => {
              if(!response.ok){
                  throw new Error(`HTTPS error| status ${response.status}`)
              }
              return response.json()
          })
          .then((data) => {
              setUsers(data);
          })
          .finally(() => {

          });
  }, [])

    //POST
    useEffect(() => {
        const API_URL = "https://localhost:3000/users"

        fetch(API_URL, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },

        })
    })

    //PUT

    //DELETE


  return (
    <>

    </>
  )
}

export default App
