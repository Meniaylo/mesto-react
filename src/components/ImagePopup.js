function ImagePopup({selectedCard, onClose}) {

  return (
    <section
      className={`popup popup_content_img ${selectedCard && 'popup_active'}`}
      id={selectedCard.name}
      key={selectedCard._id}>
      <div className="popup__img-container">
        <img
          className="popup__img"
          src={selectedCard?.link}
          alt="2"/>
        <h2 className="popup__img-title">{selectedCard.name}</h2>
        <button
          className="popup__exit-btn link"
          type="button"
          aria-label="Выход"
          onClick={onClose}></button>
      </div>
    </section>
  )
};

export default ImagePopup;