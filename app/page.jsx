import Image from "next/image";
import products from "@/data/products";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import './styles/Home.css';
import Slider from "@/components/Slider";

export default function Home() {
    // console.log(products.slice(0, 3));
    const exampleProducts = products.slice(0, 8);

    return (
        <div>

            <Navbar />
            <Slider />

            <div className='home-container'>
                {/* <h1 className='home-title'>SOME PRODUCTS</h1> */}

                <div className='products-container'>

                    {exampleProducts.map((item) => (
                        <ProductCard item={item} key={item.product} />
                    ))}

                </div>

                <Link className='home-link' href='/products'>See All Products</Link>
            </div>

        </div>
    );
}
