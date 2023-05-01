import axios from "axios";
import { useEffect, useState, useContext } from "react"
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom"
import { MinusSmallIcon, PlusSmallIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { CartContext } from "../store/cartcontext";

<script src="https://unpkg.com/currency.js@~2.0.0/dist/currency.min.js"></script>


const ProductPage = () => {

    const {cart, setCart} = useContext(CartContext);
    const {procart, setProcart} = useContext(CartContext);

    let { id } = useParams();

    const [detail, setDetail] = useState({});

    useEffect(() => {
        axios.get(`https://admin.qnsport.vn/items/flower/` + id)
            .then(res => {
                const detail = res.data?.data;
                setDetail(detail);
            })
            .catch(error => console.log(error))

    }, [])

    const navigate = useNavigate();

    //////////////tang giam so luong san pham//////////////

    const [count, setCount] = useState(1);
    //render cap nhat lai moi khi count bi thay doi
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    //so luong sp con trong kho
    //  Number(window.localStorage.getItem('count'));
    
    console.log(count);


    /////////////hien thi ten, tong so trong gio hang ///////////////
    const addtoCart=() => {
        setCart(cart+1);
        setProcart(prevPro => [...prevPro, detail]);
    }







    // cap nhat localStorage bat cu khi nao count thay doi
    // useEffect(() => {
    //     window.localStorage.setItem('count', count);
    // }, [count]);


    return <div className="bg-gray-300">
        <b className="inline-flex w-full h-[20px] text-base pl-4 font-extralight mt-2"> HOME <ChevronRightIcon className="h-4 w-4 mt-1" /> SHOP <ChevronRightIcon className="h-4 w-4 mt-1" /> {id} {detail.title} </b>
        <div className="flex flex-row mt-3 bg-gray-100">
            <div className="ha">
                <img src={"https://admin.qnsport.vn/assets/" + detail.thumbnail} className="w-[2550px] h-[470px]" alt="" />
            </div>
            <div className="flex flex-wrap mt-2 mx-10">
                <div className="font-sans text-4xl text-red-900 mt-4"> {detail.title} </div>
                <div className="text-lg font-italic -mt-10"> {detail.description} </div>
                <div className="text-2xl font-bold text-blue-900 leading-loose">
                    <div class="flex items-center space-x-1 -mt-3"> {new Intl.NumberFormat().format(detail.price)}
                        <button className="inline-flex ml-10 items-center p-1 text-xl text-gray-900 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200">
                            <MinusSmallIcon className="h-3 w-3" onClick={decrement} />
                        </button>
                        <div>
                            <input type="sl" value={count} className="block w-12 p-1 text-sm text-center text-gray-600 border border-gray-300 rounded-lg bg-white align-middle" onChange={(e) => setCount(Number(e.target.value))} required />

                        </div>
                        <button className="inline-flex items-center p-1 text-xl text-gray-900 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200">
                            <PlusSmallIcon className="h-3 w-3" onClick={increment} />
                        </button>
                    </div>


                    <div className="flex flex-row mt-10">
                        <button className="inline-flex items-center p-3 text-xl text-gray-500 border border-gray-100 rounded-lg bg-white hover:text-gray-600 focus:text-red-800 h-55 w-45" onClick={addtoCart}>
                            ADD TO CART
                        </button>
                        <button className="inline-flex items-center ml-4 p-3 text-xl text-white bg-red-600 border border-red-300 hover:border-red-400 rounded-lg focus:bg-red-400 hover:text-white h-55 w-45" onClick={() => { navigate("/cart"); }}>
                            BUY NOW
                        </button>

                    </div>
                </div>
                <i className="-ml-10 text-gray-800">(Nhập số lượng sản phẩm tại đây) </i>
            </div>
        </div>
        <div className="text-sm bg-white px-20 py-10 mt-0.5">
            <div className="text-5xl text-center mb-5"> MÔ TẢ </div>
            <div className="border-double border-8 border-light-blue-500" dangerouslySetInnerHTML={{ __html: detail.content }}></div>
        </div>
    </div >
    
}

export default ProductPage
