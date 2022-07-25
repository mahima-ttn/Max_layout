import axios from 'axios'
import Head from 'next/head'
import Footer from '../components/Footer'
import HeadBanner from '../components/HeadBanner'
import Layout from '../components/Layout'
import NavBar from '../components/NavBar'
import TermPlans from '../components/TermPlans'

export default function Home({products}) {
  // console.log("prg",products)
  const data =products
  // console.log("data",data)
  return (
    <>
    <Head>
      <title>MaxLife </title>
    </Head>
    <NavBar />
    <HeadBanner />
    {/* <h1>{data.data[0].attributes.title}</h1> */}
    <TermPlans products={products}/>
    <Footer />
    </>
  )
}

export async function getServerSideProps(){
  const productsRes = await axios.get("http://localhost:1337/api/products");

  return {
    props: {
      products: productsRes.data,
    },
  };
}
