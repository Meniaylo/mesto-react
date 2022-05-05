import React, { useState, useEffect } from "react";
import api from "../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";

function App() {
  const [currentUser, setCurrentUser] = useState({});

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isConfirmAvatarPopupOpen, setIsConfirmAvatarPopupOpen] =
    useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  useEffect(() => {
    api
      .getUserInfo()
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((err) => {
        console.log(`Ошибка! ${err}`);
      });
  }, []);

  // useEffect(() => {
  //   Promise.all([api.getUserInfo(), api.getInitialCards()])
  //     .then(([data, initialCards]) => {
  //       // setCurrentUser({
  //       //   name: data.name,
  //       //   description: data.about,
  //       //   avatarUrl: data.avatar,
  //       // });
  //       setCurrentUser({data});
  //       console.log(currentUser);
  //       console.log(data);
  //       console.log(initialCards);

  //         // setUserName(data.name);
  //         // setUserDescription(data.about);
  //         // setUserAvatar(data.avatar);

  //         // setCards(initialCards);
  //       })
  //     .catch((err) => {
  //       console.log(`Ошибка! ${err}`);
  //     })
  // }, []);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleUpdateUser({ name, about }) {
      api.setUserInfo({ name, about })
      .then((data) => {
        setCurrentUser(data)
        closeAllPopups()
      })
      .catch((err) => {
        console.log(`Ошибка! ${err}`);
      })
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsConfirmAvatarPopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="App root">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />

        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />

        <Footer />

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        ></EditProfilePopup>

        <PopupWithForm
          title={"Обновить аватар"}
          name={"newAvatar-popup"}
          buttonText={"Сохранить"}
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          // onSubmit={'НАДО ВСТАВИТЬ'}
        >
          <div className="form__wrap">
            <input
              className="form__input"
              id="avatarLink-input"
              type="url"
              name="inputAvatarLink"
              placeholder="Ссылка на ваш аватар"
              required
            />
            <span className="form__input-error avatarLink-input-error"></span>
          </div>
        </PopupWithForm>

        <PopupWithForm
          title={"Новое место"}
          name={"elements-popup"}
          buttonText={"Сохранить"}
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          // onSubmit={'НАДО ВСТАВИТЬ'}
        >
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
                required
              />
              <span className="form__input-error title-input-error"></span>
            </div>
            <div className="form__wrap">
              <input
                className="form__input"
                id="link-input"
                type="url"
                name="inputElementLink"
                placeholder="Ссылка на картинку"
                required
              />
              <span className="form__input-error link-input-error"></span>
            </div>
          </>
        </PopupWithForm>

        <PopupWithForm
          title={"Вы уверены?"}
          name={"confirm-popup"}
          buttonText={"Да"}
          isOpen={isConfirmAvatarPopupOpen}
          onClose={closeAllPopups}
          // onSubmit={'НАДО ВСТАВИТЬ'}
        >
          <h2 className="popup__title popup__title_content_confirm">
            Вы уверены?
          </h2>
        </PopupWithForm>

        <ImagePopup selectedCard={selectedCard} onClose={closeAllPopups} />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
