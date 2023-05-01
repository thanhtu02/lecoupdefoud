import { ShoppingCartIcon, XMarkIcon } from "@heroicons/react/24/solid"
import Slider from "../slider/slider"

const HomePage = () => {
    return <div>
            <Slider />
        <div className="t2">
            <h2 className="text-slate-900 text-4xl tracking-tight font-extrabold sm:text-2xl text-center mt-12">Being an "attractive girl".</h2>
            <p className="mt-4 max-w-2xl mx-auto text-center text-sm"> Ever wish people, or at least your crush would notice you? Well here you'll learn how to dress yourself like a princess and be like one too. Style forever! </p>

            <figcaption className="mt-10 flex items-center justify-center space-x-4 text-left">
                <img src="/thanhtu.jpeg" alt="" className="w-14 h-14 rounded-full" loading="lazy" decoding="async" />
                <div>
                    <div className="text-slate-900 font-semibold"> Thanh Tu </div>
                    <div className="mt-0.5 text-sm leading-6"> Creater & Founder</div>
                </div>
            </figcaption>

            <div className="grid grid-cols-3 gap-y-20 justify-betwee mt-10">
                <div>
                    <figcaption className="mt-6 flex items-center justify-center space-x-4 text-left">
                        <img src="/thanhtu.jpeg" alt="" className="w-14 h-14 rounded-full" loading="lazy" decoding="async" />
                        <div>
                            <div className="text-slate-900 font-semibold"> Thanh Tu </div>
                            <div className="mt-0.5 text-sm leading-6"> Creater & Founder</div>
                        </div>
                    </figcaption>
                </div>
                <div>
                    <figcaption className="mt-6 flex items-center justify-center space-x-4 text-left">
                        <img src="/thanhtu.jpeg" alt="" className="w-14 h-14 rounded-full" loading="lazy" decoding="async" />
                        <div>
                            <div className="text-slate-900 font-semibold"> Thanh Tu </div>
                            <div className="mt-0.5 text-sm leading-6"> Creater & Founder</div>
                        </div>
                    </figcaption>
                </div>
                <div>
                    <figcaption className="mt-6 flex items-center justify-center space-x-4 text-left">
                        <img src="/thanhtu.jpeg" alt="" className="w-14 h-14 rounded-full" loading="lazy" decoding="async" />
                        <div>
                            <div className="text-slate-900 font-semibold"> Thanh Tu </div>
                            <div className="mt-0.5 text-sm leading-6"> Creater & Founder</div>
                        </div>
                    </figcaption>
                </div>
                <div><figcaption className="mt-6 flex items-center justify-center space-x-4 text-left">
                    <img src="/thanhtu.jpeg" alt="" className="w-14 h-14 rounded-full" loading="lazy" decoding="async" />
                    <div>
                        <div className="text-slate-900 font-semibold"> Thanh Tu </div>
                        <div className="mt-0.5 text-sm leading-6"> Creater & Founder</div>
                    </div>
                </figcaption>
                </div>
                <div>
                    <figcaption className="mt-6 flex items-center justify-center space-x-4 text-left">
                        <img src="/thanhtu.jpeg" alt="" className="w-14 h-14 rounded-full" loading="lazy" decoding="async" />
                        <div>
                            <div className="text-slate-900 font-semibold"> Thanh Tu </div>
                            <div className="mt-0.5 text-sm leading-6"> Creater & Founder</div>
                        </div>
                    </figcaption>
                </div>
                <div>
                    <figcaption className="mt-6 flex items-center justify-center space-x-4 text-left">
                        <img src="/thanhtu.jpeg" alt="" className="w-14 h-14 rounded-full" loading="lazy" decoding="async" />
                        <div>
                            <div className="text-slate-900 font-semibold"> Thanh Tu </div>
                            <div className="mt-0.5 text-sm leading-6"> Creater & Founder</div>
                        </div>
                    </figcaption>
                </div>
            </div>
        </div>

        <div className="t3 bg-auto bg-no-repeat bg-pink-100 mt-8">
            <h1 className="font-bold text-2xl font-serif whitespace-pre-wrap"> Attractive Appearance </h1>

        </div>
    </div>
}

export default HomePage