import Image from "next/image";
import Link from "next/link";
import { urlFor } from "../lib/client";
import css from "../styles/Menu.module.css";

export default function Menu({ pizzas }) {
  // Sort pizzas by price (assuming price is an array where the first element is the lowest price)
  const sortedPizzas = pizzas.slice().sort((a, b) => a.price[0] - b.price[0]);

  return (
    <div className={css.container}>
      <div className={css.heading}>
        <span>OUR MENU</span>
        <span>Menu That Always</span>
        <span>Make you Fall In Love</span>
      </div>
      <div className={css.menu}>
        {sortedPizzas.map((pizza, id) => {
          const src = urlFor(pizza.image).url();
          return (
            <div className={css.pizza} key={id}>
              <Link href={`./pizza/${pizza.slug.current}`}>
                <div className={css.ImageWrapper}>
                  <Image
                    loader={({ src }) => src} 
                    src={src}
                    alt=""
                    objectFit="cover"
                    layout="fill"
                  />
                </div>
              </Link>
              <span> {pizza.name}</span>
              <span>
                <span style={{ color: "var(--themeRed)" }}>TK.</span>
                {pizza.price[0]}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
