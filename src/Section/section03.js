import '../CSS/main.css'
import section033 from './section033.mp4'


function mouseenterHandler() {
    document.getElementById("message").textContent = "마우스 커서가 진입하였습니다";
  }

function Section03() {
  return (
    <section className='section03'>
      <video className="video" autoPlay muted loop>
        <source src={section033} type="video/mp4"/>
      </video>


      
    </section>
  );
}

export default Section03;


{/* 출처: https://uiweb.tistory.com/170 [찐망고'S 퍼블리싱그리고디자인:티스토리]
[출처] html5 비디오 삽입,재생 (백그라운드 동영상자동재생)|작성자 작은악마 */}
