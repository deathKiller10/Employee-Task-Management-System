import React from 'react'
import { setLocalStorage } from '../../utils/LocalStorage'

const Header = (props) => {

  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "")
    props.changeUser("")
  }

  return (
    <div className="flex justify-between items-end">
        <h1 className="text-2xl">Hello <br></br><span className="text-3xl font-semibold">{props.data === "Admin" ? props.data : props.data.firstName}👋</span></h1>
        <button onClick={logOutUser} className="text-white bg-blue-500 hover:bg-blue-700 font-medium rounded-lg text-lg px-5 py-2.5 text-center">Logout</button>
    </div>
  )
}

export default Header