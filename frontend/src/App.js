import "./App.css";

const openMenu = () => {
  document.querySelector(".sidebar").classList.add("sidebar-open");
};
const closeMenu = () => {
  document.querySelector(".sidebar").classList.remove("sidebar-open");
};
function App() {
  return (
    <div className="grid-container">
      <header className="header">
        <div className="brand">
          <button onClick={openMenu}>&#9776;</button>
          <a href="index.html">MyTel</a>
        </div>
        <div className="header-links">
          <a href="cart.html">Cart</a>
          <a href="signin.html">Sign In</a>
        </div>
      </header>
      <aside className="sidebar">
        <h3>Shopping categories</h3>
        <button className="sidebar-close-button" onClick={closeMenu}>
          x
        </button>

        <ul>
          <li>
            <a href="index.html">Phones</a>
          </li>
          <li>
            <a href="index.html">TV</a>
          </li>
        </ul>
      </aside>
      <main className="main">
        <ul className="products">
          <li>
            <div className="product">
              <img
                className="product-image"
                src="/images/d1.jpg"
                alt="product"
              />
              <div className="product-name">
                <a href="product.html">Téléphone Samsung S10 plus</a>
              </div>
              <div className="product-brand">Samsung</div>
              <div className="product-price">$600</div>
              <div className="product-rating">4.8 stars (100 reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img
                className="product-image"
                src="/images/d1.jpg"
                alt="product"
              />
              <div className="product-name">
                <a href="product.html">Téléphone Samsung S10 plus</a>
              </div>
              <div className="product-brand">Samsung</div>
              <div className="product-price">$600</div>
              <div className="product-rating">4.8 stars (100 reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img
                className="product-image"
                src="/images/d1.jpg"
                alt="product"
              />
              <div className="product-name">
                <a href="product.html">Téléphone Samsung S10 plus</a>
              </div>
              <div className="product-brand">Samsung</div>
              <div className="product-price">$600</div>
              <div className="product-rating">4.8 stars (100 reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img
                className="product-image"
                src="/images/d1.jpg"
                alt="product"
              />
              <div className="product-name">
                <a href="product.html">Téléphone Samsung S10 plus</a>
              </div>
              <div className="product-brand">Samsung</div>
              <div className="product-price">$600</div>
              <div className="product-rating">4.8 stars (100 reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img
                className="product-image"
                src="/images/d1.jpg"
                alt="product"
              />
              <div className="product-name">
                <a href="product.html">Téléphone Samsung S10 plus</a>
              </div>
              <div className="product-brand">Samsung</div>
              <div className="product-price">$600</div>
              <div className="product-rating">4.8 stars (100 reviews)</div>
            </div>
          </li>
        </ul>
      </main>
      <footer className="footer">All Rights are reserved</footer>
    </div>
  );
}

export default App;
