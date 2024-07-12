import Head from 'next/head';
import Image from "next/image";
import Emon from "../assets/Em.jpg";
import Sakib from "../assets/sk.png";
import Layout from '../components/Layout';
import styles from '../styles/contactUs.module.css';

const ContactUs = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Contact Us</title>
        </Head>
        <h1 className={styles.title}>Contact Us</h1>
        <p className={styles.description}>Get in touch with us for any queries or feedback.</p>
        <h2 className={styles.subTitle} >Behind this Project</h2>
        <div className={styles.teamContainer}>
          <div className={styles.teamMember}>
          <Image src={Sakib} alt="Kazi Sakib Hossain" className={styles.teamPhoto} />
          <p className={styles.teamName}>Name: Kazi Sakib Hossain</p>
            <p className={styles.teamId}>ID: 20215456128</p>
          </div>
          <div className={styles.teamMember}>
            <Image src={Emon} alt="S.I.Emon" className={styles.teamPhoto} />
            <p className={styles.teamName}>Name: S.I.Emon</p>
            <p className={styles.teamId}>ID: 20215456122</p>
          </div>
    
        </div>
        <form className={styles.form}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" />
          </div>
          <button type="submit">Submit</button>
        </form>
        
      </div>
    </Layout>
  );
};

export default ContactUs;
