import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { cartTotalSelector } from 'store/selector';
import { Link } from 'react-router-dom';
import '../navbar/navbar.css'
import avi from 'assets/images/cat.jpeg'
// import { toggle } from 'store/uiSlice';
import CartItem from 'components/cartItem/cartItem';

const Navbar = () => {
    const total = useSelector(cartTotalSelector)
    console.log(total);
    const [change, setChange] = useState(false)

    const [modal, setModal] = useState(false)

    const modalhandler = () => {
        setModal(!modal)
    }
    
    useEffect(() => {
        if (total !== 0) {
            setChange(true)

            setTimeout(() => {
                setChange(false)
            }, 1000)
        }
    }, [total])
    return (
        <header className='header'>
            <div className="headerwrapper">
                <nav className='nav'>
                    <div className="brand">
                        <Link to='/store/swimfitnigerialimited' className='avi-link'>
                            <span className="avi">
                                <img src={avi} alt="" className='avi-image'/>
                            </span>
                            <span className="avi-name">Sabainah Nigeria Limited</span>
                        </Link>
                        <Link to='/store/swimfitnigerialimited#reviews' className='rating'>
                            <span>
                                <svg data-v-5d92f3cc="" width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path data-v-5d92f3cc="" d="M9.99984 1.66666L11.9671 7.72118H18.3332L13.1829 11.4631L15.1501 17.5176L9.99984 13.7757L4.84955 17.5176L6.81679 11.4631L1.6665 7.72118H8.0326L9.99984 1.66666Z" fill="#FF9B00" stroke="#FF9B00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                            </span>
                            <span className='rating-value'> 0 (0)</span>
                        </Link>
                    </div>
                    <div className="cartdisplay">
                        <Link to='https://app.flutterwave.com/signup' className='setup-store'>set up your store for free</Link>
                        <button className='cartbtn' onClick={modalhandler}>
                        {/* <button className='cartbtn' onClick={() => dispatch(toggle())}> */}
                            <span className='cartboxContainer'>
                                <svg className='btnsvg' data-v-5d92f3cc="" fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path data-v-5d92f3cc="" d="M9 22C9.6 22 10 21.6 10 21 10 20.4 9.6 20 9 20 8.4 20 8 20.4 8 21 8 21.6 8.4 22 9 22Z"></path> <path data-v-5d92f3cc="" d="M20 22C20.6 22 21 21.6 21 21 21 20.4 20.6 20 20 20 19.4 20 19 20.4 19 21 19 21.6 19.4 22 20 22Z"></path> <path data-v-5d92f3cc="" d="M1 1H5L7.7 14.4C7.8 14.9 8 15.3 8.4 15.6 8.8 15.9 9.2 16 9.7 16H19.4C19.9 16 20.3 15.9 20.7 15.6 21.1 15.3 21.3 14.9 21.4 14.4L23 6H6"></path></svg>
                            </span>
                            <span className='carttext' change={ change }>Cart: { total }</span>
                        </button>
                    </div>
                </nav>
            </div>
            {/* { modal ? '' : <CartItem closeModal={ setModal } /> } */}
            { modal ? <CartItem closeModal={ setModal } /> : '' }
        </header>
    );
};

export default Navbar;