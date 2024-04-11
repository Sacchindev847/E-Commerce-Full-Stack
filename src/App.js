import logo from './logo.svg';
import './App.css';
import Navigation from './customer/component/navigation/navigation';
import HomePage from './customer/pages/HomePage/HomePage';
import Footer from './customer/component/Footer/Footer';
import Product from './customer/component/Product/Product';

function App() {
  return (
    <div className="">
    <Navigation></Navigation>
    <div>
    {/* <HomePage></HomePage> */}
    <Product></Product>
    </div>
    <Footer></Footer>
    </div>
  );
}

export default App;
