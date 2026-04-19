import React, {  createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
 export const FriendsContext=createContext()

const FriendsProvider = ({children}) => {
    const [friends,setfriends]=useState([])
    
    
    const [loading,setloading]=useState(true)
    useEffect(()=>{
        setTimeout(() => {
            fetch('/friends.json')
            .then(res=>res.json()).
            then(data=>{
                setfriends(data)
                setloading(false)
                
            })
        }, );
       
    },[])

  
       const [activities,setactivites]=useState([])
       const addedtoTimeline=(log)=>{
        setactivites([...activities,log])
       }

    return (
        <div>
            <FriendsContext.Provider value={{friends,loading,addedtoTimeline,activities}}> 

                {children}

            </FriendsContext.Provider>
        </div>
    );
};

export default FriendsProvider;