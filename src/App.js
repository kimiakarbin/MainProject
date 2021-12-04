import Header from './Componants/Header/Header';

import './Assets/style.less';
import Icon_Bar from './Componants/Icon_Bar/Icon_bar';

import Footer from './Componants/Footer/Footer';
import HotItems from './Componants/HotItems/HotItems';
import TradeShow from './Componants/TradeShow/TradeShow';
import Solution from './Componants/Solution/Solution';
import Sourcing from './Componants/Sourcing/Sourcing';
import SelectTrending from './Componants/SelectTrending/SelectTrending';
import MainContent from './Componants/MainContent/MainContent';

import IndustryBooth from './Componants/IndustryBooth/IndustryBooth';
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
