import { ShoppingCartIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const HeaderPage = () => {
    return <div>
        <div className="t1">
            <header className="relative">
                <div className=" block bg-black text-white text-center py-2 text-sm h-10"> We're supporting small business! Head to our Shop to browse through the new products.
                </div>
                <h1 className="text-center pt-4 font-serif" > <Link to={"/"}> lecoupdefoud </Link> </h1>
            </header>

            <nav className="">
                <ul className="flex justify-between p-4 p-6 max-w-[500px] mx-auto">
                    <li className="text-black-900 font-italic text-xl transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-blue-600 hover:underline underline-offset-4 duration-300"> <Link to={"/wellness"}> <span>WELLNESS</span> </Link> </li>
                    <li className="text-black-900 font-italic text-xl transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-blue-600 hover:underline underline-offset-4 duration-300"> <Link to={"/beauty"}> <span> BEAUTY</span> </Link></li>
                    <li className="text-black-900 font-italic text-xl transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-blue-600 hover:underline underline-offset-4 duration-300"><Link to={"/fitness"}><span>FITNESS</span></Link></li>
                    <li className="text-black-900 font-italic text-xl transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-blue-600 hover:underline underline-offset-4 duration-300"><Link to={"/shop"}><span onClick={() => { setCatid(null) }}>SHOP</span></Link></li>
                    <li className="text-black-900 font-italic transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:underline underline-offset-4 duration-300"><Link to={"/cart"}> <ShoppingCartIcon viewBox="0 0 24 24" className="w-5 h-6" /> </Link> </li>
                </ul>
            </nav>
        </div>

    </div>
}

export default HeaderPage;