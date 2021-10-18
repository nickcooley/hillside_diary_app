
import {useState, useEffect} from 'react';

export default function useLoginService(loginInfo: boolean) :  Boolean{
    const [isLoggedIn, setIsLoggedIn] = useState(loginInfo);

    useEffect(() => {
        function handleLogin(loginInfo: boolean){
            setIsLoggedIn(loginInfo);        
        }

        return handleLogin(false)        
        
    },[loginInfo] );

    return isLoggedIn;
}