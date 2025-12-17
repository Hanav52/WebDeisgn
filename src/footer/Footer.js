import '../CSS/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">동화약품</div>

        <ul className="footer-links">
          <li>Family Site <span>▲</span></li>
          <li>Brand Site <span>▲</span></li>
          <li>동화약품 SNS <span>▲</span></li>
        </ul>
      </div>

      <div className="footer-line" />

      <div className="footer-info">
        <p>서울특별시 중구 서소문로9길 20 &nbsp; | &nbsp; Tel : 02-2021-9300</p>
        <p>대표이사 : 유준하, 윤인호 &nbsp; | &nbsp; 사업자등록번호 : 110-81-00102</p>
        <p className="copyright">
          COPYRIGHT DONGWHA PHARMACEUTICAL CO., LTD. ALL RIGHT RESERVED.
        </p>
      </div>

      <div className="footer-bottom">
        <ul className="footer-policy">
          <li>사이트 이용 약관</li>
          <li>|</li>
          <li>법적 고지 안내</li>
          <li>|</li>
          <li>개인 정보 처리 방침</li>
          <li>|</li>
          <li>이메일 무단 수집 거부</li>
        </ul>

        <div className="footer-badges">
          <div className="badge badge-cp">CP AA</div>
          <div className="badge badge-family">가족친화</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
