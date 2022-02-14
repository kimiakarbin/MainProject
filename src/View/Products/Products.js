import { Header } from 'antd/lib/layout/layout';
import React from 'react';
import Sunglasses from './SunGlasses';
import AlsoViewed from './SunGlasses/AlsoViewed/AlsoViewed';
import LayoutMain from './SunGlasses/LayoutMain/LayoutMain';
import QPWord from './SunGlasses/QPWord/QPWord';
import RelatedVideo from './SunGlasses/RelatedVideo/RelatedVideo';
import SupplierMassage from './SunGlasses/SupplierMassage/SupplierMassage';

const Products = () => {
    return (
        <div>
            <Header />
            <Sunglasses />
            <LayoutMain />
            <SupplierMassage />
            <AlsoViewed />
            <RelatedVideo />
            <QPWord />
        </div>
    );
};

export default Products;
