import React, { useState } from 'react';
import "./AddCard.css";
import img1 from "../../Images/image-product-1.jpg"
import img2 from "../../Images/image-product-2.jpg"
import img3 from "../../Images/image-product-3.jpg"
import img4 from "../../Images/image-product-4.jpg"

const AddCard = () => {

    const [mainImage, setMainImage] = useState(img1);

    // Function to handle thumbnail click
    const handleThumbnailClick = (image) => {
        setMainImage(image);
    };
    return (
        <>
            <div className="container g-0">
                <section className="main g-0">
                    <div className="default gallery">
                        {/* Main Image Display */}
                        <div className="main-img">
                            <img className="active" src={mainImage} alt="product-img" />
                        </div>

                        {/* Thumbnail List */}
                        <div className="thumb-list">
                            <div
                                className={`thumbnail ${mainImage === img1 ? 'active' : ''}`}
                                onClick={() => handleThumbnailClick(img1)}
                            >
                                <img src={img1} alt="product-img" />
                            </div>
                            <div
                                className={`thumbnail ${mainImage === img2 ? 'active' : ''}`}
                                onClick={() => handleThumbnailClick(img2)}
                            >
                                <img src={img2} alt="product-img" />
                            </div>
                            <div
                                className={`thumbnail ${mainImage === img3 ? 'active' : ''}`}
                                onClick={() => handleThumbnailClick(img3)}
                            >
                                <img src={img3} alt="product-img" />
                            </div>
                            <div
                                className={`thumbnail ${mainImage === img4 ? 'active' : ''}`}
                                onClick={() => handleThumbnailClick(img4)}
                            >
                                <img src={img4} alt="product-img" />
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <h3>SNEAKER COMPANY</h3>
                        <h2 className="product-name">Fall Limited Edition Sneakers</h2>
                        <p className="product-desc">
                            These low-profile sneakers are your perfect casual wear companion.
                            Featuring a durable rubber outer sole, they’ll withstand everything the
                            weather can offer.
                        </p>
                        <div className="price-info">
                            <div className="price">
                                <span className="current-price">$125.00</span>
                                <span className="discount">50%</span>
                            </div>
                            <div className="prev-price">$250.00</div>
                        </div>
                        <div className="add-to-cart-container">
                            <div className="counter">
                                <button className="minus">
                                    <svg
                                        width={12}
                                        height={4}
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                    >
                                        <defs>
                                            <path
                                                d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
                                                id="a"
                                            />
                                        </defs>
                                        <use fill="#FF7E1B" fillRule="nonzero" xlinkHref="#a" />
                                    </svg>
                                </button>
                                <span className="count">0</span>
                                <button className="plus">
                                    <svg
                                        width={12}
                                        height={12}
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                    >
                                        <defs>
                                            <path
                                                d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
                                                id="b"
                                            />
                                        </defs>
                                        <use fill="#FF7E1B" fillRule="nonzero" xlinkHref="#b" />
                                    </svg>
                                </button>
                            </div>
                            <button
                                className="add-to-cart btn btn-primary"
                                type="button"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#cartOffcanvas"
                                aria-controls="cartOffcanvas"
                            >
                                <span>
                                    <svg width={22} height={20} xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                                            fill="#69707D"
                                            fillRule="nonzero"
                                        />
                                    </svg>
                                </span>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                    {/* Offcanvas Shopping Cart (Right-side) */}
                    <div
                        className="offcanvas offcanvas-end"
                        tabIndex={-1}
                        id="cartOffcanvas"
                        aria-labelledby="cartOffcanvasLabel"
                    >
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="cartOffcanvasLabel">
                                Shopping Cart
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                            />
                        </div>
                        <div className="offcanvas-body">
                            <p className="mb-3">6 items</p>
                            {/* Cart Item */}
                            <div className="d-flex cart-item">
                                <img src={img1} alt="Product Image" />
                                <div className="cart-item-details">
                                    <p>AF1 BR1 1 Lip, Mouthguard In 8 Colors</p>
                                    <p>
                                        Royal Blue{" "}
                                        <a href="#" className="text-decoration-none">
                                            ✎
                                        </a>
                                    </p>
                                    <p className="fw-bold">$14.99</p>
                                </div>
                            </div>
                            <hr />
                            {/* Subtotal and Total */}
                            <div className="d-flex justify-content-between cart-subtotal">
                                <p>Subtotal:</p>
                                <p>$99.44</p>
                            </div>
                            <div className="d-flex justify-content-between cart-total">
                                <p>Total:</p>
                                <p>$99.44</p>
                            </div>
                        </div>
                        <div className="offcanvas-footer p-3">
                            <button type="button" className="btn btn-checkout w-100 mb-2">
                                CHECKOUT
                            </button>
                            <button
                                type="button"
                                className="btn btn-view-cart w-100"
                                data-bs-dismiss="offcanvas"
                            >
                                VIEW CART
                            </button>
                        </div>
                    </div>
                </section>
            </div>

        </>
    );
};

export default AddCard;