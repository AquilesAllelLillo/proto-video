import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import classNames from 'classnames';
import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-proto-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

const Header = props => {
  const { user, isLogin, isRegister } = props;
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    props.logoutRequest({});
  }

  const headerClass = classNames('header', {
    isLogin,
    isRegister,
  })

  return (
    <header className={headerClass}>

      <Link to="https://aquilesallellillo.github.io/proto-video/">
        <img className="header__img" src={logo} alt="Proto-Video"/>
      </Link>

      <div className="header__menu">
        <div className="header__menu--profile">
          {hasUser ?
            <img src={gravatar(user.email)} alt="Icono usuario"/> :
            <img src={userIcon} alt="Icono usuario"/>
          }
          <p>Perfil</p>
        </div>
        <ul>
          {hasUser ?
            <li><a href="https://aquilesallellillo.github.io/proto-video/">{user.name}</a></li> :
            null
          }

          {hasUser ? 
            <li><a href="#logout" onClick={handleLogout}>Cerrar Sesión</a></li>
            :
            <li><Link to="https://aquilesallellillo.github.io/proto-video/login">Iniciar Sesión</Link></li>
          }

          <li><Link to="https://aquilesallellillo.github.io/proto-video/register">Registrarse</Link></li>
        </ul>
      </div>
    </header>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);