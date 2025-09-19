"use client";

import Link from "next/link";

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      name: "Sneakers",
      price: "₦49,000",
      originalPrice: "₦49,000",
      rating: 4.5,
      image: "assets/img/food/sneakers.png"
    },
    {
      id: 2,
      name: "Wrist Watch",
      price: "₦19,000",
      originalPrice: "₦19,000",
      rating: 4.5,
      image: "assets/img/food/watch.png"
    },
    {
      id: 3,
      name: "Green Handbag",
      price: "₦99,000",
      originalPrice: "₦99,000",
      rating: 4.5,
      image: "assets/img/food/handbag.png"
    }
  ];

  return (
    <section className="products-section fix section-padding section-bg">
      <div className="container">
        <div className="section-title text-center">
          <span className="wow fadeInUp">our products</span>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            Our <span>Products</span>
          </h2>
          <p className="wow fadeInUp" data-wow-delay=".5s">
            Discover our collection of premium products
          </p>
        </div>
        <div className="row">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" 
              data-wow-delay={`${0.3 + (index * 0.2)}s`}
            >
              <div className="single-product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                  <div className="product-rating">
                    <div className="stars">
                      {[...Array(5)].map((_, i) => (
                        <i 
                          key={i}
                          className={`fas fa-star ${i < Math.floor(product.rating) ? 'active' : ''}`}
                        ></i>
                      ))}
                    </div>
                    <span className="rating-text">{product.rating}</span>
                  </div>
                </div>
                <div className="product-content">
                  <div className="product-price">
                    <span className="crossed-price">{product.originalPrice}</span>
                  </div>
                  <h4>{product.name}</h4>
                  <Link href="/shop-single" className="buy-now-btn">
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
