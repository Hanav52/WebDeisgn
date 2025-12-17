import '../CSS/main.css'
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

function Section01() {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide className='slide01'>
        <div className='section01' />
        <div className='section01-text'>
          <div className='section01-text-01'>No.1<br />Trusted<br />HealthHeritage</div>
          <div className='section01-text-02'>당신의 일상을 지켜온 120년 전통의 건강 파트너<br />세대를 넘어 이어진 신뢰로 더 나은 내일을 만듭니다.</div>
        </div>

        {/* <button className='section01-slide-btn prev'>prev</button>
        <button className='section01-slide-btn next'>next</button> */}

        <div className='section01-scroll'>
          <div className='scroll-01'>↓</div>
          <div>SCROLL</div>
        </div>
      </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide>
    </Swiper>
  );
}

export default Section01;
