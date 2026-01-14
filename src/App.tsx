import {useEffect, useState} from 'react'
import './App.css'

function App() {
    const[usernameInput, setUsernameInput] = useState<string>("");
    const[passwordInput, setPasswordInput] = useState<string>("");
    let data = {usernameInput, passwordInput};

    useEffect(() => {
        const API_URL = 'http://localhost:3000';

        fetch(API_URL)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Failed to fetch data. ${response.status}`);
                }
                return response.json();
            })
            .catch((error) => {console.log(error)})
    }, []);

    useEffect(() => {
        const API_URL = 'http://localhost:3000';
        fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }) .then((res) => {
            if (!res.ok) {
                throw new Error(`Failed to fetch data. ${res.status}`);
            }
        })
    },[data])

    useEffect(() => {
        const API_URL = 'http://localhost:3000';
        fetch(API_URL, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }) .then((res) => {
            if (!res.ok){
                throw new Error(`Failed to fetch data. ${res.status}`);
            }
        })
    },[data])

    useEffect(() => {
        const API_URL = 'http://localhost:3000';
        fetch(API_URL, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }) .then((res) => {
            if (!res.ok){
                throw new Error(`Failed to fetch data. ${res.status}`);
            }
        })
    },[data])

    return (
        <>
            <input onChange={(e) => {setUsernameInput(e.target.value)}}
                   type="text"
                   placeholder="Name"
            />
            <button onClick={() => {}}>
                Edit
            </button>
            <button>
                Delete
            </button>
            <input onChange={(e) => {setPasswordInput(e.target.value)}}
                   type="text"
                   placeholder="Password"
            />
            <button>
                Edit
            </button>
            <button>
                Delete
            </button>
            <button>
                Add
            </button>

        </>
    )
}

export default App
