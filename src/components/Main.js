import React from "react";
import { useEffect, useState, useContext } from 'react';
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import api from "../utils/Api";
import Card from './Card';

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {

  const currentUser = useContext(CurrentUserContext);
  const [cards, setCards] = useState([]);

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== card._id));
      })
  }

  useEffect(() => {
    api.getInitialCards()
      .then((initialCards) => {
        setCards(initialCards)
      })
      .catch((err) => {
        console.log(`Ошибка! ${err}`);
      })
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__card">
          <div className="profile__avatar-wrapper" onClick={onEditAvatar}>
            <img className="profile__avatar"
              src={currentUser.avatar}
              alt="Аватар пользователя"
            />
          </div>
          <div className="profile__info">
            <h1 className="profile__name">{currentUser.name}</h1>
            <p className="profile__occupation">{currentUser.about}</p>
            <button
              className="profile__edit-btn link"
              type="button"
              aria-label="Вывести"
              onClick={onEditProfile}>
            </button>
          </div>
        </div>
        <button
          className="profile__add-btn link"
          type="button"
          aria-label="Добавить"
          onClick={onAddPlace}>
        </button>
      </section>

      <section className="elements" aria-label="Фотографии">
        {cards.map((card) => {
          return(
            <Card
              card={card}
              onCardClick={onCardClick}
              key={card._id}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
            />
          )}
        )}
      </section>
    </main>
  );
}

export default Main;