function Card({card, onCardClick}) {

  const handleClick = () => {
    onCardClick(card);
  }

  return (
            <article className="element">
              <div className="element__pic-wrapper">
                <img
                  className="element__pic"
                  src={card.link}
                  alt="2"
                  onClick={handleClick}/>
                <button className="element__remove-btn link" type="button" aria-label="Удалить"></button>
              </div>
              <div className="element__info">
                <h2 className="element__name">{card.name}</h2>
                <div className="element__like-wrapper">
                  <button className="element__like-btn" type="button" aria-label="Лайк"></button>
                  <p className="element__like-counter">{card.likes.length}</p>
                </div>
              </div>
            </article>
  )
}

export default Card;