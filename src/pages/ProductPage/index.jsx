import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import "./ProductPage.css";
import img1 from "../../Images/image-product-1.jpg"
import img2 from "../../Images/image-product-2.jpg"

const ProductPage = () => {

    const [email, setEmail] = useState('');

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Email:', email);
        // Add your form submission logic here
    };
    return (
        <>
            <div className="container-fluid my-5">
                <div className="row">
                    {/* Sidebar Categories */}
                    <div className="col-lg-2 col-md-3">
                        <h5>Categories</h5>
                        <ul className="category-list">
                            <li>
                                <a href="#shirts">Shirts</a>
                            </li>
                            <li>
                                <a href="#polos">Polos</a>
                            </li>
                            <li>
                                <a href="#hoodies">Hoodies</a>
                            </li>
                            <li>
                                <a href="#warmups">Warmups</a>
                            </li>
                            <li>
                                <a href="#compressions">Compressions</a>
                            </li>
                            <li>
                                <a href="#shorts">Shorts</a>
                            </li>
                            <li>
                                <a href="#socks">Socks</a>
                            </li>
                            <li>
                                <a href="#jackets">Jackets</a>
                            </li>
                            <li>
                                <a href="#hats">Hats</a>
                            </li>
                        </ul>
                    </div>
                    {/* Product Grid */}
                    <div className="col-lg-10 col-md-9">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            {/* View as icons */}
                            <div className="view-icons">
                                <i className="fas fa-th-large" />
                                <i className="fas fa-th-list" />
                            </div>
                            {/* Items per page and sort dropdown */}
                            <div>
                                <select
                                    className="form-select d-inline-block w-auto"
                                    id="itemsPerPage"
                                >
                                    <option selected="">Items per page</option>
                                    <option value={20}>20</option>
                                    <option value={50}>50</option>
                                    <option value={100}>100</option>
                                </select>
                                <select className="form-select d-inline-block w-auto" id="sortBy">
                                    <option selected="">Sort by</option>
                                    <option value="featured">Featured</option>
                                    <option value="price">Price</option>
                                    <option value="rating">Rating</option>
                                </select>
                            </div>
                        </div>
                        {/* Product Cards Row */}
                        <div className="row">
                            {/* Product 1 */}
                            <div className="col-lg-4 col-md-6 product-card">
                                <div className="card">
                                    <img
                                        src={img1}
                                        className="card-img-top product-img"
                                        alt="Product 1"
                                    />
                                    <div className="card-body text-center">
                                        <h5 className="card-title">
                                            Youth/Adult Football Uniforms Classic Series 1500 Package
                                        </h5>
                                        {/* Request Order Form Button */}
                                        <button className="btn btn-danger btn-lg w-100 mt-3">
                                            <a href="/addCard">Add to Card</a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* Product 2 */}
                            <div className="col-lg-4 col-md-6 product-card">
                                <div className="card">
                                    <img
                                        src={img1}
                                        className="card-img-top product-img"
                                        alt="Product 2"
                                    />
                                    <div className="card-body text-center">
                                        <h5 className="card-title">
                                            Youth/Adult Football Uniforms Classic Series 1500A
                                        </h5>
                                        {/* Request Order Form Button */}
                                        <button className="btn btn-danger btn-lg w-100 mt-3">
                                            <a href="/addCard">Add to Card</a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* Product 3 */}
                            <div className="col-lg-4 col-md-6 product-card">
                                <div className="card">
                                    <img
                                        src={img1}
                                        className="card-img-top product-img"
                                        alt="Product 3"
                                    />
                                    <div className="card-body text-center">
                                        <h5 className="card-title">
                                            Youth/Adult Football Uniforms Classic Series 1500B
                                        </h5>
                                        {/* Request Order Form Button */}
                                        <button className="btn btn-danger btn-lg w-100 mt-3">
                                            <a href="/addCard">Add to Card</a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {/* Discount Box - Button to open the modal */}
                <div className="discount-box" data-bs-toggle="modal" data-bs-target="#discountModal">
                    <span>10% off</span>
                    <button type="button" className="btn-close" aria-label="Close"></button>
                </div>

                {/* Modal */}
                <div className="modal fade" id="discountModal" tabIndex="-1" aria-labelledby="discountModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="row g-0">
                                <div className="col-md-6">
                                    <img src={img2} alt="Football Player" className="img-fluid" />
                                </div>
                                <div className="col-md-6">
                                    <div className="modal-header border-0">
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <h3>10% Off Entire Merch Order</h3>
                                        <p>On Your Purchase!</p>
                                        <form onSubmit={handleSubmit}>
                                            <div className="mb-3">
                                                <label htmlFor="emailInput" className="form-label">Email</label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="emailInput"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    placeholder="Enter your email"
                                                    required
                                                />
                                            </div>
                                            <button id="unlockDiscountBtn" type="submit" className="btn btn-dark w-100">
                                                UNLOCK DISCOUNT
                                            </button>
                                            <p className="mt-3">
                                                By signing up, you agree to receive marketing emails. View our privacy policy and terms of service for more info.
                                            </p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );

};
export default ProductPage;