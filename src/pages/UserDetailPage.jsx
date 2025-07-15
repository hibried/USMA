import axios from "axios";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function UserDetailPage() {
    const { id } = useParams();
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    async function fetchSingleUser() {
        try {
            const response = await axios.get(`https://reqres.in/api/users/${id}`, {
                headers: {
                    'x-api-key': 'reqres-free-v1'
                }
            });
            setUser(response.data.data);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
      fetchSingleUser();
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
        <div className="flex flex-col p-2 bg-[rgba(255,255,255,0.21)] rounded-2xl">
            <div className="bg-[rgba(0,0,0,0.6)] p-10 rounded-xl mb-2">
                <img src={user?.avatar} className="rounded-full m-auto mb-2" alt="" />
                <h1 className="text-3xl mb-8 tracking-widest">{user?.first_name} {user?.last_name}</h1>
                <p><span className="font-bold tracking-widest">| First Name</span><br/>{user?.first_name}</p><br />
                <p><span className="font-bold tracking-widest">| Last Name</span><br/>{user?.last_name}</p><br />
                <p><span className="font-bold tracking-widest">| Email</span><br/>{user?.email}</p>
            </div>
            <Link to={'/'}>
                <button className="btn rounded-xl border-none w-full">Back to home</button>
            </Link>
        </div>
    )
}

export default UserDetailPage;