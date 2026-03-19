import './description.css'
import ProductsDb from "../../ProductsDb"
import LinksTop from "../../components/links_top/links_top"
import CardProducts from "../../components/card_products/card_products"
import LinksBottom from "../../components/links_bottom/links_bottom"
import { useNavigate } from "react-router-dom"

function Description () {
    const navigate = useNavigate();

    const handleCardClick = (item) => {
        navigate('/description_products',{state: { item } });
    };

    return(
        <>
            <header className="header_description">
                <LinksTop/>
                <div className="main-text">
                    <h1 className="text-center">Our Coffee</h1>
                </div>
            </header>
            <main>
                <div className="body">
                    <div className="body-image">
                        <img src="/image/coffee_description.png" alt='Изображение чашки с кофе' className="image-description"></img>
                    </div>
                    <div className="body-text">
                            <h1 className="heading">About our goods</h1>
                            <img className="line" src="/image/line-black.svg" alt="Кофейные зёрна"/>
                            <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>
                            <p>Afraid at highly months do things on at. Situation recommend objection do intention so questions.</p>
                            <p> As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.</p>
                    </div>
                </div>
                <img src='/image/line-black2.svg' alt="Чёрная линия" className="line"></img>
                <div className="card_container">
                    {ProductsDb.map((item) => (
                        <CardProducts
                            key={item.id}
                            image={item.image}
                            name={item.name}
                            country={item.country}
                            cost={item.cost}
                            onClick={() => handleCardClick(item)}
                        />
                    ))}
                </div>
                <footer className="footer">
                    <LinksBottom/>
                </footer>
            </main>
        </>
    )
}

export default Description
