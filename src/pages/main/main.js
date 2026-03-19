import './main.css';
import OurBest from '../../components/card_our_best/cards';
import OurBestDb from '../../OurBestDb';
import LinksTop from '../../components/links_top/links_top';
import LinksBottom from '../../components/links_bottom/links_bottom';
import { Link } from 'react-router-dom';

function Home() {
    return (
    <div className="app">
        <header>
        <LinksTop />
        <div className="main-text">
            <h1 className="text-center">Everything You Love About Coffee</h1>
        </div>
        <div>
            <img className="line" src="/image/line.svg" alt="Кофейные зёрна" />
        </div>
        <div className="additional-text">
            <h3>We makes every day full of energy and taste</h3>
        </div>
        <div className="additional-text">
            <h3>Want to try our beans?</h3>
        </div>
        <div className="additional-text">
            <Link to="/products">
                <button className="btn-more">More</button>
            </Link>
        </div>
        </header>
        <main>
        <div className="heading">
            <h1>About Us</h1>
        </div>
        <div>
            <img
            className="line"
            src="/image/line-black.svg"
            alt="Кофейные зёрна"
            />
        </div>
        <div className="paragraph">
            <p>
            Extremity sweetness difficult behaviour he of. On disposal of as
            landlord horrible. Afraid at highly months do things on at.
            Situation recommend objection do intention so questions. As greatly
            removed calling pleased improve an. Last ask him cold feel met spot
            shy want. Children me laughing we prospect answered followed. At it
            went is song that held help face.
            </p>
        </div>
        <div className="paragraph">
            <p className="paragraph_2">
            Now residence dashwoods she excellent you. Shade being under his bed
            her, Much read on as draw. Blessing for ignorant exercise any
            yourself unpacked. Pleasant horrible but confined day end marriage.
            Eagerness furniture set preserved far recommend. Did even but nor
            are most gave hope. Secure active living depend son repair day
            ladies now.
            </p>
        </div>
        <div className="our_best">
            <div className="heading_2">
                <h1 className="text">Our best</h1>
        </div>
        <div className="card_container">
            {OurBestDb.map((item) => (
                <OurBest
                key={item.id}
                image={item.image}
                name={item.name}
                cost={item.cost}
                />
                ))}
        </div>
        </div>
        </main>
            <footer>
                <LinksBottom />
            </footer>
        </div>
    );
}

export default Home
