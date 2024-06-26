import { UilPhone } from "@iconscout/react-unicons";
import Image from "next/legacy/image";
import Link from "next/link";
import Cherry from "../assets/Cherry.png";
import HeroImage from "../assets/HeroImage.png";
import Pizzal from "../assets/p1.jpg";
import css from "../styles/Hero.module.css";
export default function Hero() {
  return (
    <div className={css.container}>
      {/* left side */}
      <div className={css.left}>
        <div className={css.cherryDiv}>
          <span>More than Faster</span>
          <Image src={Cherry} alt="" width={40} height={25} />
        </div>

        <div className={css.heroText}>
          <span>Be The Faster</span>
          <span>In Delivering</span>
          <span>
            Your <span style={{ color: "var(--themeRed)" }}>Food</span>
          </span>
        </div>
     
<span className={css.miniText}>
  &quot;Our mission is to satisfy your cravings with delectable cuisine, all
  delivered promptly to your doorstep.
  <br />
  Enjoy free delivery when you place an order totaling TK.1000 or more.&quot;
</span>


        <Link href="/menu">
        <button className={`btn ${css.btn}`}>Get Started
        </button>  
        </Link>
      </div>

      <div className={css.right}>
        <div className={css.imageContainer}>
          <Image src={HeroImage} alt="" layout="intrinsic" width={1673} height={1800} />
        </div>
        <Link href='/contactus'>
        <div className={css.ContactUs}>
          <span>Contact Us</span>
          
          
          <div>
            <UilPhone color="white" />
          </div>
        </div>
        </Link>
        <div className={css.Pizza}>
          <div>
          <Link href="http://localhost:3000/pizza/italian-pizza">
            <Image src={Pizzal} alt="" objectFit="cover" layout="intrinsic" />
            </Link>
          </div>
          <div className={css.details}>
            
              <Link href="/menu">
              <span>Italian Pizza Large</span>

              </Link>
          

            <span>
              <span style={{ color: "var(--themeRed)" }}>TK. </span>599
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
