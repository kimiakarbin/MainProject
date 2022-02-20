import { Header } from 'antd/lib/layout/layout';
import React from 'react';
import Sunglasses from './SunGlasses';
import AlsoLike from './SunGlasses/AlsoLike/AlsoLike';
import AlsoViewed from './SunGlasses/AlsoViewed/AlsoViewed';
import LayoutMain from './SunGlasses/LayoutMain/LayoutMain';
import QPWord from './SunGlasses/QPWord/QPWord';
import RelatedVideo from './SunGlasses/RelatedVideo/RelatedVideo';
import SupplierMassage from './SunGlasses/SupplierMassage/SupplierMassage';
import './Assets/Style.less';
import SearchProductGroup from './SunGlasses/SearchProductGroup/SearchProductGroup';
const Products = () => {
    return (
        <div>
            <Header />
            <Sunglasses />
            <div className="Product--Components">
                <div className="Left--Product__Components">
                    <LayoutMain />
                    <SupplierMassage />
                    <AlsoViewed />
                    <RelatedVideo />
                    <QPWord />
                </div>
                <div className="Right--Product__Components">
                    <AlsoLike />
                    <SearchProductGroup />
                </div>
            </div>
        </div>
    );
};

export default Products;
