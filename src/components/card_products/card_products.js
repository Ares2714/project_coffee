import './card_products.css'

function CardProducts({ image, name, country, cost, onClick }) {

    return (
        <div className="card_container">
            <div className='card_products' onClick={onClick}>
                <img src={image} alt="Изображение товара" className="image"/>
                <h3>{name}</h3>
                <h3>{country}</h3>
                <h3 className='cost'>{cost}$</h3>
            </div>
    </div>
    );
}

export default CardProducts;