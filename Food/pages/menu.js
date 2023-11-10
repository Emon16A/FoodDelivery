import Layout from "../components/Layout";
import Menu from "../components/Menu";
import { client } from "../lib/client";

export default function Home({pizzas}) {

    return(
        <Layout>
       
             
       <main>
       <Menu pizzas={pizzas}/>  

       </main>
         
  

        
        </Layout>
       
    )
}


export const getServerSideProps = async () => {
    const query = "*[_type == 'pizza']";
    const pizzas = await client.fetch(query);
  
    return { props: { pizzas } }
  }
  