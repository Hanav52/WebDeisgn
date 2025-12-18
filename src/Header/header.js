import '../CSS/main.css'
import menu from '../기타파일/menu.png'
import globe from '../기타파일/globe.png'

function Header() {
  return (
    <header className='head'>
      <div className="flex head-container">
        <div className="head-brandlogo">
        </div>
        <div className="head-brand">
          <div className='head-gnb'>
            <a href='#'>회사소개</a>
            <a href='#'>브랜드</a>
            <a href='#'>R&D</a>
            <a href='#'>정도경영</a>
            <a href='#'>뉴스룸</a>
            <a href='#'>인재채용</a>
            <a href='#'>고객지원</a>
          </div>
        </div>
        <div className='head-last'>
          <form className="head-search">
            <input type="search" placeholder="Search" aria-label="검색">
            </input>
          </form>
          <div className='head-hamburger'>
            <a>
              <img src={globe}/>
            </a>
            <a>
              <img src={menu}/>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
