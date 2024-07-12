import { UilReceipt, UilShoppingBag } from "@iconscout/react-unicons";
import Image from "next/image";
import Link from 'next/link';
import { useEffect, useState } from "react";
import Logo from "../assets/Logo.png";
import { useStore } from "../store/store";
import css from "../styles/Header.module.css";

export default function Header() {

  const [Order,setOrder] =useState("")

  useEffect(() => {
    setOrder(localStorage.getItem("order"));

  }, [])





  const items = useStore((state) => state.cart.pizzas.length);
  return (
    <div className={css.header}>
      {/*Logo */}
      <Link href="../">
      <div className={css.logo}>
        <Image src={Logo} alt="" width={50} height={50} />
        <span>Food</span>
      </div>
      </Link>
      {/*menu */}
      <ul className={css.menu}>
        <li>
          <Link href='../'>
          Home

          </Link>
        </li>
        <Link href = "/menu">
        <li>Menu       
</li>
        </Link>
    <Link  href = "/contactus">
    <li>Contact</li>
    </Link>
       
      </ul>

      {/* right side */}
      <div className={css.rightSide}>
        <Link href = "/cart">
        <div className={css.cart}>
          <UilShoppingBag size={35} color="#2E2E2E" />
          <div className={css.badge}>{items}</div>
        </div>
        </Link>
        {Order && (
          <Link href={`/order/${Order}`}>
            <div className={css.cart}>
              <UilReceipt size={35} color= '#2E2E2E'/>
              {Order != "" && <div className={css.badge}>1 </div>}

            </div>
          </Link>
        )}
      </div>
    </div>
  );
}
