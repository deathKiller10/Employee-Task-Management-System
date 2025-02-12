import React, { useEffect } from 'react'
import { useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage'

export const AuthContext = React.createContext()

const AuthProvider = ({children}) => {
    const [userData, setUserData] = useState(null)

    // useEffect(() => {
    //     setLocalStorage()
    //     const {employees, admin} = getLocalStorage()
    //     setUserData({employees, admin})
    // }, [])

    useEffect(() => {
        if (!localStorage.getItem('employees')) {
            setLocalStorage()
        }
        const {employees, admin} = getLocalStorage()
        setUserData({employees, admin})
    }, [])

    return (
    <div>
        <AuthContext.Provider value={userData}>
            {children}  
        </AuthContext.Provider>
    </div>
    )
}

export default AuthProvider