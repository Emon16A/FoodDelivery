// ContactUs.js
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
        <div className={styles.formContainer}>
        <h1 className={styles.title} style={{ textAlign: 'center' }}>Contact Us</h1>
          <p className={styles.description}>Get in touch with us for any queries or feedback.</p>
          <div className={styles.note}>
          </div>
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
        <div className={styles.mapContainer}>
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://www.google.com/maps/embed/v1/place?q=Bangladesh+University+of+Business+and+Technology,+Plot+77-78,+2+Road-9,+Dhaka+1216&key=AIzaSyDbzvRjVC7KQxyqQyWOaGZi7NyXKW-yt08"
            allowFullScreen
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
