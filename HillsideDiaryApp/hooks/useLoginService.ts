
import {useState, useEffect} from 'react';

export default function useLoginService(loginInfo: boolean) :  Boolean{
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        function handleLogin(loginInfo: boolean){
            setIsLoggedIn(loginInfo);        
        }

        return handleLogin(isLoggedIn)        
        
    },[loginInfo] );

    return isLoggedIn;
}