import './style.scss';

import cart from '../../assets/images/cart.svg'

export const Card = ({ name, price, imageURL }) => {
    return (
        <div className="card">
            <img src={imageURL} alt="productImage" className="card__image" />
            <div className="card__title">{name}</div>
            <div className='card__manufacturer'>Lavander Spark</div>
            <div className="card__price">${price}</div>
            <div className='card__cartOnHover'><img src={cart} alt="cart" /></div>
        </div>
    );
};