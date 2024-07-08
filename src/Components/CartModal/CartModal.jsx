import React, { useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import "./CartModal.css";

const CartModal = ({ isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isVisible]);

  return (
    <div
      className={`cart-modal modal__content gradient ${isVisible ? "visible" : ""}`}
      role='dialog'
      aria-modal='true'
      aria-label='Cart'
    >
      <div className='modal-overlay' onClick={onClose}></div>
      <div className='cart-modal__content cart-modal__content-bottom' tabIndex='-1'>
        <div className='cart-modal__form'>
          <h2>Your cart is empty</h2>
          <button className='continue-shopping-button' onClick={onClose}>
            Continue shopping
          </button>
        </div>
        <button
          type='button'
          className='cart-modal__close-button modal__close-button link link--text focus-inset'
          aria-label='Close'
          onClick={onClose}
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default CartModal;
