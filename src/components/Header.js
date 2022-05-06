import logoPath from '../images/logo.svg';

const Header = () => (
    <header className="header">
      <a className="header__logo" href='#'>
        <img className="header__logo-img" src={logoPath} alt="Логотип: Место"/>
      </a>
    </header>
  );

export default Header;