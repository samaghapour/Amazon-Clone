import { commerce } from '../../lib/Commerce';

export const ChangeDeliverLocation = (location) => (dispatch) => {
  dispatch({ type: 'CHANGE_DELIVERY_LOCATION', payload: location });
};

// get products for products page
export const GetProducts = (productCategory) => async (dispatch) => {
  try {
    dispatch({ type: 'IS_LOADING', payload: true });
    commerce.products
      .list({
        category_slug: [productCategory],
        limit: 100,
      })
      .then((response) => {
        const ExistingProducts = response.data.filter(
          (item) => item.price.raw > 0
        );
        dispatch({
          type: 'GET_EXISTING_PRODUCTS',
          payload: ExistingProducts,
        });
        dispatch({ type: 'IS_LOADING', payload: false });
      });
  } catch (error) {
    console.log(error);
    console.log('error received from getProduct action');
    alert('something went wrong! , try again please');
  }
};

// get products for products page by brands
export const FilterProductsByBrand =
  (productsWithBrand, brands, price) => async (dispatch) => {
    const filteredProductsByBrand = brands.map((brandName) => {
      return productsWithBrand.filter((product) => {
        const brandObject = product.variant_groups.filter(
          (variant) => variant.name.toLowerCase() === 'brand'
        );

        return brandObject[0]?.options[0].name === brandName;
      });
    });

    if (
      (price.min || price.max) &&
      (price.min !== 1 || !price.max !== 999999)
    ) {
      const filteredProductsByBrandAndPrice = filteredProductsByBrand
        .flat(1)
        .filter((product) => {
          const ProductPrice = product.price.raw;

          return ProductPrice >= price.min && ProductPrice <= price.max;
        });
      dispatch({
        type: 'FILTERED_PRODUCT_BY_BRANDS',
        payload: filteredProductsByBrandAndPrice,
      });
    } else {
      dispatch({
        type: 'FILTERED_PRODUCT_BY_BRANDS',
        payload: filteredProductsByBrand.flat(1),
      });
    }
  };

// get products for products page by price
export const FilterProductsByPrice =
  (brands, productsWithBrand, Allproducts, price) => async (dispatch) => {
    if (
      brands &&
      brands.length > 0 &&
      (price.min || price.max) &&
      (price.min !== 1 || !price.max !== 9999999)
    ) {
      const filteredProductsByBrand = brands.map((brandName) => {
        return productsWithBrand.filter((product) => {
          const brandObject = product.variant_groups.filter(
            (variant) => variant.name.toLowerCase() === 'brand'
          );

          return brandObject[0]?.options[0].name === brandName;
        });
      });

      const filteredProductsByBrandAndPrice = filteredProductsByBrand
        .flat(1)
        .filter((product) => {
          const ProductPrice = product.price.raw;

          return ProductPrice >= price.min && ProductPrice <= price.max;
        });

      dispatch({
        type: 'FILTERED_PRODUCT_BY_PRICE',
        payload: filteredProductsByBrandAndPrice,
      });
    } else {
      const filterProductsByPrice = Allproducts.filter((product) => {
        const ProductPrice = product.price.raw;

        return ProductPrice >= price.min && ProductPrice <= price.max;
      });
      dispatch({
        type: 'FILTERED_PRODUCT_BY_PRICE',
        payload: filterProductsByPrice,
      });
    }
  };

// get product Details for productItem page
export const GetProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: 'IS_LOADING', payload: true });

    commerce.products.retrieve(id).then((product) => {
      dispatch({ type: 'GET_PRODUCT_DETAILS', payload: product });
      dispatch({ type: 'GET_RECENTLY_PRODUCT', payload: product });

      dispatch({ type: 'IS_LOADING', payload: false });
    });
  } catch (error) {
    console.log(error);
    console.log('error received from getProductDetails action');
    alert('something went wrong! , try again please');
  }
};

// Add product to Cart
export const AddToCart = (id, quantityNumber) => async (dispatch) => {
  try {
    commerce.cart.add(id, quantityNumber).then((response) => {
      dispatch({ type: 'GET_CART', payload: response });
    });
  } catch (error) {
    console.log(error);
    console.log('error received from add to cart action');
    alert('something went wrong! , try again please');
  }
};

// Delete product From Cart
export const DeleteFromCart = (id) => async (dispatch) => {
  try {
    commerce.cart.remove(id).then((response) => {
      dispatch({
        type: 'DELETE_ADDED_PRODUCTS',
        payload: response,
      });
    });
  } catch (error) {
    console.log(error);
    console.log('error received from deleteFromCart action');
    alert('something went wrong! , try again please');
  }
};

// update product quantity
export const UpdateProductQuantity =
  (lineId, quantityNumber) => async (dispatch) => {
    try {
      commerce.cart
        .update(lineId, { quantity: quantityNumber })
        .then((response) => {
          dispatch({
            type: 'UPDATE_CART_BY_QUANTITY',
            payload: response,
          });
        });
    } catch (error) {
      console.log(error);
      console.log('error received from UpdateProductQuantity action');
      alert('something went wrong! , try again please');
    }
  };

//search and update products with search Result
export const SearchProduct =
  (searchCategory, searchValue, AmazonAllProducts) => async (dispatch) => {
    let searchResult;

    dispatch({ type: 'IS_LOADING', payload: true });

    if (searchCategory === 'All') {
      searchResult =
        AmazonAllProducts &&
        AmazonAllProducts.filter((product) => {
          return (
            product.name.toLowerCase().includes(searchValue.toLowerCase()) ||
            product.id.toLowerCase() === searchValue.toLowerCase() ||
            product.description
              .toLowerCase()
              .includes(searchValue.toLowerCase())
          );
        });
    } else {
      const specificProducts =
        AmazonAllProducts &&
        AmazonAllProducts.filter((product) => {
          const ProductCategory =
            product.categories[product.categories.length - 1].name;
          return ProductCategory === searchCategory;
        });

      searchResult = specificProducts.filter((product) => {
        return (
          product.name.toLowerCase().includes(searchValue.toLowerCase()) ||
          product.id.toLowerCase() === searchValue.toLowerCase() ||
          product.description.toLowerCase().includes(searchValue.toLowerCase())
        );
      });
    }

    dispatch({ type: 'SEARCH_PRODUCT_RESULT', payload: searchResult });
    dispatch({ type: 'IS_LOADING', payload: false });
  };
