'use client'
import './styles/ProductCard.css';

// Icons
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';

export default function ProductCard({ item }) {
    return (
        <div className='prod-container'>

            <img className="prod-image" src={`/productImages/${item.image}`} alt="" />

            <div className="prod-info">

                <div>
                    <button className="prod-icon" onClick={(e) => handleShoppingCart(e)}>
                        <ShoppingCartIcon />
                    </button>
                    <Link className="prod-icon" href={`/products/${item.product}`}>
                        <SearchIcon />
                    </Link>
                </div>

                <p>{item.product}</p>

            </div>

        </div>
    )
}