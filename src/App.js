import Header from './Componants/Header/Header';
import Body1 from './Componants/Body1/Body1';
import './Assets/style.less';
import Icon_Bar from './Componants/Icon_Bar/Icon_bar';
import Body2 from './Componants/Body2/Body2';
import Body3 from './Componants/Body3/Body3';
import Body6 from './Componants/Body6/Body6';
import Footer from './Componants/Footer/Footer';
import HotItems from './Componants/HotItems/HotItems';
import TradeShow from './Componants/TradeShow/TradeShow';
import Solution from './Componants/Solution/Solution';
function App() {
    return (
        <div className="App">
            <Header />
            <Body1 />
            <Body2 />
            <Body3 />
            <Body6 />
            <Icon_Bar />
            <Solution />
            <TradeShow />
            <HotItems />
            <Footer />
        </div>
    );
}

export default App;
