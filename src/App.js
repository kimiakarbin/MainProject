import Header from './Componants/Header/Header';
import Body1 from './Componants/Body1/Body1';
import './Assets/style.less';
import Icon_Bar from './Componants/Icon_Bar/Icon_bar';
import Body2 from './Componants/Body2/Body2';
import Body3 from './Componants/Body3/Body3';
import Body6 from './Componants/Body6/Body6';
import Body8 from './Componants/Body8/Body8';
import Body9 from './Componants/Body9/Body9';
import Body7 from './Componants/Icon_Bar/Body7/Body7';
import  Footer from './Componants/Footer/Footer';
function App() {
    return (
        <div className="App">
            <Header />
            <Body1 />
            <Body2 />
            <Body3 />
            <Body6 />
            <Icon_Bar />
            <h2>Sourcing Solutions & Tailored Services</h2>
            <Body7 />
            <Body8/>
            <Body9/>
            <Footer/>
        </div>
    );
}

export default App;
