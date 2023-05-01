import { createContext, useState } from "react";

//provider => consumer (usecontext) => store

// 1 ham bo sp vao gio hang addtocart
// 2 bo gia tri vao ham addtocart

export const CartContext = createContext();

const CartProvider = ({children}) => {

    const [cart, setCart] = useState(0);

    const [procart, setProcart] = useState([]);

    // const addtoCart = () => {
    //     setCart(cart+1);
    // }

    return ( 
        <CartContext.Provider value={{cart, setCart, procart, setProcart}}>
           {children}
        </CartContext.Provider> )
}

//consumer export useCart return usecontẽt
// export default useCart () => {
//     return (

//     )
// }
export default CartProvider;