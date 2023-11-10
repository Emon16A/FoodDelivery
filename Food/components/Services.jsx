import Image from "next/legacy/image";
import s2 from "../assets/g.png";
import s1 from "../assets/s1.png";
import s3 from "../assets/s3.png";
import css from "../styles/Services.module.css";
export default function Services() {
  return (
    <>
      <div className={css.heading}>
        <span>WHAT WE SERVE</span>
        <span>Your Favourite Food</span>
        <span>Delivery Partner</span>
      </div>

      {/*features */}
      <div className={css.services}>



        <div className={css.feature}>
          <div className={css.ImageWrapper}>
            <Image src={s1} alt="" objectFit="cover" layout="intrinsic" />
          </div>
          <span>Easy To Order</span>
          <span>You only need a few steps in food ordering</span>
        </div>




        <div className={css.feature}>
        <div className={css.ImageWrapper}>
            <Image src={s2} alt="" objectFit="cover" layout="intrinsic" />
          </div>
          
          <span>Easy To Order</span>
          <span>Delivery that is always on time faster</span>
        </div>
        <div className={css.feature}>
        <div className={css.ImageWrapper}>
            <Image src={s3} alt="" objectFit="cover" layout="intrinsic" />
          </div>
          <span>Easy To Order</span>
          <span>Not only fast for us, quality is also number none</span>

            
        </div>
      </div>
    </>
  );
}
