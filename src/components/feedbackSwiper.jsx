import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css';
import '../feedbackSwiper.css'

const FeedbackSlider = () => {

const feedbackInformation = [
  {img: '/images/feedback__photo-1.png' ,
   name: 'Таня',
   text: ' Твое преподавание очень грамотное, эффективное и привлекательное. Ты - мотиватор!!! Как и в плане обучения и стремления к новому, как и в плане стремления к бомбической фигуре, а главное - в плане отношения к миру! Ты излучаешь такой свет и энергию с тебя хочется брать пример',
  },
  
  {img: '/images/feedback__photo-2.png' ,
   name: 'Наташа',
   text: 'Очень понравился курс, хочется учиться новым элементам и совершенствовать навыки! Нравится чувствовать себя женственной, а то в ежедневной суете совсем забываем о себе!',
  },

  {img: '/images/feedback__photo-3.png' ,
   name: 'Хеля',
    text: 'Сначала я пришла в танцы от того, что испытывала недостаток движения из-за сидячей работы. Но, придя к Оле, я почувствовала, что танец - это не только физическая активность (которой мне так хотелось), танец - это еще и про глубину и чуткость, трансляцию добра и женственности.У Оли не просто про бачату, у нее тонко, душевно и вдохновляюще!',
  },
  
  {img: '/images/feedback__photo-4.png',
   name: 'Саша',
    text: 'Я поняла, что в зал я ходить не буду, самостоятельно заниматься тоже вряд ли. Но идея с танцами меня так увлекла, что я решилась)) Что я получила? Во-первых, я сама с удовольствием бегу на танцы - это для меня удивительно! Во-вторых и самое главное для меня - осанка. Я выпрямилась! И еще один неожиданный бонус - это люди! Которые становятся близкими и родными!',
  },

]

return(
  <div className='feedback__container'>
  <Swiper
  modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
  navigation
  slidesPerView={3}
  initialSlide={0}
  spaceBetween={50}
  loop={true}
  autoplay={{
    delay: 5000,
    disableOnInteraction: false,
  }}
  speed={8000}
      breakpoints={{
        1024: { 
          slidesPerView: 3,
          spaceBetween: 50,
        },
        768: { 
          slidesPerView: 2,
          spaceBetween: 30,
        },
        510: { 
          slidesPerView: 2,
          spaceBetween: 30,
        },
        480: { 
          slidesPerView: 1,
          spaceBetween: 20,
        },
        100: { 
          slidesPerView: 1,
          spaceBetween: 20,
        },
      }}
  >
    {feedbackInformation.map((feedback, index) =>(
      <SwiperSlide key={index}>
        <div className="feedback__head-info">
        <img src={feedback.img} alt={feedback.name}
        className="feedback-slide__img"/>
        <h3 className="feedback-slide__name">{feedback.name}</h3>
        </div>

        <div className="feedback__text-container">
          <div className="feedback__decorative-line"></div>
          <p className="feedback-slide__text">{feedback.text}</p>
        </div>
      </SwiperSlide>
    ) 
    )}
  </Swiper>
  </div>
)

;
} 

export default FeedbackSlider