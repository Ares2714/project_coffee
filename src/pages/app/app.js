import { Route, Routes } from 'react-router-dom';
import Home from '../main/main';
import Products from '../products/products';
import Description from '../description/description';
import DescriptionProducts from '../description_products/description_products';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/description" element={<Description/>}/>
            <Route path="/description_products" element={<DescriptionProducts/>}/> 
        </Routes>
    );
}

export default App;