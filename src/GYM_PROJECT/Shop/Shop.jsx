import Header from "./Header";
import ProductGrid from "./Main";
import { CartProvider } from "./CartContext"; 
import Footer from './Footer'

export default function ShopPage() {
  return (
    <CartProvider>
      <Header />
      <ProductGrid />
      <Footer/>
    </CartProvider>
  );
}
