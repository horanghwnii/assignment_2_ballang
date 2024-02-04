// options
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
  },
};

// Products
const getProducts = async () => {
  const endpoint =
    'https://port-0-ballang-server-qrd2als49b8m4.sel5.cloudtype.app/products';
  const response = await fetch(endpoint, options);
  const data = await response.json();

  return data;
};

// Product
const getProduct = async (targetId) => {
  const endpoint = `https://port-0-ballang-server-qrd2als49b8m4.sel5.cloudtype.app/products/${targetId}`;
  const response = await fetch(endpoint, options);
  const data = await response.json();
  return data;
};

const productsAPI = {
  getProducts,
  getProduct,
};

export default productsAPI;
