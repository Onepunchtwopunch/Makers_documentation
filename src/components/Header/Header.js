
import React from 'react';
import "./Header.css"
import {Link} from 'react-router-dom'

const Header = () => {
   return (
      <header>
         <div className="header">
            <div className="container">
               <div className="navbar">
                  <div className="navbar__left">
                     <div className="logo"></div>
                  </div>
                  <div className="navbar__right">
                     <div className="hamburger__menu">
                        <input type="checkbox" id="menu__toggle"/>
                        <label for="menu__toggle" class="menu__btn">
                           <span></span>
                        </label>
                        <ul className="navbar__menu menu__box">
                           <Link to="/">
                           <li className="navbar__item">Главная</li>
                           </Link>
                           <Link to="/test">
                           <li className="navbar__item">Документация</li>
                           </Link>
                           <li className="navbar__item">Добавить</li>
                           <li className="navbar__item"><input type="search" placeholder="Введите текст для поиска" className="search-inp"/></li>
                           <li className="navbar__item"><a href="https://github.com/">GitHub</a></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </header>
   );
};

export default Header;