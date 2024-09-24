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
        <Button text="VIA Email For" icon={<MdEmail />} />

      </div>
    </section>
  );
}


export default ContactFrom