import '../CSS/main.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';

function Section04() {
  return (
    <section className='section04'>
      {/* 상단부분 */}
      <div className='section04-title'>
        <p>브랜드 소개</p>
        <p>소비자의 건강한<br/>일상에 함께합니다</p>
        <div className='closeclose'>
          <div className='close'>
            자세히 보기
            <div className="brand-line" />
          </div>
        </div>
      </div>
      {/* 메인부분 */}
      <div className='section04-brand-area'>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        // navigation={{
        //   nextEl: '.swiper-button-next-next',
        //   prevEl: '.swiper-button-prev-prev'
        // }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        >
        <SwiperSlide className='abcde'>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
        {/* <div className="brand-pagination">
          <div className='swiper-button-prev-prev'></div>
            <span>01</span>
            <span>|</span>
            <span>05</span>
          <div className='swiper-button-next-next'></div>
        </div> */}
      </div>
      {/* 하단 페이지네이션 */}
      
    </section>
  );
}

export default Section04;