import React, { useState } from 'react';
import { faBars, faItalic } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo-small.jpg';
import Modal from '../../components/Modal/Modal';

export function Navigation() {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleHamburgerClick = () => {
    setShowOverlay(true);
  };

  const handleOverlayClick = () => {
    setShowOverlay(false);
  };

  return (
    <div id="navigation" className="navigation">
      <Logo />
      <NavigationHamburger handleClick={handleHamburgerClick} />
      <NavigationLinks
        showOverlay={showOverlay}
        handleOverlayClick={handleOverlayClick}
      />
      <DonateBtn />
    </div>
  );
}

export const Logo = () => (
  <NavLink to="/">
    <img
      src={logo}
      alt="Logo"
      className="navigation__logo"
      width="100"
    />
  </NavLink>
);

const NavigationLinks = ({
  options,
  showOverlay,
  handleOverlayClick,
}) => {
  const renderNavigationLinks = () => {
    if (showOverlay) {
      return (
        <Modal onDismiss={handleOverlayClick}>
          <NavigationOverlay
            options={options}
            handleOverlayClick={handleOverlayClick}
          />
        </Modal>
      );
    } else {
      return <NavigationLinksBar />;
    }
  };
  return <React.Fragment>{renderNavigationLinks()}</React.Fragment>;
};

export const NavigationLinksBar = () => {
  return (
    <div className="navigation__links">
      <NavLink to="/" className="navigation__link">
        Home
      </NavLink>
      <NavLink to="/database" className="navigation__link">
        Database
      </NavLink>
      <NavLink to="/transcriptions" className="navigation__link">
        Transcriptions
      </NavLink>
      <NavLink to="/inventories" className="navigation__link">
        Inventories
      </NavLink>
      <NavLink to="/about" className="navigation__link">
        About
      </NavLink>
    </div>
  );
};

export const NavigationOverlay = ({ handleOverlayClick }) => {
  return (
    <div
      className="navigation__links--overlay"
      onClick={handleOverlayClick}>
      <NavLink
        to="/"
        className="navigation__link navigation__link--overlay">
        Home
      </NavLink>
      <NavLink
        to="/database"
        className="navigation__link navigation__link--overlay">
        Database
      </NavLink>
      <NavLink
        to="/transcriptions"
        className="navigation__link navigation__link--overlay">
        Transcriptions
      </NavLink>
      <NavLink
        to="/inventories"
        className="navigation__link navigation__link--overlay">
        Inventories
      </NavLink>
      <NavLink
        to="/about"
        className="navigation__link navigation__link--overlay">
        About
      </NavLink>
      <NavLink
        to="/donate"
        className="navigation__link navigation__link--overlay">
        Support Our Work
      </NavLink>
    </div>
  );
};

const NavigationHamburger = ({ handleClick }) => (
  <div
    id="navigationHamburger"
    className="navigation__hamburger"
    onClick={handleClick}>
    <FontAwesomeIcon
      className="navigation__hamburger-bars"
      icon={faBars}
    />
  </div>
);

export const DonateBtn = () => (
  <NavLink to="/donate" className="navigation__donate btn btn--big">
    Support Our Work
  </NavLink>
);

export const NavLinkList = ({ links }) => {
  return (
    <nav id="headerNavigation" className="navlink-list">
      <ul className="navlink-list__container">
        {/* {links.map((link) => (
          <NavLink key={link} link={link} />
        ))} */}
      </ul>
    </nav>
  );
};
