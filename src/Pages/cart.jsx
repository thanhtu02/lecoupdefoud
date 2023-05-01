import { useContext } from "react";
import { CartContext } from "../store/cartcontext";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

const CartPage = () => {

    const { cart, setCart } = useContext(CartContext);
    const { procart, setProcart } = useContext(CartContext);

    console.log(procart);

    return (
        <div>
            <b className="bg-gray-300 inline-flex w-full h-[40px] text-base pl-4 font-extralight pt-2 mt-0"> HOME <ChevronRightIcon className="h-4 w-4 mt-1" /> CART </b>

            <div className="bg-gray-100 flex w-full px-[160px] py-[50px]">

                <div className="bg-white w-3/5 p-[30px]" >
                    <h1> Shopping Cart: {cart} items </h1>
                    {procart.map(element => {
                        return <div>

                            <div className="flex gap-[10px]">
                                <div className="">
                                    <img src={"https://admin.qnsport.vn/assets/" + element.thumbnail} className="w-[250px] h-[150px]" alt="" />
                                </div>

                                <div className="flex gap-[10px]">
                                    <div className="text-3xl"> {element.title} </div>
                                    <div className="text-2xl"> {element.price} </div>
                                </div>

                                <button className="" onClick={() => decreasePro()}> + </button>
                                <button onClick={() => removePro()} className="remove-btn"> DELETE </button>
                                <button className="" onClick={() => increasePro()}> - </button>
                            </div>

                        </div>
                    })}
                </div>

                <div className="bg-gray-200 w-2/5 p-[30px]">
                    <button className="flex flex-col">
                        <h1 className=""> Order Summary </h1>

                        <div className="text-3xl">Quantity: {cart} </div>


                        <div className="text-3xl"> SHIPPING </div>
                        <select type="" className="bg-white border rounded-md text-xl">
                            <option value="default"> Thanh toán khi nhận hàng </option>
                            <option value="newesttooldest"> Newest to Oldest </option>
                            <option value="oldesttonewest">Oldest to Newest</option>
                            <option value="lowesttohighest">Lowest to highest </option>
                        </select>


                    </button>
                </div>

            </div>
        </div>
    )
}

export default CartPage;