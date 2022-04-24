import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isConfirmAvatarPopupOpen, setIsConfirmAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState('');
  
  
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  };

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  };

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  };

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsConfirmAvatarPopupOpen(false);
    setSelectedCard('');
  }


  return (
    <div className="App root">
      <Header/>

      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
       />

      <Footer/>

      <PopupWithForm
        title={'Обновить аватар'}
        name={'newAvatar-popup'}
        children={
          <div className="form__wrap">
            <input
              className="form__input"
              id="avatarLink-input"
              type="url"
              name="inputAvatarLink"
              placeholder="Ссылка на ваш аватар"
              required/>
            <span className="form__input-error avatarLink-input-error"></span>
          </div>
        }
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      />

      <PopupWithForm
        title={'Редактировать профиль'}
        name={'profile-popup'}
        children={
          <>
            <div className="form__wrap">
              <input
                className="form__input"
                id="name-input"
                type="text"
                name="inputName"
                defaultValue="1"
                placeholder="Ваше имя"
                minLength="2"
                maxLength="40"
                required/>
              <span className="form__input-error name-input-error"></span>
            </div>
            <div className="form__wrap">
              <input
                className="form__input"
                id="occupation-input"
                type="text"
                name="inputOccupation"
                defaultValue="2"
                placeholder="Род занятий"
                minLength="2"
                maxLength="200"
                required/>
              <span className="form__input-error occupation-input-error"></span>
            </div>
          </>
        }
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      />

<PopupWithForm
        title={'Новое место'}
        name={'elements-popup'}
        children={
          <>
            <div className="form__wrap">
              <input 
                className="form__input"
                id="title-input"
                type="text"
                name="inputElementTitle"
                placeholder="Название"
                minLength="2"
                maxLength="30"
                required/>
              <span className="form__input-error title-input-error"></span>
            </div>
            <div className="form__wrap">
              <input
                className="form__input"
                id="link-input"
                type="url"
                name="inputElementLink"
                placeholder="Ссылка на картинку"
                required/>
              <span className="form__input-error link-input-error"></span>
            </div>
          </>
        }
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      />

      <PopupWithForm
        title={'Вы уверены?'}
        name={'confirm-popup'}
        children={
          <h2 className="popup__title popup__title_content_confirm">Вы уверены?</h2>
        }
        isOpen={isConfirmAvatarPopupOpen}
        onClose={closeAllPopups}
      />

      <ImagePopup
        selectedCard={selectedCard}
        onClose={closeAllPopups}
      />

    </div>
  );
}

export default App;