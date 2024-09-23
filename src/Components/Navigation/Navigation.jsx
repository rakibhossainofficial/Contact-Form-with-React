import React from 'react'
import styles from "./Navigation.module.css"


const Navigation = () => {

  console.log(styles);

  return (
    <nav className={`${styles.Navigation} container`}>
        <div className="logo">
            <img src="/Images/logo.png" alt="Logo" />
        </div>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
  )
}

export default Navigation