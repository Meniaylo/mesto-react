import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({ card, onCardClick }) {
  
  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some(i => i._id === currentUser._id);

  // const cardDeleteButtonClassName = (`element__remove-btn link ${isOwn && 'element__remove-btn_active'}`);

  // const cardLikeButtonClassName = (`element__like-btn link ${isLiked && 'element__like-btn_active'}`);
  
  const handleClick = () => {
    onCardClick(card);
  };

  return (
    <article className="element">
      <div className="element__pic-wrapper">
        <img
          className="element__pic"
          src={card.link}
          alt={card.name}
          onClick={handleClick}
        />
        <button
          className={`element__remove-btn link ${isOwn && 'element__remove-btn_active'}`}
          type="button"
          aria-label="Удалить"
        ></button>
      </div>
      <div className="element__info">
        <h2 className="element__name">{card.name}</h2>
        <div className="element__like-wrapper">
          <button
            className={`element__like-btn link ${isLiked && 'element__like-btn_active'}`}
            type="button"
            aria-label="Лайк"
          ></button>
          <p className="element__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </article>
  );
}

export default Card;
