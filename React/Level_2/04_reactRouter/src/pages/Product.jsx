import React from "react";
import { Link , Outlet} from "react-router-dom";

const Product = () => {
  return (
    <div>
      <h1>Welcome to Product Components</h1>
      <div>
        <h2>Products Page</h2>
        <nav>
          <Link to="phones">Phones</Link> | <Link to="laptops">Laptops</Link> |{" "}
          <Link to="camera">Camera</Link>
        </nav>
      {/* No outlet -> Child categories will not render here */}
      <Outlet/>
      </div>
    </div>
  );
};

export default Product;

// component function hi to hai


// naya file bnaunga index.jsx
