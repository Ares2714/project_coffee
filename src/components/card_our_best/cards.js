import './card.css'

function OurBest({ image, name, cost }) {
  return (
    <div className="card_container">
      <div className='card'>
        <img src={image} alt="Изображение товара" className="image"/>
        <h3>{name}</h3>
        <h3 className='cost'>{cost}$</h3>
      </div>
    </div>
  );
}

export default OurBest;