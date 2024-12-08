import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import SwiperSlider from './components/gallery_swiperApp'
import VideoPlayer from './components/videoPlayerApp'
import FeedbackSlider from './components/feedbackSwiper'
import { QuestionListApp } from './components/questionsApp'
import ContactList from './components/contactInputOpen'
import MapComponent from './components/mapComponent'
import PopupList from './components/popupInputOpen'

import 'normalize.css'
import './index.css'



document.addEventListener('DOMContentLoaded', () => {
  const popupCloseButton = document.getElementById('popupCloseButton');
  const contactSection = document.getElementById('contacts');

  document.querySelectorAll('.button-popup, .button, .group__button').forEach(button => {
    button.addEventListener('click', () => {
      if (window.innerWidth <= 1000) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        popup.classList.remove('hidden');
      }
    });
  });

  const closePopup = () => {
    popup.classList.add('hidden');
  };

  const handleOutsideClick = (event) => {
    if (!event.target.closest('.popup__contact-form')) {
      closePopup();
    }
  };
 
  popupCloseButton.addEventListener('click', closePopup);
  popup.addEventListener('click', handleOutsideClick);
});


document.addEventListener('DOMContentLoaded', () => {

  const menuButton = document.querySelector('.menu__btn');
  const nav = document.querySelector('.nav');
  const sideMenu = document.getElementById('side__menu');

  menuButton.addEventListener('click', () => {
    nav.classList.toggle('menu__open');
    sideMenu.classList.toggle('side__menu-active');
  })
})




const galleryImages = [ 
'../images/gallery_1.jpg',
'../images/gallery_2.jpg', 
'../images/gallery_3.jpg', 
'../images/gallery_4.jpg', 
'../images/gallery_5.jpg', 
'../images/gallery_6.jpg', 
'../images/gallery_7.jpg', ];

ReactDOM.createRoot(document.getElementById('gallery')).render(
  <div className='gallery__content'>
    <h2 className='gallery__title'>Галерея</h2>
    <SwiperSlider images={galleryImages} />
  </div>
);


ReactDOM.createRoot(document.getElementById('videoSection')).render(
 <div className='videoSection__content'>
  <div className="flower flower--left"></div>
  <div className="flower flower--right"></div>

<div className="videoSection__text-container">
  <p className="videoSection__paragraph">Танцы, которые вдохновляют</p>
  <h2 className = 'videoSection__title'>Видео с наших занятий</h2>
    </div>
    <VideoPlayer />  
  </div>
);

ReactDOM.createRoot(document.getElementById('feedback')).render(
  <div className="feedback__content">
    <h2 className="feedback__title">Отзывы</h2>

    <FeedbackSlider/>
  </div>
);

ReactDOM.createRoot(document.getElementById('questions')).render(
    <QuestionListApp/>
);

ReactDOM.createRoot(document.getElementById('input__open-div')).render(
  <ContactList/>
);

ReactDOM.createRoot(document.getElementById('contacts__map-container')).render(
  <MapComponent/>
)

ReactDOM.createRoot(document.getElementById('popup__input-open-div')).render(
  <PopupList />
);


document.getElementById('sendPopupButton').addEventListener('click', () => {
  const name = document.getElementById('popup__name').value;
  const phone = document.getElementById('popup__phone').value;
  const email = document.getElementById('popup__email').value;
  const group = document.getElementById('hiddenGroupInput').value;
  const message = document.getElementById('popup__textarea').value;

  const groupId = '-4710526331' ;
  const token = '7748336423:AAHu2tr-FzGdWdccTk-gKnU2ZQrtQzjMyps' ;
  const text = `
  Новая заявка с сайта:
  Имя: ${name}
  Телефон: ${phone}
  Email: ${email}
  Группа: ${group}
  Сообщение: ${message}
  `;

  fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: groupId,
      text: text,
    }),
  })
    .then((response) => {
      if (response.ok) {
        alert(`Coобщение успешно отправлено!`);
        document.querySelector('.popup__form').reset();
      } else {
        return response.json().then((data) => {
          console.error('Ошибка от Telegram:', data);
          alert('Ошибка отправки сообщения: ' + (data.description || 'Неизвестная ошибка'));
        });
      }
    })
    .catch((error) => {
      console.error('Ошибка:', error);
      alert('Ошибка подключения к Telegram');
    });
});



document.getElementById('sendContactButton').addEventListener('click', () => {
  const name = document.getElementById('contacts__name').value;
  const phone = document.getElementById('contacts__phone').value;
  const email = document.getElementById('contacts__email').value;
  const group = document.getElementById('hiddenGroupInputContacts').value;
  const message = document.getElementById('contacts__textarea').value;

  const groupId = '-4710526331' ;
  const token = '7748336423:AAHu2tr-FzGdWdccTk-gKnU2ZQrtQzjMyps' ;
  const text = `
  Новая заявка с сайта:
  Имя: ${name}
  Телефон: ${phone}
  Email: ${email}
  Группа: ${group}
  Сообщение: ${message}
  `;

  fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: groupId,
      text: text,
    }),
  })
    .then((response) => {
      if (response.ok) {
        alert(`Coобщение успешно отправлено!`);
        document.querySelector('.popup__form').reset();
      } else {
        return response.json().then((data) => {
          console.error('Ошибка от Telegram:', data);
          alert('Ошибка отправки сообщения: ' + (data.description || 'Неизвестная ошибка'));
        });
      }
    })
    .catch((error) => {
      console.error('Ошибка:', error);
      alert('Ошибка подключения к Telegram');
    });
});