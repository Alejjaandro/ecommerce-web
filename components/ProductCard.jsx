'use client'
import './styles/ProductCard.css';

// Icons
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';

export default function Product({ item }) {
    return (
        <div className='prod-container'>

            <img className="prod-image" src={`/productImages/${item.image}`} alt="" />

            <div className="prod-info">

                <button className="prod-icon" onClick={(e) => handleShoppingCart(e)}>
                    <ShoppingCartIcon />
                </button>

                <Link className="prod-icon" href={`/product/${item.product}`}>
                    <SearchIcon />
                </Link>

            </div>

        </div>
    )
}