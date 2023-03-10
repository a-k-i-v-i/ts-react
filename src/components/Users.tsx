import { useTypedSelector } from "../hooks/useSelector"
import { useTypedDispatch } from "../hooks/useDispatch"
import { useEffect } from "react"

const Users = ()=>{
    const {users,loading,error} = useTypedSelector((s)=> s.users)
    const {fetchUsers} = useTypedDispatch()
    

    useEffect(()=> {
        fetchUsers()
    },[])

    if(loading){
        return <p>Loading....</p>
    }
    if(error){
        return <p>Error!</p>
    }
    console.log(users);
    

    return(
        <div>

        </div>
    )
}

export default Users