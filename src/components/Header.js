import styled from 'styled-components'
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React from 'react'
 const Foot = (props)=>{
    return (
         <Header>
            <div className="container-fluid pt-3 px-1 top">
               <div className='row m-0 text-primary'>
                    <div className='col-12 col-lg-5 order-1 p-0 d-lg-flex'>
                        <nav className="fs-13 ">
                            <a className="navbar-brand px-1" href="#!" >NET</a>
                            <a className="navbar-brand px-1" href="#!" >團購</a>
                            <a className="navbar-brand px-1" href="#!" >庫存查詢</a>
                            <a className="navbar-brand px-1" href="#!" >門市據點</a>
                            <a className="navbar-brand px-1" href="#!" >Q&A</a>
                        </nav>
                    </div>
                    <div className='col-12 col-lg-2 order-3 order-lg-2 text-center'>
                        <nav>
                            <a className="navbar-brand px-1 logo" href="#!" >NET</a>
                        </nav>
                    </div>
                    <div className='col-12 col-lg-5 order-2 order-sm-3 p-0'>
                        <nav className="d-flex justify-content-end">
                            <input type="text" className='headerInput me-1 fs-13' placeholder='  輸入關鍵字或5碼貨號'></input>
                            {/* <i class="bi bi-search"></i> */}
                            <a className="navbar-brand px-1 " href="#!" ><i className="bi bi-person headerIcon "></i></a>
                            <a className="navbar-brand px-1 d-inline-block me-2" href="#!" ><i className="bi bi-bag-check headerIcon"></i></a>
                        </nav>
                    </div>
               </div>
               <div className='row  text-primary justify-content-center py-4'>
                    <div className="col-auto px-4 headerAnimation text-center">
                        <a className=" navbar-brand d-block  " href="#!" >WOMEN</a>
                        <a className=" navbar-brand d-block " href="#!" >女裝</a>
                    </div>
                    <div className="col-auto px-4 headerAnimation text-center">                       
                        <a className="navbar-brand d-block " href="#!" >MEN</a>
                        <a className=" navbar-brand d-block " href="#!" >男裝</a>
                    </div>
                    <div className="col-auto px-4 headerAnimation text-center">
                        <a className="navbar-brand d-block " href="#!" >KIDS</a>
                        <a className=" navbar-brand d-block " href="#!" >童裝</a>
                    </div>
                    <div className="col-auto px-4 headerAnimation text-center">
                        <a className="navbar-brand d-block  " href="#!" >BABY</a>
                        <a className="navbar-brand d-block  " href="#!" >嬰兒</a>
                    </div>
                    <div className="col-auto px-4 headerAnimation text-center">
                        <a className="navbar-brand d-block " href="#!" >SALE</a>
                        <a className="navbar-brand d-block  " href="#!" >促銷</a>
                    </div>
                    <div className="col-auto px-4 headerAnimation text-center">                      
                        <a className="navbar-brand d-block" href="#!" >EDIT</a>
                        <a className="navbar-brand d-block" href="#!" >特輯</a>
                    </div>
                    <div className="col-auto px-4 headerAnimation text-center">  
                        <a className="navbar-brand d-block" href="#!" >NET LIFE</a>
                        <a className="navbar-brand d-block" href="#!" >NET LIFE</a>
                    </div>
               </div>
            </div>
         </Header>
    )
}
const Header = styled.div`
   .headerIcon{
        font-size: 27px;
}
    .headerInput{
        border: none;
        border-bottom:  1px solid;
        outline: none;
        width: 200px;
        height: 28px;
    }
    .logo{
        font-size: 60px;
        font-weight: 1000;
        line-height: 1;
}
    .headerAnimation{
        overflow: hidden;
        height:25px;
    }
    .headerAnimation>a{
        transform:translateY(0);
        transition: transform 1s  ease;
    }
    .headerAnimation:hover>a{
        transition: transform 1s  ease;
        transform:translateY(-100%);
    }
`
export default Foot;