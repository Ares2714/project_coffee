import { useState } from "react"
import LinksTop from "../../components/links_top/links_top"
import './products.css'
import Filter from "../../components/products_filter/products_filter"
import ProductsDb from "../../ProductsDb"
import CardProducts from "../../components/card_products/card_products"
import LinksBottom from "../../components/links_bottom/links_bottom"
import { useNavigate } from "react-router-dom"

function Products(){
    const [value, setValue] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('');
    const navigate = useNavigate();

    const filteredProducts = ProductsDb.filter((item) => {
        const matchesSearch = item.name.toLowerCase().includes(value.toLowerCase());
        const matchesCountry = selectedCountry === '' || item.country === selectedCountry;

        return matchesSearch && matchesCountry;
    });

    const handleCardClick = (item) => {
        navigate('/description_products',{state: { item } });
    };

    return(
        <>
            <header className="header">
                <LinksTop/>
                <div className="main-text">
                    <h1 className="text-center">Our Coffee</h1>
                </div>
            </header>
            <main>
                <div className="body">
                    <div className="body-image">
                        <img src="/image/description.png" alt='Изображение девушки' className="image-description"></img>
                    </div>
                    <div className="body-text">
                            <h1 className="heading">About our beans</h1>
                            <img className="line" src="/image/line-black.svg" alt="Кофейные зёрна"/>
                            <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>
                            <p>Afraid at highly months do things on at. Situation recommend objection do intention so questions.</p>
                            <p> As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.</p>
                    </div>
                </div>
                <img src='/image/line-black2.svg' alt="Чёрная линия" className="line"></img>
                <Filter
                    value={value}
                    onValueChange={setValue}
                    selectedCountry={selectedCountry}
                    onCountryChange={setSelectedCountry}
                />
                <div className="card_container">
                    {filteredProducts.map((item) => (
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

export default Products
