import styled from 'styled-components'


function Back() {
    return(
        <BackTop>
            <a href='#top' className='back fs-13 navbar-brand'>
                <p className='backArrow'></p>
                <p>BACK</p>
                <p>TO</p>
                <p>TOP</p>
            </a>
        </BackTop>
    )
}

const BackTop = styled.div`
    .back{
        margin: auto;
        position: fixed ;
        right: 10px;
        bottom: 10px;
        line-height: 0;
        text-align: center;
        font-weight: 400;
        color: black;
    }
    .backArrow{
        display: block;
        width: 11px;
        height: 11px;
        margin: auto;
        border-top: 1.5px solid black;
        border-left: 1.5px solid black;
        transform: rotate(45deg);
        transition: transform 1s  ease;
        margin-bottom: 10px;
    }
` 
export default Back