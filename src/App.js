import Header from './Components/Header/Header';
import Icon_Bar from './Components/Icon_Bar/Icon_bar';
import Footer from './Components/Footer/Footer';
import HotItems from './Components/HotItems/HotItems';
import TradeShow from './Components/TradeShow/TradeShow';
import Solution from './Components/Solution/Solution';
import Sourcing from './Components/Sourcing/Sourcing';
import SelectTrending from './Components/SelectTrending/SelectTrending';
import MainContent from './Components/MainContent/MainContent';
import IndustryBooth from './Components/IndustryBooth/IndustryBooth';
import './Assets/style.less';

function App() {
    return (
        <div className="App">
            <Header />
            <MainContent />
            <SelectTrending />
            <IndustryBooth />
            <Sourcing />
            <Icon_Bar />
            <Solution />
            <TradeShow />
            <HotItems />
            <Footer />
        </div>
    );
}

export default App;
