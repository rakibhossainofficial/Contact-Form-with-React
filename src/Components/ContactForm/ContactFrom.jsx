import React from 'react'
import styles from "./Contact.module.css"
import Button from '../Button/Button'



const ContactFrom = () => {

  return (
    <section className={`${styles.container}`}>
      <div className={styles.contact_form}>
          <Button />
      </div>
    </section>

  )
}

// className={`container ${styles.ContactHeader}`}>
export default ContactFrom