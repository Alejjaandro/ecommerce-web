'use client'
import './styles/ProductPage.css';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import products from '@/data/products';


export default function ProductPage({ params }) {
    let productName = params.product;
    while (productName.includes('%20')) productName = productName.replace('%20', ' ');

    const product = products.find((product) => product.product === productName);

    const [quantity, setQuantity] = useState(1);
    const addQuantity = () => setQuantity(quantity + 1);
    const removeQuantity = () => quantity > 1 && setQuantity(quantity - 1);

    return (
        <>
            <Navbar />

            <div className='product-container'>


                <div className="product-wrapper">

                    <img className='product-img' src={`/productImages/${product.image}`} alt="" />

                    <div className="product-info-container">
                        <div className='product-info'>
                            <h1 className='product-title'>{product.product}</h1>
                            <p className='product-price'>${product.price}</p>
                        </div>

                        <p className='product-description'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur odio, corrupti explicabo debitis laborum vel totam? Rerum, blanditiis! Odit laborum dolorum labore, ea nobis excepturi fugiat autem nam eligendi quaerat.
                            Nam magnam tempora dicta aspernatur quas expedita accusantium ab consectetur, qui rerum ipsam laboriosam cupiditate maxime libero obcaecati! Alias id corporis nemo odio eius, magni sit assumenda! Itaque, laborum accusantium.
                            Pariatur quis repudiandae sed fugiat itaque non mollitia eaque necessitatibus aliquam illo nisi, accusamus, sequi deleniti? Eaque dicta sed ab corporis inventore, recusandae tenetur totam consequatur ullam! Sapiente, nam nisi!
                        </p>

                        {/* ADD CONTAINER */}
                        <div className="add-container">

                            <div className="ammount-container">

                                <div className="remove flex-center" onClick={removeQuantity}><RemoveIcon /></div>
                                <span className="ammount flex-center">{quantity}</span>
                                <div className="add flex-center" onClick={addQuantity}><AddIcon /></div>

                            </div>

                            <button className='to-cart'>ADD TO CART</button>
                        </div>
                    </div>

                </div>

            </div>

            <Footer />
        </>
    )
}