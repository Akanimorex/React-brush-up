
import './App.css';
import './Card';
import './Card.css';
import cartImg from './images/icon-cart.svg';

const Card =()=>{
    return (
        <div className='card-component'>
            <div className='wrapper'>
                <div className='card-img-desktop-mobile'>
                </div>
                <div className=''>
                    <div className='text-wrapper'>
                        <h3 className='t-1'>PERFUME</h3>
                        <h1 className='h-1'>Gabrielle <br></br>
                        Essence Eau De <br></br> Parfum</h1>
                        <p className='t-2'>
                            A floral, voluptous , interpretation composed by Oliver Polge , Perfumer creator of 
                            France de chapo
                        </p>
                        <h1 className='price-tags'><span className='main'>$1447.9</span> <span className='slashed'>$169</span> </h1> 
                        <button className='button'> <img src={cartImg} className="cart-img" alt='cart-img'/> Add to Cart</button>
                    </div>
                </div>
            </div>
            
        </div>
       
    );
}

export default Card;