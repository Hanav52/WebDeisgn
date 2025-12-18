import '../CSS/main.css'
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// const swiper = new Swiper('.swiper', {
//   navigation: {
//           nextEl: '.swiper-button next',
//           prevEl: '.swiper-button prev'
//         }
// })

function Section01() {
  return (
    <Swiper
      slidesPerView={1}
      loop={true}
      navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide className='slide01'>
        <div className='section01'/>
        <div className='section01-text'>
          <div className='section01-text-01'>No.1</div>
          <div className='section01-text-03'>Trusted</div>
          <div className='section01-text-04'>HealthHeritage</div>
          <div className='section01-text-02'>당신의 일상을 지켜온 120년 전통의 건강 파트너<br />세대를 넘어 이어진 신뢰로 더 나은 내일을 만듭니다.</div>
        </div>
        {/* <button className='swiper-button-prev'></button>
        <button className='swiper-button-next'></button> */}

        <div className='section01-scroll'>
          <div className='scroll-01'>↓</div>
          <div>SCROLL</div>
        </div>
      </SwiperSlide>
      <SwiperSlide>2</SwiperSlide>
      <SwiperSlide>3</SwiperSlide>
    </Swiper>
  );
}

export default Section01;
