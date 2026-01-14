import './App.css'

function App() {


    const [email, setEmail] = useState<string>('');
    const [pass, setPass] = useState<string>('');
    const [newEmail, setNewEmail] = useState<string>('');
    const [newPass, setNewPass] = useState<string>('');
    const[userId] = useState(0);
    usePost(email, pass);
    usePut(newEmail, newPass, userId);
    const [deleteId, setDeleteId] = useState<number>(-1);
    useDelete(deleteId);
    const putToggle = false;
    const postToggle = false;
    const deleteToggle = false;


    const tempID  = useGet(0);
    return (
        <>
            <div>
                <h1>
                    test get
                </h1>
                <p>
                    {tempID && tempID.email}
                </p>
            </div>
            <div id={"containera"}>
                <input id={"search"}
                       type="text"
                       placeholder="Email name"
                />
                <input id={"search2"}
                       type="text"
                       placeholder="Password here"
                />
                <button id={"button"} onClick={() => {
                    setEmail((document.getElementById("search") as HTMLInputElement).value)
                    setPass((document.getElementById("search2") as HTMLInputElement).value)
                    togglePost(postToggle);


                }}>create account
                </button>
            </div>




            <div>
                <p>{pass}</p>
                <p>{email}</p>
            </div>




            <div>
                <input id={"search3"}
                       type="text"
                       placeholder="New Email name"
                />
                <input id={"search4"}
                       type="text"
                       placeholder="New Password here"
                />
                <button id={"button"} onClick={() => {
                    setNewEmail((document.getElementById("search3") as HTMLInputElement).value)
                    setNewPass((document.getElementById("search4") as HTMLInputElement).value)
                    togglePut(putToggle);


                }}>change account details
                </button>
            </div>


            <div>
                <button onClick={() => {
                    setDeleteId(0);
                    toggleDelete(deleteToggle)}}>
                    delete account
                </button>
            </div>


            <div>
                <p>{newPass}</p>
                <p>{newEmail}</p>
            </div>




        </>
    )
}
function togglePut(putToggle:boolean){
    putToggle = !putToggle
    return putToggle;
}


function togglePost(postToggle:boolean){
    postToggle = !postToggle
    return postToggle;
}


function toggleDelete(deleteToggle:boolean){
    deleteToggle = !deleteToggle
    return deleteToggle;
}






export default App


import {useEffect, useState} from 'react'


function useGet(id:number) {
    const [data, setData] = useState<{id:number,email:string,pass:string}>({id:0, email:"email@email.com",pass:"1234" })
    useEffect(() => {
        const API_URL="http://localhost:3000/"+id;
        fetch(API_URL)
            .then((response) =>{
                if(!response.ok){
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((data)=>{
                setData(data)


            })
            .finally(()=>{
                //  setLoading(false);
            });
    }, [id]);


    return data
}


function usePost(email:string,pass:string) {
    useEffect(() => {
        const API_URL="http://localhost:3000/users";
        fetch(API_URL,{
            method:"POST",
            headers:{"Content-Type":"application/json"
                ,},
            body:JSON.stringify({email,pass}),




        })
            .then((response) =>{
                if(!response.ok){
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
    }, [email,pass]);
}


function usePut(newEmail:string,newPass:string, id:number) {
    useEffect(() => {
        const API_URL="http://localhost:3000/users/"+id;
        fetch(API_URL,{
            method:"PUT",
            headers:{"Content-Type":"application/json"
                ,},
            body:JSON.stringify({newEmail,newPass}),




        })
            .then((response) =>{
                if(!response.ok){
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
    }, [newEmail,newPass]);


}


function useDelete(id:number) {
    useEffect(() => {
        const API_URL="http://localhost:3000/users/"+id;
        fetch(API_URL,{
            method:"DELETE",
            headers:{"Content-Type":"application/json"
                ,},




        })
            .then((response) =>{
                if(!response.ok){
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
    }, [id]);


}
