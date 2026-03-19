import './links_top.css';
import { NavLink } from 'react-router-dom';

function LinksTop(){
    return(
        <div className="logo-text">
            <img className="logo" src="/image/logo.svg" alt="Логотип" />
            <NavLink to = '/' style={({ isActive }) =>({color: isActive ? 'gray' : 'white'})}>
                <h3 className="text-top-left">Coffee House</h3>
            </NavLink>
            <NavLink to = '/products' style={({ isActive }) =>({color: isActive ? 'gray' : 'white'})}>
                <h3 className="text-top-left">Our Coffee</h3>
            </NavLink>
            <NavLink to = '/description' style={({ isActive }) =>({color: isActive ? 'gray' : 'white'})}>
                <h3 className="text-top-left">For your pleasure</h3>
            </NavLink>
        </div>
    );
}

export default LinksTop;