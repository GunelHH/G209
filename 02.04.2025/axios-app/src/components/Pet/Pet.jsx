import Products from "../Products";

const Pet = () => {
  return (
    <div>
      <header>
        <nav className="container">
          <div className="logo">
            <img
              width={100}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKmDyS0oO34Gfz0-b8TAohlvm7ZPwImQhoqg&s"
              alt="Pet store"
            />
          </div>
          <div className="nav-links">
            <ul className="d-flex">
              <li>Users</li>
              <li>Pets</li>
              <li>Store</li>
            </ul>
          </div>
        </nav>
      </header>
      <div className="text-center my-4">
        <Products />
      </div>
    </div>
  );
};

export default Pet;
