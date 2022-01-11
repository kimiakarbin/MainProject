import React from 'react';
import HotItems from './HotItems/HotItems';
import ReadMore from './HotItems/ReadMore';
import IndustryBooth from './IndustryBooth/IndustryBooth';
import MainContent from './MainContent/MainContent';
import SelectTrending from './SelectTrending/SelectTrending';
import Solution from './Solution/Solution';
import Sourcing from './Sourcing/Sourcing';
import TradeShow from './TradeShow/TradeShow';

function Home() {
    return (
        <div>
            <MainContent />
            <SelectTrending />
            <IndustryBooth />
            <Solution />
            <Sourcing />
            <TradeShow />
            <HotItems />
            <ReadMore />
        </div>
    );
}

export default Home;
