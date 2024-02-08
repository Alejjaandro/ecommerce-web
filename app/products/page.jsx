'use client'
import Navbar from '@/components/Navbar';
import ProductCard from '@/components/ProductCard';
import products from '@/data/products';
import Footer from '@/components/Footer';
import { useState } from 'react';
import './styles/products.css';

export default function ProductList() {
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [sortType, setSortType] = useState('desc');

    const filterCategory = (e) => {
        const category = e.target.value;

        if (category === 'all') {
            setFilteredProducts(products);
        } else {
            const filtered = products.filter((item) => item.category === category);
            setFilteredProducts(filtered);
        }
    }

    const sortProducts = (e) => {
        const sort = e.target.value;

        if (sort === 'desc') {
            setSortType('desc');
            const sorted = filteredProducts.sort((a, b) => b.price - a.price);
            setFilteredProducts(sorted);
        } else {
            setSortType('asc');
            const sorted = filteredProducts.sort((a, b) => a.price - b.price);
            setFilteredProducts(sorted);
        }
    }

    return (
        <>
            <Navbar />

            <div className='productList-container'>

                <h1 className='title'>Products</h1>

                <div className='filter-container'>

                    <div className='filter'>
                        <span className='filter-text'>Filter Products:</span>
                        <select onChange={(e) => filterCategory(e)} className='select'>
                            <option value="all">All</option>
                            <option value="pc">PC</option>
                            <option value="smartphones">Smartphones</option>
                            <option value="headphones">Headphones</option>
                            <option value="tv">TVs</option>
                        </select>
                    </div>

                    <div className='sort'>
                        <span className='filter-text'>Sort Products:</span>
                        <select onChange={(e) => sortProducts(e)} className='select'>
                            <option value="desc">Price (desc)</option>
                            <option value="asc">Price (asc)</option>
                        </select>
                    </div>

                </div>

                <div className='products-list'>
                    {filteredProducts.map((item) => (
                        <ProductCard item={item} key={item.product} />
                    ))}
                </div>

            </div>

            <Footer />
        </>
    )
}