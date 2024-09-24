import React from 'react'
import styles from "./Contact.module.css"
import Button from '../Button/Button'
import { MdMessage } from 'react-icons/md'
import { IoCall } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'


const ContactFrom = () => {

  return (
    <section className={`${styles.container}`}>
      <div className={styles.contact_form}>
        <div className={`${styles.top_btn}`}>
          <Button text="VIA SUPPORT CHAT" icon={<MdMessage />} />
          <Button text="VIA Call" icon={<IoCall />} />
        </div>
        <Button isOutline={true} text="VIA Email For" icon={<MdEmail />} />

        <form action="#">
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" required />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" required />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="name">Text</label>
            <textarea name="textarea" id=""></textarea>
          </div>
          <button>Submit</button>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="./Images/contact.svg" alt="" />
      </div>
    </section>
  );
}

export default ContactFrom