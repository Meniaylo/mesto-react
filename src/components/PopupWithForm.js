function PopupWithForm({title, name, buttonText, isOpen, onClose, children}) {
  
  return (
    <section
      className={`popup ${isOpen && 'popup_active'}`}
      id={name}>
      <div className="popup__container">
        <h2 className="popup__title">{title}</h2>
        <button
          className="popup__exit-btn link"
          type="button"
          aria-label="Выход"
          onClick={onClose}></button>
        <form className="form" name={`${name}-form`}>
          {children}
          <button className="form__submit-btn" type="submit">{buttonText}</button>
        </form>
      </div>
    </section>
  )
}

export default PopupWithForm;