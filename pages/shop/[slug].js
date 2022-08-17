import React from "react";
import CategoryList from "../../components/CategoryList";
import ProductList from "../../components/ProductList";
import { useRouter } from 'next/router'
import productsData from "../../data/ShopDeutsch.json"
import Head from 'next/head'
import Footer from "../../components/Footer";
const Category = () => {
    const router = useRouter()
    
    const filterCategoryByProducts=()=>{
    
      if(router.query.slug==="alle"){
      return productsData
       }
       else {
        const products=productsData.filter(product=>product.category===router.query.slug)
        return products
      }
    }
    const products=filterCategoryByProducts()
    return (
    <>
      <Head>
      <title>Contain Haus | {products[0]?.content?.text2} </title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
      <CategoryList></CategoryList>
      <div className="container">
        <div className="row mt-5 mb-5 justify-content-center">
          {products.map((product) => (
            <ProductList key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Category;
