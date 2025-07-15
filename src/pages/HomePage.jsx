import { useState, useEffect } from "react"
import axios from "axios"

import UserListPagination from "../components/UserListPagination";

function HomePage() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    async function fetchUsers() {
        try {
            const response = await axios.get('https://reqres.in/api/users', {
                headers: {
                    'x-api-key': 'reqres-free-v1'
                }
            });
            console.log(response.data.data);
            setUsers(response.data.data);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
      fetchUsers();
    }, [])
    
    if(isLoading) {
        return (
        <div className="flex items-center justify-center h-screen gap-2">
            <span className="loading loading-ring loading-lg"></span>
            <span>Loading...</span>
        </div>
        )
    }

    return (
        <div>
            <h1 className="text-3xl text-center tracking-widest mb-3">LIST OF USERS</h1>
            <UserListPagination data={users} itemsPerPage={3} />
        </div>
    )
}

export default HomePage