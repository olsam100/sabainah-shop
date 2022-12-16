import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cartTotalPriceSelector } from 'store/selector';
import { increment, decrement, clear, remove } from 'store/cartSlice';
// import { toggle } from 'store/uiSlice';
import 'components/cartItem/cartItem.css'

const CartItem = ({ closeModal }) => {
    const cart = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    const totalPrice = useSelector(cartTotalPriceSelector)
    // const ui = useSelector((state) => state.ui);
    return (
        <div className='modalContainer' onClick={() => closeModal(false)}>
            <div className="modalWrapper" onClick={(e) => e.stopPropagation()}>

                { cart.length > 0 ?
                    (
                        <button
                            onClick={ () => dispatch(clear()) }
                            className='clearCartBtn'
                        >
                            Clear cart
                        </button>
                    )
                    :
                    (
                        <div><p className='emptyCart'>Cart is Empty</p></div>
                    )
                }
                {
                    cart.map((cartItem) => {
                        return (
                            <div key={ cartItem.id } className='singleCartItem'>
                                <div className='singleCartItem__image'>
                                    <img src={ cartItem.image } alt={cartItem.title} className='cartItem__image'/>
                                </div>
                                <div className='singleCartItem__info'>
                                    <div className='cart__desc'>
                                        <span>{ cartItem.title }</span>
                                        <span className="cartSubTotal">Price: &#8358;{ cartItem.quantity * cartItem.price }</span>
                                    </div>
                                    <div className="cartProductAction">
                                        <div className='item__quantity'>
                                            <div className="action">
                                                <button
                                                    className='action__minus'
                                                    onClick={ () => dispatch(decrement(cartItem.id)) }
                                                    disabled={cartItem.quantity === 1}
                                                >
                                                    -
                                                </button>
                                                <span className='action__value'>{ cartItem.quantity }</span>
                                                <button
                                                    className='action__plus'
                                                    onClick={ () => dispatch(increment(cartItem.id)) }
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                        <button
                                            onClick={ () => dispatch(remove(cartItem.id)) }
                                            className='removeBtn'
                                        >
                                            remove item
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                { totalPrice > 0 ? <div>Total cart item: &#8358;{ totalPrice.toFixed(2) }</div> : null }
            </div>
        </div>
    );
};

export default CartItem;
