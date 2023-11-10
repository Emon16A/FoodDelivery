import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import styles from '../styles/contactUs.module.css';
import Am from "/pages/Am.jpg";
import Em from "/pages/Em.jpg";


const ContactUs = () => {
  return (
    <Layout>
    <div className={styles.container}>
      <Head>
        <title>Contact Us</title>
      </Head>
      <h1 className={styles.title}>Contact Us</h1>
      <p className={styles.description}>Get in touch with us for any queries or feedback.</p>
      <div className={styles.note}>
        <p>Behind this Project</p>
      </div>
      <div className={styles.photoContainer}>
        <div className={styles.photo}>
          <Image src={Am.src} alt="Photo 1" />
          <p>Name: Amena Akter </p>
          <p>ID: 20215103081</p>
        </div>
        <div className={styles.photo}>
          <Image src={Em.src} alt="Photo 2" />
          <p>Name: S.I.Emon </p>
          <p>20215103081</p>
        </div>
        <div className={styles.photo}>
          <Image src="url_to_your_image_3" alt="Photo 3" />
          <p>Name: Tasmim Ome</p>
          <p>ID: 20215103072</p>
        </div>
      </div>
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
