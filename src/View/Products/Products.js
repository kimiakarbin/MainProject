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
            <div className="Footer__Product">
                <div className="Footer--Simple__Links--Group">
                    <div className="Simple__Links--Group__Item">
                        Hot Products{' '}
                    </div>
                    |
                    <div className="Simple__Links--Group__Item">
                        China Products
                    </div>
                    |
                    <div className="Simple__Links--Group__Item">
                        China Manufacturers/Suppliers
                    </div>
                    |
                    <div className="Simple__Links--Group__Item">
                        Wholesale Products
                    </div>
                    |
                    <div className="Simple__Links--Group__Item">
                        Wholesale Price
                    </div>
                    |
                    <div className="Simple__Links--Group__Item">
                        Continent Channel
                    </div>
                    |
                    <div className="Simple__Links--Group__Item">
                        {' '}
                        Product Index
                    </div>
                </div>
                <div className="Footer--Simple__Links--Group">
                    Focus Technology:
                    <div className="Simple__Links--Group__Item">
                        Made-in-China.com
                    </div>
                    <div className="Simple__Links--Group__Item">
                        m.Made-in-China.com
                    </div>
                    <div className="Simple__Links--Group__Item">
                        cn.Made-in-China.com
                    </div>
                    <div className="Simple__Links--Group__Item">
                        {' '}
                        ttnet.net{' '}
                    </div>
                    <div className="Simple__Links--Group__Item">
                        tw.ttnet.net
                    </div>
                </div>
                <div className="Footer--Simple__Links--Groups">
                    Copyright © 1998-2021
                    <div className="Simple__Links--Group__Item">
                        Focus Technology Co., Ltd.
                    </div>
                    All Rights Reserved.
                    <div className="Simple__Links--Group__Item">
                        Terms & Conditions
                    </div>
                    <div className="Simple__Links--Group__Item">
                        {' '}
                        Declaration{' '}
                    </div>
                    <div className="Simple__Links--Group__Item">
                        Privacy Policy
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
