import styled from 'styled-components'

    function Foot() {
        
        return (
            <Footer className='container-fluid p-0 mt-5'>
               <div className='bg row  pt-75px pb-45px'>
                    <div className='col-12 col-sm-6 d-flex fs-14 justify-content-evenly mb-4'>
                         <nav className="nav flex-column footnav">
                            <a className="nav-link p-0 text-white mb-5px" href="#!">關於NET</a>
                            <a className="nav-link p-0" href="#!">品牌故事</a>
                            <a className="nav-link p-0" href="#!">門市據點</a>
                            <a className="nav-link p-0" href="#!">人才招募</a>
                        </nav>
                        <nav className="nav flex-column footnav">
                            <a className="nav-link p-0 text-white mb-5px" href="#!">購物須知</a>
                            <a className="nav-link p-0" href="#!">訂購流程</a>
                            <a className="nav-link p-0" href="#!">十天鑑賞期</a>
                            <a className="nav-link p-0" href="#!">全台商品修改</a>
                        </nav>
                        <nav className="nav flex-column footnav">
                            <a className="nav-link p-0 text-white mb-5px" href="#!">會員服務</a>
                            <a className="nav-link p-0" href="#!">會員中心</a>
                            <a className="nav-link p-0" href="#!">客服中心</a>
                        </nav>
                        <nav className="nav flex-column footnav">
                            <a className="nav-link p-0 text-white mb-5px" href="#!">聲明條款</a>
                            <a className="nav-link p-0" href="#!">隱私權保護</a>
                            <a className="nav-link p-0" href="#!">政令宣導</a>
                            <a className="nav-link p-0" href="#!">工作條款</a>
                        </nav>
                    </div>
                    <div className='col-12 col-sm-6 d-flex fs-14  justify-content-evenly text-white'>
                        <div>
                            <p className='h6'>NEWSLETTER</p>
                            <input className="footInput" type="text" placeholder='輸入 E-mail'></input>  
                            <button className='footBtn'>訂閱</button>
                        </div>
                        <div>
                            <p className='h6'>FOLLOW US ON</p>
                            <div>
                                <a href='#!'><i className="bi bi-facebook footIcon"></i></a>
                                <a href='#!'><i className="bi bi-instagram footIcon"></i></a>
                                <a href='#!'><i className="bi bi-line footIcon"></i></a>
                            </div>
                        </div>
                    </div>
               </div>
            </Footer>
        )
}

const Footer = styled.footer`
    .bg{
        background-color: #868686;
    }
    .footnav>a{
        line-height: 25px;
        color: white;
        transition: color 1s  ease;
    }
    .footnav>a:hover{
        color: black;
    }
    .footInput{
        width: 240px;
        height: 37px;
        padding: 0 5px;
        outline: none;
        border: 1px solid white;
        margin-top: 16px;
        background-color: #868686;
        color: white;
    }
    .footIcon{       
        color: white;
        margin-left: 15px;
        font-size: 32px;
    }
    .footBtn{
        width: 75px;
        height: 37px;
        text-align: center;
        line-height: 2;
        border: 1px solid white;
        background-color: transparent;
        color: white;
        transition: all 1s ease;
    }
    .footBtn:hover{
        background-color: white;
        color: black;
    }
    input::placeholder {
         color: white;
    }
    @media screen {
        
    }
`
export default Foot