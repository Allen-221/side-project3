import styled from 'styled-components'
// import tShirt1  from "../img/t-shirt-4.jpg" 
// import tShirt2 from "../img/t-shirt-1.jpg"
import { useRef, useState} from 'react'

const Main = ()=>{

    let [toggle, setToggle] = useState("")
    let [change, setChange] = useState("row-cols-2")
    let [text, setText] = useState("新品上市")

    const submenuDom = useRef("")
    const col2 = useRef("")
    const col4 = useRef("")

    function open() {
        let dom = submenuDom.current;
        dom.style.maxHeight = dom.style.maxHeight? null : dom.scrollHeight + "px";
        setToggle(toggle === "" ? "arrowRotate" : "")
    }
    function changetext(e) {
        setText(e.target.innerHTML)
    }
    function col(e) {
        let colAction = e.target.dataset.id;
        colAction === "2" ? col2.current.classList.add("bg-grey"): col2.current.classList.remove("bg-grey")
        colAction === "4" ? col4.current.classList.add("bg-grey"): col4.current.classList.remove("bg-grey")
        setChange(colAction === "2" ? "row-cols-2" : "row-cols-4")
    }
    function imgChange(e) {
        const dom = e.target;
        const imgSrc = dom.dataset.src;
        if(!imgSrc) return;
        dom.parentNode.previousSibling.firstElementChild.src = `${imgSrc}`
    }
    return (
        <Content>
            <section className='container-fluid  px-1'>
                <div className='row m-0'>
                    <div className='col-12 col-lg-2'>
                        <ul className="nav flex-column sidebar fs-13">
                            <li className="nav-item">
                                <a className="navbar-brand w-100 d-block " href="#!" onClick={open}>精選優惠
                                    <i className={`arrow ${toggle}`}></i>
                                </a>
                                <ul className={`nav flex-column submenu `} ref={submenuDom}>
                                    <li className="nav-item menu">
                                       <a className="navbar-brand "  href="#!">舒適經典T．任選3件498</a>
                                    </li>
                                    <li className="nav-item menu">
                                       <a className="navbar-brand "  href="#!">男休閒印花T ⦁ 任選 3件 699</a>
                                    </li>
                                    <li className="nav-item menu">
                                       <a className="navbar-brand "  href="#!">男美式POLO衫 ⦁ 任選 2件 798</a>
                                    </li>
                                    <li className="nav-item menu">
                                       <a className="navbar-brand "  href="#!">男經典POLO衫 ⦁ 任選 2件 598</a>
                                    </li>
                                    <li className="nav-item menu">
                                       <a className="navbar-brand "  href="#!">男流行毛衣 ⦁ 任選 2件 698</a>
                                    </li>
                                    <li className="nav-item menu">
                                       <a className="navbar-brand "  href="#!">男經典厚T恤 ⦁ 任選 2件 898</a>
                                    </li>
                                </ul>
                            </li>
                           
                            <li className="nav-item">
                                <a className="navbar-brand" href="#!">精選限定優惠 ⦁ 任選 2件 6折</a>
                            </li>
                            <li className="nav-item">
                                <a className="navbar-brand" href="#!">零碼出清 ⦁ 任選3件4折</a>
                            </li>
                            <li className="nav-item">
                                <a className="navbar-brand" href="#!">涼感系列</a>
                            </li>
                            <li className="nav-item">
                                <a className="navbar-brand" href="#!">新品上市</a>
                            </li>
                            <li className="nav-item">
                                <a className="navbar-brand" href="#!">抗UV連帽外套單件399</a>
                            </li>
                        </ul>
                    </div>
                    <div className='col-12 col-lg-10 m-0'>
                        <div className='row'>
                            <div className='col-12 p-0 d-flex justify-content-end filter py-4'>
                                <div className='position-relative fs-12 '>
                                   <a href='#!' className='filterBtn navbar-brand' onClick={changetext}>{text}</a>
                                   <div className='overflow-auto filterAction' onClick={changetext}>
                                        <div className='d-block' onClick={changetext} >新品上市</div>
                                        <div className='d-block 'onClick={changetext} >熱銷排行</div>
                                        <div className='d-block 'onClick={changetext} >售價高到低</div>
                                        <div className='d-block 'onClick={changetext} >售價低到高</div>
                                   </div>
                                </div>
                                <div className='ms-15px bg-grey' data-id ={2} onClick={col} ref={col2}>
                                    <div className='square-sm d-inline-block' data-id ={2}></div>
                                    <div className='square-sm d-inline-block' data-id ={2}></div>
                                </div>  
                                <div className='ms-15px separate'></div>
                                <div className='ms-15px' data-id ={4} onClick={col} ref={col4}>
                                    <div className='square-sm d-inline-block' data-id ={4}></div>
                                    <div className='square-sm d-inline-block' data-id ={4}></div>
                                    <div className='square-sm d-inline-block' data-id ={4}></div>
                                    <div className='square-sm d-inline-block' data-id ={4}></div>
                                </div>
                            </div>
                        </div>
                        <div className={`row ${change} gy-5`}>
                            <div className='col'>
                                    <div className="fs-13">
                                        <a href='#!' className='w-100'><img src="img/t-shirt-3.jpg" className="card-img-top img-fluid w-100" alt="..."></img></a>
                                        <div className='my-1 text-center imgAction' onClick={imgChange}>
                                            <a  href='#!' className='square-m bg-black' data-src={"img/t-shirt-1.jpg"}> </a>
                                            <a  href='#!'className='square-m bg-red' data-src={"img/t-shirt-2.png"}> </a>
                                            <a  href='#!' className='square-m bg-blue' data-src={"img/t-shirt-5.jpg"}> </a>
                                        </div>
                                            <p className="m-0 text-center"><a href='#!' className='navbar-brand'>Regular Fit基本斜紋褲</a></p>
                                            <p className="m-0 text-center price">
                                                <span className='text-decoration-line-through'>NT.599</span>
                                                <span className='my-12px text-red'>NT.550</span>
                                            </p>
                                            <p className="m-0 text-center text-red">任選2件1100</p>
                                    </div>
                            </div>
                            <div className='col'>
                                    <div className="fs-13">
                                        <a href='#!'><img src="img/t-shirt-1.jpg" className="card-img-top img-fluid" alt="..."></img></a>
                                        <div className='my-1 text-center imgAction' onClick={imgChange}>
                                            <a  href='#!' className='square-m bg-black' data-src={"img/t-shirt-1.jpg"}> </a>
                                            <a  href='#!'className='square-m bg-red' data-src={"img/t-shirt-7.jpg"}> </a>
                                            <a  href='#!' className='square-m bg-blue' data-src={"img/t-shirt-6.jpg"}> </a>
                                        </div>
                                            <p className="m-0 text-center"><a href='#!' className='navbar-brand'>Regular Fit基本斜紋褲</a></p>
                                            <p className="m-0 text-center price">
                                                <span className='text-decoration-line-through'>NT.599</span>
                                                <span className='my-12px text-red'>NT.550</span>
                                            </p>
                                            <p className="m-0 text-center text-red">任選2件1100</p>
                                    </div>
                            </div>
                            <div className='col '>
                                    <div className="fs-13">
                                        <a href='#!'><img src="img/t-shirt-6.jpg" className="card-img-top img-fluid" alt="..."></img></a>
                                        <div className='my-1 text-center imgAction' onClick={imgChange}>
                                            <a  href='#!' className='square-m bg-black' data-src={"img/t-shirt-5.jpg"}> </a>
                                            <a  href='#!'className='square-m bg-red' data-src={"img/t-shirt-4.jpg"}> </a>
                                            <a  href='#!' className='square-m bg-blue' data-src={"img/t-shirt-3.jpg"}> </a>
                                        </div>
                                            <p className="m-0 text-center"><a href='#!' className='navbar-brand'>拼接印字寬版T恤</a></p>
                                            <p className="m-0 text-center price">
                                                <span>NT.359</span>
                                            </p>
                                    </div>
                            </div>
                            <div className='col '>
                                    <div className="fs-13">
                                        <a href='#!'><img src="img/t-shirt-2.png" className="card-img-top img-fluid" alt="..."></img></a>
                                        <div className='my-1 text-center imgAction' onClick={imgChange}>
                                            <a  href='#!' className='square-m bg-black' data-src={"img/t-shirt-1.jpg"}> </a>
                                            <a  href='#!'className='square-m bg-red' data-src={"img/t-shirt-8.jpg"}> </a>
                                            <a  href='#!' className='square-m bg-blue' data-src={"img/t-shirt-7.jpg"}> </a>
                                        </div>
                                            <p className="m-0 text-center"><a href='#!' className='navbar-brand'>Regular Fit百慕達多色短褲</a></p>
                                            <p className="m-0 text-center price">
                                                <span className='text-decoration-line-through'>NT.499</span>
                                                <span className='my-12px text-red'>NT.440</span>
                                            </p>
                                            <p className="m-0 text-center text-red">任選2件898</p>
                                    </div>
                            </div>
                            <div className='col '>
                                    <div className="fs-13">
                                       <a href='#!'><img src="img/t-shirt-6.jpg" className="card-img-top img-fluid" alt="..."></img></a>
                                        <div className='my-1 text-center imgAction' onClick={imgChange}>
                                            <a  href='#!' className='square-m bg-black' data-src={"img/t-shirt-5.jpg"}> </a>
                                            <a  href='#!'className='square-m bg-red' data-src={"img/t-shirt-4.jpg"}> </a>
                                            <a  href='#!' className='square-m bg-blue' data-src={"img/t-shirt-3.jpg"}> </a>
                                        </div>
                                            <p className="m-0 text-center"><a href='#!' className='navbar-brand'>Regular Fit百慕達短褲(附腰帶)</a></p>
                                            <p className="m-0 text-center price">
                                                <span className='text-decoration-line-through'>NT.499</span>
                                                <span className='my-12px text-red'>NT.449</span>
                                            </p>
                                            <p className="m-0 text-center text-red">任選2件 898</p>
                                    </div>
                            </div>
                            <div className='col '>
                                    <div className="fs-13">
                                        <a href='#!'><img src="img/t-shirt-2.png" className="card-img-top img-fluid" alt="..."></img></a>
                                        <div className='my-1 text-center imgAction' onClick={imgChange}>
                                            <a  href='#!' className='square-m bg-black' data-src={"img/t-shirt-1.jpg"}> </a>
                                            <a  href='#!'className='square-m bg-red' data-src={"img/t-shirt-8.jpg"}> </a>
                                            <a  href='#!' className='square-m bg-blue' data-src={"img/t-shirt-6.jpg"}> </a>
                                        </div>
                                            <p className="m-0 text-center"><a href='#!' className='navbar-brand'>英國國旗印花圓領T恤</a></p>
                                            <p className="m-0 text-center price">
                                                <span className='text-decoration-line-through'>NT.229</span>
                                                <span className='my-12px text-red'>NT.233</span>
                                            </p>
                                            <p className="m-0 text-center text-red">任選2件699</p>
                                    </div>
                            </div>
                            <div className='col '>
                                    <div className="fs-13">
                                        <a href='#!'><img src="img/t-shirt-3.jpg" className="card-img-top img-fluid" alt="..."></img></a>
                                        <div className='my-1 text-center imgAction' onClick={imgChange}>
                                            <a  href='#!' className='square-m bg-black' data-src={"img/t-shirt-4.jpg"}> </a>
                                            <a  href='#!'className='square-m bg-red' data-src={"img/t-shirt-3.jpg"}> </a>
                                            <a  href='#!' className='square-m bg-blue' data-src={"img/t-shirt-2.png"}> </a>
                                        </div>
                                            <p className="m-0 text-center"><a href='#!' className='navbar-brand'>潮流兔年圓領T恤</a></p>
                                            <p className="m-0 text-center price">
                                                <span className='text-decoration-line-through'>NT.350</span>
                                                <span className='my-12px text-red'>NT.299</span>
                                            </p>
                                            <p className="m-0 text-center text-red">任選2件598</p>
                                    </div>
                            </div>
                            <div className='col '>
                                    <div className="fs-13">
                                        <a href='#!'><img src="img/t-shirt-1.jpg" className="card-img-top img-fluid" alt="..."></img></a>
                                        <div className='my-1 text-center imgAction' onClick={imgChange} >
                                            <a  href='#!' className='square-m bg-black' data-src={"img/t-shirt-8.jpg"}> </a>
                                            <a  href='#!'className='square-m bg-red' data-src={"img/t-shirt-7.jpg"}> </a>
                                            <a  href='#!' className='square-m bg-blue' data-src={"img/t-shirt-6.jpg"}> </a>
                                        </div>
                                        <p className="m-0 text-center"><a href='#!' className='navbar-brand'>快乾網眼雙線POLO衫</a></p>
                                        <p className="m-0 text-center price">
                                            <span className='text-decoration-line-through'>NT.359</span>
                                            <span className='my-12px text-red'>NT.299</span>
                                        </p>
                                        <p className="m-0 text-center text-red">598</p>
                                    </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
        </Content>
    )
}
const Content = styled.div`
    .sidebar>li{
        border-top: 0.6px solid;
        line-height: 40px;
        font-weight: 700;
        white-space: normal;
    }
    .sidebar>li:last-child{
        border-bottom: 0.6px solid;
    }
    .submenu{
        max-height: 0px;
        overflow: hidden;
        transition: all 1s  ease;
        display: block;
    }
    .menu{
        font-size:12px;
        line-height: 26px;
        font-weight: 100;
        
    }
    .arrow {
        display: inline;
        float: right;
        margin-top: 15px;
        width: 11px;
        height: 11px;
        border-top: 2px solid #ccc;
        border-left: 2px solid #ccc;
        transform: rotate(135deg);
        transition: transform 1s  ease;
    }
    .arrowRotate{
        transform: rotate(225deg);
    }
    .filterBtn{
        width: 116px;
        line-height: 2;
        border: 1px solid #5b5b5b;
        padding: 0 15px;
        border-radius: 0;
        float: left;
    }
    .filterBtn::before{
        content:"";
        display: inline;
        float: right;
        margin-top: 8px;
        width: 8px;
        height: 8px;
        border-top: 3px solid #ccc;
        border-left: 3px solid #ccc;
        transform: rotate(135deg);
        transition: transform 1s  ease;
    }
    .filterBtn:focus::before, .filterBtn:active::before{
        content:"";
        transform: rotate(225deg);
    }
    .filterBtn:focus+div, .filterBtn:active+div{
        visibility: visible;
    }
    .filterAction{
        height: 96px;
        width: 116px;
        position: absolute;
        top: 24px;
        line-height: 2;
        border: 1px solid #5b5b5b;
        border-top: 0px;
        border-radius: 0;
        float: left;
        z-index: 9;
        visibility: hidden;
        transition: visibility 0.3s;
    }
    
    .filterAction>div{
        padding: 0 12px;
        background-color: white;
    }
    .filterAction>div:hover{
        background-color: #5b5b5b;
        color: white;
    }
    .square-sm{
        background-color: #f3f3f3;
        width: 10px;
        height: 13px;
        margin-left: 1px;
    }
    .ms-15px{
        margin-left: 15px;
    }
    .bg-grey>div{
        background-color: #868686;
    }
    .separate{
        width: 1px;
        border: 0.5px solid #868686;
    }
    .square-m{
        display: inline-block;
        width: 16px;
        height: 16px;
        margin: 0 1px;
    }
    .price>span{
        color: #868686;
        padding: 1px 0;
        line-height: 20px;
        font-weight: 400;
    }
    .imgAction>a:focus, .imgAction>a:active{
        box-shadow: 0px 0px 0px 1.5px rgba(0,0,0, .5);
    }
`
export default Main