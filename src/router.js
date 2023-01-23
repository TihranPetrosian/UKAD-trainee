import { Route, Routes } from "react-router-dom";
import Container from "./components/container/container";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./pages/home/home";
import Products from "./pages/products/products";

const Router = () => {
    return <>
        <Header />
        <Container>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
            </Routes>
        </Container>
        <Footer />
    </>
}

export default Router;