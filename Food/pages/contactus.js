import Head from 'next/head';
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
      <div className={styles.formContainer}>
        <form>
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
    </div>
    </Layout>
  );
};

export default ContactUs;
