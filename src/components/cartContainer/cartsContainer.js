import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from 'store/productsSlice';
import { addToCart } from 'store/cartSlice';
import '../cartContainer/cartsContainer.css'

const CartsContainer = () => {

    const [showDropdown, setShowDropdown] = useState(false)
    const dropdownState = () => {
        setShowDropdown(!showDropdown)
    }

    const dispatch = useDispatch()
    const products = useSelector((state) => state.products)

     useEffect(() => {
         dispatch(getProducts())
    }, [dispatch])

    const activeDropdown = (e) => {
        e.stopPropagation()
    }

    return (
        <main className='main' onClick={activeDropdown}>
            <section className='mainContainer__one'>
                <div className='listing__filter'>
                    <div className="filter__section">
                        <div className='listing__filter__search'>
                            <svg className='search__icon' data-v-25d74f8c="" fill="none" height="20" viewBox="0 0 21 20" width="21" xmlns="http://www.w3.org/2000/svg"><path data-v-25d74f8c="" d="M9.8 15.6C13.5 15.6 16.5 12.6 16.5 9 16.5 5.4 13.5 2.5 9.8 2.5 6.1 2.5 3.2 5.4 3.2 9 3.2 12.6 6.1 15.6 9.8 15.6Z"></path> <path data-v-25d74f8c="" d="M18.1 17.2L14.5 13.6"></path></svg>
                            <input type="search" placeholder='What are you shopping for?' className='listing__input'/>
                        </div>
                    </div>
                    <div className="filter__section">
                        <div className="listing__filter__category">
                            <button className='listing__filter__category__btn' onClick={dropdownState}>
                                <span className='listing__filter__category__btn__label'>Filter by category</span>
                                <svg className='chevron__down' data-v-25d74f8c="" fill="none" height="10" viewBox="0 0 18 10" width="18" xmlns="http://www.w3.org/2000/svg"><path data-v-25d74f8c="" d="M1 1L9 9 17 1"></path></svg>
                            </button>
                            { showDropdown ?
                                 <div className='listing__filter__category__dropdown'>
                                    <span className='listing__filter__category__dropdown__item'>All categories</span>
                                    <span className='listing__filter__category__dropdown__item'>Inflatable swimming pools</span>
                                    <span className='listing__filter__category__dropdown__item'>Girls monokinis</span>
                                    <span className='listing__filter__category__dropdown__item'>Adult female monokini</span>
                                    <span className='listing__filter__category__dropdown__item'>Rectangular frame swimmming pools</span>
                                    <span className='listing__filter__category__dropdown__item'>Ring floaters</span>
                                    <span className='listing__filter__category__dropdown__item'>Swim accessories</span>
                                    <span className='listing__filter__category__dropdown__item'>Round frame swimming pool</span>
                                    <span className='listing__filter__category__dropdown__item'>Round frame swimming pool</span>
                                    <span className='listing__filter__category__dropdown__item'>Kid'sfullbody swimsuits</span>
                                    <span className='listing__filter__category__dropdown__item'>Swim top and short</span>
                                </div>
                                : 
                               null
                            }
                        </div>
                    </div>
                </div>
                <div className='listing__items'>
                    <div className='allitemswrapper'>
                              { products.list.map((product) => {
                            return (
                                <div key={ product.id } className='singleItem'>
                                    <div className='singleItem__image__Container'>
                                        <img src={product.image} alt={product.title.substring(0, 30)} className='single__Img'/>
                                    </div>
                                    <div className='item__body'>
                                        <Link to={ `/store/swimfitnigerialimited/${product.id}` } className='item__title'>{ product.title.substring(0, 30) }</Link>
                                        <div className='item__info'>
                                            <div className='item__price__wrapper'>
                                                <span className='item__price'>&#8358;{product.price} </span>
                                            </div>
                                            <button onClick={() => dispatch(addToCart(product))} className='addbtn'>Add</button>
                                            
                                        </div>
                                    </div>
                                </div>
                            )
                        }) }

                    </div>
                    
                </div>
            </section>
            <section className='mainContainer__two'></section>
        </main>
    );
};

export default CartsContainer;