import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PoketMonShop } from '../pages/PoketMonShop';
import { PoketMonShop2 } from '../pages/PoketMonShop2';


export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PoketMonShop />} />
                { /* <Route path="poketMonShop" element={<PoketMonShop />} /> */}
                <Route path="poketMonShop2" element={<PoketMonShop2 />} />
            </Routes>
        </BrowserRouter>
    );

}