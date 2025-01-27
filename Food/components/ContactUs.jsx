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
        <p className={styles.description}>We'd love to hear from you. Feel free to reach out!</p>
        
        <div className={styles.contactWrapper}>
          {/* Form Section */}
          <div className={styles.formContainer}>
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
                <label htmlFor="subject">Subject:</label>
                <input type="text" id="subject" name="subject" />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>

          {/* Map Section */}
          <div className={styles.mapContainer}>
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.224561674789!2d90.41270831548117!3d23.806348084563325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c71f69fc1997%3A0x40e3e388686a035!2sBangladesh%20University%20of%20Business%20and%20Technology%20(BUBT)!5e0!3m2!1sen!2sus!4v1666016030478!5m2!1sen!2sus"
              allowFullScreen
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
