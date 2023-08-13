import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone} from '@fortawesome/free-solid-svg-icons'
const Logo = () => {
  return (
    <button className="logo-name"> <FontAwesomeIcon icon={faPhone} size="xl" style={{color: "#00ff4c",}} /> UnityContacts</button>
  )
}

export default Logo
