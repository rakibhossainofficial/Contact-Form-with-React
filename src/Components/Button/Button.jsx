import React from 'react'
import { MdMessage } from 'react-icons/md'
import styles from "./Button.module.css"

const Button = () => {
  return (
    <div className={`${styles.Button}`}>
      <button>
      <MdMessage />
        Button
      </button>
        
    </div>

  )
}

export default Button