import Header from './Components/Header/Header';
import Icon_Bar from './Components/Icon_Bar/Icon_bar';
import './Assets/style.less';
import Home from './View/Home/Home';
import Footer from './Components/Footer/Footer';
import Products from './View/Products/Products';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

// import axios from 'axios';
// import { useEffect } from 'react';

function App() {
    // const getPost = async () => {
    // axios
    //     .get('https://jsonplaceholder.typicode.com/posts')
    //     .then((res) => {
    //         console.log(res);
    //     })
    //     .catch((e) => {
    //         console.log('khak..........', e);
    //     });

    //     const res = await axios.get(
    //         'https://jsonplaceholder.typicode.com/posts',
    //     );

    //     console.log(res);
    // };
    // useEffect(() => {
    //     getPost();
    // }, []);
    return (
        <div className="App">
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/products" element={<Products />} />
                </Routes>
            </BrowserRouter>
            <Icon_Bar />
            <Footer />
        </div>
    );
}

export default App;
