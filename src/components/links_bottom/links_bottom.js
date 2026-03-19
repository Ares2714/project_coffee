import './links_bottom.css';
import { NavLink } from 'react-router-dom';

function LinksBottom(){
    return(
        <div>
            <div className="logo-text-bottom">
            <img className="logo" src="/image/logo_black.svg" alt="Логотип" />
            <NavLink to = '/' style={({ isActive }) =>({color: isActive ? 'gray' : 'black'})}>
                <h3 className="text-bottom">Coffee House</h3>
            </NavLink>
            <NavLink to = '/products' style={({ isActive }) =>({color: isActive ? 'gray' : 'black'})}>
                <h3 className="text-bottom">Our Coffee</h3>
            </NavLink>
            <NavLink to = '/description' style={({ isActive }) =>({color: isActive ? 'gray' : 'black'})}>
                <h3 className="text-bottom">For your pleasure</h3>
            </NavLink>
        </div>
            <div>
                <img className="line" src="/image/line-black.svg" alt="Кофейные зёрна" />
            </div>
        </div>
    );
}

export default LinksBottom;