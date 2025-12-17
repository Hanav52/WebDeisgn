import Footer from "./Footer";



function Nav () {
    return(
    <div className="head-container">
        <div className="head-brand">
            <button class="btn" onclick="alert('안녕하세요.')">안산그린컴퓨터</button>
        </div>
        <Footer/>
    </div>
    )
}

// JS로 구현 시 Node.js가 필요;;

// 방법 1. html로 구현해서 css를 가져온다.