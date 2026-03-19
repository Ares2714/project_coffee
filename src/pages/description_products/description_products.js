import { useLocation } from "react-router-dom"
import LinksBottom from "../../components/links_bottom/links_bottom";
import LinksTop from "../../components/links_top/links_top";
import './description_products.css';

function DescriptionProducts (){
    const location = useLocation();
    const item = location.state?.item;
    return (
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
                        <img src="/image/description_products.png" alt='Изображение девушки' className="image-description"></img>
                    </div>
                    <div className="body-text">
                            <h1 className="heading">About our beans</h1>
                            <img className="line" src="/image/line-black.svg" alt="Кофейные зёрна"/>
                            <div className="country">
                                <p><b>Country: </b>{item.country}</p>
                            </div>
                            <p><b>Description: </b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <div className="price_cost">
                                <h3 className="price">Price: </h3>
                                <h3 className="item_cost">{item.cost}$</h3>
                            </div>
                    </div>
                </div>
            </main>
            <footer>
                <LinksBottom/>
            </footer>
        </>
    )
}

export default DescriptionProducts