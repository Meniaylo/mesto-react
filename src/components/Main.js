import React from "react";
import api from "../utils/Api";
import Card from './Card';


function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([data, initialCards]) => {
          setUserName(data.name);
          setUserDescription(data.about);
          setUserAvatar(data.avatar);

          setCards(initialCards);
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
              src={userAvatar}
              alt="Аватар пользователя"
            />
          </div>
          <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
            <p className="profile__occupation">{userDescription}</p>
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
            />
          )}
        )}
      </section>
    </main>
  );
}

export default Main;