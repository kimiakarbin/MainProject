import Header from './Components/Header/Header';
import Icon_Bar from './Components/Icon_Bar/Icon_bar';
import './Assets/style.less';
import Home from './View/Home/Home';
import Footer from './Components/Footer/Footer';
import Products from './View/Products/Products';

function App() {
    return (
        <div className="App">
            <Header />
            <Home />
            <Icon_Bar />
            <Footer />
            <Products />
        </div>
    );
}

export default App;
