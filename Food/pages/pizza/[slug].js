import Image from "next/image";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import LeftArrow from "../../assets/arrowLeft.png";
import RightArrow from "../../assets/arrowRight.png";
import Layout from "../../components/Layout";
import { client, urlFor } from "../../lib/client";
import { useStore } from "../../store/store";
import css from "../../styles/Pizza.module.css";

export default function Pizza({ pizza }) {
  const src = urlFor(pizza.image).url();
  const [Size, setSize] = useState(1);
  const [Quantity, setQuantity] = useState(1);

  const handleQuan = (type) => {
    type === "inc"
      ? setQuantity((prev) => prev + 1)
      : Quantity === 1
      ? null
      : setQuantity((prev) => prev - 1);
  };

    //add to cart function

    const addPizza = useStore((state)=>state.addPizza)
    const addToCart = ()=> {
      addPizza({...pizza, price: pizza.price[Size], quantity:Quantity, size:Size})
      toast.success("Your Food Added to your Cart")
    }


  return (
    <Layout>
      <div className={css.container}>
        <div className={css.imageWrapper}>
          <Image
            loader={() => src}
            alt=""
            src={src}
            layout="fill"
            unoptimized
            objectFit="cover"
          />
        </div>
        {/*right side*/}
        <div className={css.right}>
          <span>{pizza.name}</span>
          <span>{pizza.details}</span>
          <span>
            <span style={{ color: "var(--themeRed)" }}>TK.</span>{" "}
            {pizza.price[Size]}
          </span>
          <div className={css.size}>
            <span>Size</span>
            <div className={css.sizeVariants}>
              <div
                onClick={() => setSize(0)}
                className={Size === 0 ? css.selected : ""}
              >
                Small
              </div>
              <div
                onClick={() => setSize(1)}
                className={Size === 1 ? css.selected : ""}
              >
                Medium
              </div>
              <div
                onClick={() => setSize(2)}
                className={Size === 2 ? css.selected : ""}
              >
                Large
              </div>
            </div>
          </div>

          {/*Quantity*/}
          <div className={css.quantity}>
            <span>Quantity</span>

            <div className={css.counter}>
              <Image
                src={LeftArrow}
                height={20}
                width={20}
                alt=""
                objectFit="contain"
                onClick={()=>handleQuan("dec")}
              />

              <span>{Quantity}</span>

              <Image
                src={RightArrow}
                height={20}
                width={20}
                alt=""
                objectFit="contain"
                onClick={()=>handleQuan("inc")}
              />
            </div>
          </div>
          {/* button*/}
          <div className={`btn ${css.btn}`} onClick={addToCart}>Add to Cart</div>
        </div>
        <Toaster/>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type=="pizza" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { slug = "" } = context.params;

  // Fetch pizza data based on the slug
  const pizza = await client.fetch(
    `*[_type=="pizza" && slug.current == "${slug}"][0]`
  );

  if (!pizza) {
    return {
      notFound: true, // Return a 404 page if pizza data is not found.
    };
  }

  return {
    props: {
      pizza,
    },
  };
}
