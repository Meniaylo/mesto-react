import logoPath from '../images/logo.svg';

function Header() {
  return (
    <header className="header">
      <a className="header__logo" href='#'>
        <img className="header__logo-img" src={logoPath} alt="Логотип: Место"/>
      </a>
    </header>
  );
}

export default Header;