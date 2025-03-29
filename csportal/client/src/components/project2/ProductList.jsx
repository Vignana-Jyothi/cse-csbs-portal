function ProductList() {
    return (
      <div>
        <div>
          <h2>Product List for Project 2</h2>
          {/* Example List */}
          <ul>
            <li><a href="/project2/1">Product 1</a></li>
            <li><a href="/project2/2">Product 2</a></li>
          </ul>
        </div>
        <div>
        <h2>API List for Project 2</h2>
        {/* Example List */}
        <ul>
          <li><a href="http://localhost:5000/project2/api">API</a></li>
          <li><a href="http://localhost:5000/project2/api/employees">Employees</a></li>
        </ul>
      </div>
    </div>
    );
  }
  
  export default ProductList;
  