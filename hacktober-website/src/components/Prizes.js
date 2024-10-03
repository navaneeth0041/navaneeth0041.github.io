import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { Tag } from 'primereact/tag';
import './Prices.css'; 

export default function Prizes() {
    const [products, setProducts] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);  // Track the current center card index

    const Pri = [
        {
            image: 'https://images.pexels.com/photos/3016350/pexels-photo-3016350.jpeg?cs=srgb&dl=pexels-pierre-blache-651604-3016350.jpg&fm=jpg'
        },
        {

            image: ''
        },
        {

            image: ''
        },
        {

            image: ''
        },
        {
            image: ''
        }
    ];

    const responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    useEffect(() => {
        setProducts(Pri);
    }, []);

    const productTemplate = (product, index) => {
        const isCenterCard = index === currentIndex;
        return (
            <div className={`product-card ${isCenterCard ? 'center-card' : ''}`}>
                <div className="product-image">
                    <img loading="lazy" src="https://images.unsplash.com/photo-1726682577615-728e4272a60c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt={product.name} />
                </div>

            </div>
        );
    };

    const onPageChange = (event) => {
        setCurrentIndex(event.page);  
    };

    return (
        <>
            <div className="carousel-container">
            <h1 className="prizes-title">Game Prizes</h1>
                <Carousel
                    value={products}
                    numVisible={3}
                    numScroll={1}
                    responsiveOptions={responsiveOptions}
                    className="custom-carousel"
                    circular
                    autoplayInterval={3000}
                    itemTemplate={productTemplate}
                    onPageChange={onPageChange}  
                />
            </div>
        </>
    );
}
