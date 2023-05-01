import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { data } from "autoprefixer";
import axios from "axios";
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";

const ShopPage = () => {
    const [cat, setCategory] = useState([])
    const [pro, setProduct] = useState([])

    ////////////////////////////////////////////////////////////////////////////////
    const [s, setS] = useState("") //gtri nhap vao khung search

    const [catid, setCatid] = useState() //tao mang cac thuoc tinh cat cua cac pro trong BE

    const [sort, setSort] = useState("none");

    //////////////////////////////////////////////////////////////////////



    //////////////////////////////////////////////////////////////////////
    let dataRender = []
    //////////////////search trong tat ca pro//////////////////////////
    // dataRender = pro.filter(item => {
    //     const titleUppercase = item.title.toUpperCase();
    //     const searchUpercase = s.toUpperCase();
    //     return titleUppercase.includes(searchUpercase);
    // })

    ///////////////////////loc san pham theo catgory///////////////////////////
    // if (catid)
    //     dataRender = pro.filter(item => {
    //         const arrayCat = item.category;
    //         const checkExist = arrayCat.find((element) => { return element.flower_category_id == catid; });
    //         return checkExist;
    //     })
    // else {
    //     dataRender = pro;
    // };

    // /////////////tim kiem san pham theo category//////////////////////////////
    // if (catid)
    //     dataRender = pro.filter(item => {
    //         const arrayCat = item.category;
    //         const checkExist = arrayCat.find((element) => { return element.flower_category_id == catid; });

    //         const titleUppercase = item.title.toUpperCase();
    //         const searchUpercase = s.toUpperCase();
    //         const searchTitle = titleUppercase.includes(searchUpercase);

    //         return checkExist && searchTitle;
    //     })
    // else {
    //     dataRender = pro.filter(item => {
    //         const titleUppercase = item.title.toUpperCase();
    //         const searchUppercase = s.toUpperCase();
    //         return titleUppercase.includes(searchUppercase);
    //     })
    // };

    /////////////////////sort san pham theo gia///////////////////

    // const highesttolowest = ((a,b)=> {
    //     if (a.price > b.price) return -1;
    //     else if (a.price < b.price) return 1;
    //     else return 0;
    // })
    // dataRender = pro.sort(highesttolowest);

    // const lowesttohighest = ((a,b)=> {
    //     if (a.price < b.price) return -1;
    //     else if (a.price > b.price) return 1;
    //     else return 0;
    // })
    // dataRender = pro.sort(lowesttohighest);


    /////////////////////sort san pham theo chu cai A-Z///////////////////
    // const fromatoz = ((a,b)=> {
    //     if (a.title < b.title) return -1;
    //     else if (a.title > b.title) return 1;
    //     else return 0;
    // })
    // dataRender = pro.sort(fromatoz);

    // const fromztoa = ((a,b)=> {
    //     if (a.title > b.title) return -1;
    //     else if (a.title < b.title) return 1;
    //     else return 0;
    // })
    // dataRender = pro.sort(fromztoa);


    /////////////////////sort san pham theo thoi gian: moi nhat/ cu nhat///////////////////
    // const newesttooldest = ((a, b) => { 
    //     return new Date(b.date_created) - new Date(a.date_created);
    // })
    // dataRender = pro.sort(newesttooldest);

    // const oldesttonewest = ((a, b) => {
    //     return new Date(a.date_created) - new Date(b.date_created);
    // })
    // dataRender = pro.sort(oldesttonewest);


    ////////////////////////////  SORT  //////////////////////////////////////////

    switch (sort) {
        ///////////// ALPHABET: A-Z //////////////////////////
        case 'fromatoz':

            dataRender = pro.sort((a, b) => {
                if (a.title < b.title) return -1;
                else if (a.title > b.title) return 1;
                else return 0;
            });

            if (catid)
                dataRender = pro.filter(item => {
                    const arrayCat = item.category;
                    const checkExist = arrayCat.find((element) => { return element.flower_category_id == catid; });

                    const titleUppercase = item.title.toUpperCase();
                    const searchUpercase = s.toUpperCase();
                    const searchTitle = titleUppercase.includes(searchUpercase);

                    return checkExist && searchTitle;
                })
            else {
                dataRender = pro.filter(item => {
                    const titleUppercase = item.title.toUpperCase();
                    const searchUppercase = s.toUpperCase();
                    return titleUppercase.includes(searchUppercase);
                })
            };

            break;

        /////////////// ALPHABET: Z-A ////////////////////////
        case 'fromztoa':

            dataRender = pro.sort((a, b) => {
                if (a.title > b.title) return -1;
                else if (a.title < b.title) return 1;
                else return 0;
            });

            if (catid)
                dataRender = pro.filter(item => {
                    const arrayCat = item.category;
                    const checkExist = arrayCat.find((element) => { return element.flower_category_id == catid; });

                    const titleUppercase = item.title.toUpperCase();
                    const searchUpercase = s.toUpperCase();
                    const searchTitle = titleUppercase.includes(searchUpercase);

                    return checkExist && searchTitle;
                })
            else {
                dataRender = pro.filter(item => {
                    const titleUppercase = item.title.toUpperCase();
                    const searchUppercase = s.toUpperCase();
                    return titleUppercase.includes(searchUppercase);
                })
            };

            break;

        /////////////// PRICE: HIGHEST - LOWEST ////////////////////////
        case 'highesttolowest':

            dataRender = pro.sort((a, b) => {
                if (a.price > b.price) return -1;
                else if (a.price < b.price) return 1;
                else return 0;
            });

            if (catid)
                dataRender = pro.filter(item => {
                    const arrayCat = item.category;
                    const checkExist = arrayCat.find((element) => { return element.flower_category_id == catid; });

                    const titleUppercase = item.title.toUpperCase();
                    const searchUpercase = s.toUpperCase();
                    const searchTitle = titleUppercase.includes(searchUpercase);

                    return checkExist && searchTitle;
                })
            else {
                dataRender = pro.filter(item => {
                    const titleUppercase = item.title.toUpperCase();
                    const searchUppercase = s.toUpperCase();
                    return titleUppercase.includes(searchUppercase);
                })
            };

            break;

        ///////////////// PRICE: LOWEST - HIGHEST //////////////////////
        case 'lowesttohighest':

            dataRender = pro.sort((a, b) => {
                if (a.price < b.price) return -1;
                else if (a.price > b.price) return 1;
                else return 0;
            });

            if (catid)
                dataRender = pro.filter(item => {
                    const arrayCat = item.category;
                    const checkExist = arrayCat.find((element) => { return element.flower_category_id == catid; });

                    const titleUppercase = item.title.toUpperCase();
                    const searchUpercase = s.toUpperCase();
                    const searchTitle = titleUppercase.includes(searchUpercase);

                    return checkExist && searchTitle;
                })
            else {
                dataRender = pro.filter(item => {
                    const titleUppercase = item.title.toUpperCase();
                    const searchUppercase = s.toUpperCase();
                    return titleUppercase.includes(searchUppercase);
                })
            };

            break;

        ///////////////// DATE: OLDEST - NEWEST //////////////////////
        case 'oldesttonewest':

            dataRender = pro.sort((a, b) => {
                return new Date(a.date_created) - new Date(b.date_created);
            });

            if (catid)
                dataRender = pro.filter(item => {
                    const arrayCat = item.category;
                    const checkExist = arrayCat.find((element) => { return element.flower_category_id == catid; });

                    const titleUppercase = item.title.toUpperCase();
                    const searchUpercase = s.toUpperCase();
                    const searchTitle = titleUppercase.includes(searchUpercase);

                    return checkExist && searchTitle;
                })
            else {
                dataRender = pro.filter(item => {
                    const titleUppercase = item.title.toUpperCase();
                    const searchUppercase = s.toUpperCase();
                    return titleUppercase.includes(searchUppercase);
                })
            };

            break;

        /////////////////// DATE: NEWEST - OLDEST ////////////////////
        case 'newesttooldest':

            dataRender = pro.sort((a, b) => {
                return new Date(b.date_created) - new Date(a.date_created);
            });

            if (catid)
                dataRender = pro.filter(item => {
                    const arrayCat = item.category;
                    const checkExist = arrayCat.find((element) => { return element.flower_category_id == catid; });

                    const titleUppercase = item.title.toUpperCase();
                    const searchUpercase = s.toUpperCase();
                    const searchTitle = titleUppercase.includes(searchUpercase);

                    return checkExist && searchTitle;
                })
            else {
                dataRender = pro.filter(item => {
                    const titleUppercase = item.title.toUpperCase();
                    const searchUppercase = s.toUpperCase();
                    return titleUppercase.includes(searchUppercase);
                })
            };

            break;

        /////////////////// DEFAULT NON SORT ////////////////////
        case 'none':

            dataRender = pro;

            if (catid)
                dataRender = pro.filter(item => {
                    const arrayCat = item.category;
                    const checkExist = arrayCat.find((element) => { return element.flower_category_id == catid; });

                    const titleUppercase = item.title.toUpperCase();
                    const searchUpercase = s.toUpperCase();
                    const searchTitle = titleUppercase.includes(searchUpercase);

                    return checkExist && searchTitle;
                })

            else {
                dataRender = pro.filter(item => {
                    const titleUppercase = item.title.toUpperCase();
                    const searchUppercase = s.toUpperCase();
                    return titleUppercase.includes(searchUppercase);
                })
            };

            break;
    };

    ///////////////////////////CONSOLE/////////////////////////////////////////////////////

    console.log(dataRender);
    console.log(sort);
    console.log(s);

    ///////////////////////////API////////////////////////////////////////////////////////

    useEffect(() => {
        axios.get(`https://admin.qnsport.vn/items/flower_category`)
            .then(res => {
                const cat = res.data?.data;
                setCategory(cat);
            })
            .catch(error => console.log(error));
        axios.get(`https://admin.qnsport.vn/items/flower?fields=*,category.*`)
            .then(res => {
                const pro = res.data?.data;
                setProduct(pro);
            })
            .catch(error => console.log(error))
    }, [])

    ///////////////////////chay 1 lan k sua///////////////////////////////////////

    return <div>
        <b className="bg-gray-300 inline-flex w-full h-[40px] text-base pl-4 font-extralight pt-2 mt-0"> HOME <ChevronRightIcon className="h-4 w-4 mt-1" /> SHOP </b>

        <div className="flex flex-row">
            <div className="basis-1/8 min-w-[200px] px-3 bg-gray-200 pt-2 text-gray-600 text-xl">
                <button className="text-2xl text-gray-600 mt-2" onClick={() => { setCatid(null) }}>Categories</button>
                {cat.map(element => {
                    return <div className="hover:-translate-y-1 mt-3 bg-white-200 hover:text-black-900 hover:font-bold hover:text-slate-600 duration-300 text-lg border border-b-gray-400" onClick={() => setCatid(element.id)}> {element?.title}</div>
                })}
            </div>

            <div className="basis-7/8 px-3 py-3 bg-gray-200" >

                <div> <div className="flex">

                    <div className="flex-none block w-1/7 p-2 mr-8 text-sm text-gray-400 bg-white border border-gray-300 rounded-lg focus:ring-blue-200 focus:border-blue-200">
                        <select type="opts" className="bg-white" onChange={(e) => setSort(e.target.value)}>
                            <option value="none"> (None) </option>
                            <option value="newesttooldest"> Newest to Oldest </option>
                            <option value="oldesttonewest">Oldest to Newest</option>
                            <option value="lowesttohighest">Lowest to highest </option>
                            <option value="highesttolowest">Highest to lowest</option>
                            <option value="fromatoz">A - Z </option>
                            <option value="fromztoa">Z - A</option>
                        </select>

                    </div>
                    <div className="flex-1 w-64">
                        <input type="search" className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-200 focus:border-blue-200 " placeholder="Search" onChange={(e) => setS(e.target.value)} required />
                    </div>
                </div>
                </div>

                <div className="h-59 grid grid-cols-5 gap-4 content-center my-3">

                    {dataRender.map((element) => {
                        return <div>
                            <img src={"https://admin.qnsport.vn/assets/" + element.thumbnail} className="w-[300px] h-[250px]" alt="" />
                            <div> </div>
                            <div className="flex flex-wrap text-base">
                                <Link to={"/product/" + element.id} className="text-gray-600 font-bold">
                                    {element.title}
                                </Link>
                            </div>
                            <div className="text-red-900 font-sans"> {new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'VND' }).format(element.price)} </div>

                            <div className="flex flex-wrap">

                            </div>

                        </div>
                    })}
                </div> </div>

        </div>

    </div >

}

export default ShopPage



