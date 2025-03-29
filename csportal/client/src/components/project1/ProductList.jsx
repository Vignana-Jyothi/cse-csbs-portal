function ProductList() {
    return (
      <div>
        <div>
          <h2>Product List for Project 1</h2>
          {/* Example List */}
          <ul>
            <li><a href="/project1/1">Product 1</a></li>
            <li><a href="/project1/2">Product 2</a></li>
          </ul>
        </div>
        <div>
        <h2>API List for Project 1</h2>
        {/* Example List */}
        <ul>
          <li><a href="http://localhost:5000/project1/api">API</a></li>
          <li><a href="http://localhost:5000/project1/api/employees">Employees</a></li>
        </ul>
      </div>
    </div>
  );
  }
  
  export default ProductList;
  