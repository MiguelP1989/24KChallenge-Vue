const CART_KEY = "cart";


export const getCart = (cartKey = CART_KEY) => {
    if (localStorage && localStorage.getItem(cartKey)) {
        console.log("localStorage", localStorage);
        
      return JSON.parse(localStorage.getItem(cartKey));
     
    }
    return [];
  };

  export const setCart = (value, cartKey = CART_KEY) => {
    if (localStorage) {
        console.log("local", localStorage);
        
      localStorage.setItem(cartKey, JSON.stringify(value));
      console.log(localStorage);
      
    }
  };