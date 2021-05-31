import React from 'react';
import './Footer.css';

const Footer = () => {
   return (
      <div className="main-footer">
            <div className="container">
               <div className="row">
                  {/* column0 */}
                  <div className="col">
                     <a href="https://makers.kg/">MAKERS</a>
                  </div>
                  {/* column1 */}
                  <div className="col">
                     <h4>Продукты</h4>
                     <ul className="list-unstyled">
                        <li><a href="https://bootcamp.makers.kg/">Bootcamp</a></li>
                        <li><a href="https://smm.makers.kg/">SMM курс</a></li>
                        <li><a href="https://juniorclub.makers.kg/">Junior Club</a></li>
                        <li><a href="https://studio.makers.kg/">Студия разработки</a></li>
                        </ul>
                  </div>
                  {/* column2 */}
                  <div className="col">
                     <h4>Комюнити</h4>
                     <ul className="list-unstyled">
                        <li><a href="https://www.facebook.com/makerskg/">facebook</a></li>
                        <li><a  href="https://www.instagram.com/makerskg/">instagram</a></li>
                        <li><a href="https://vk.com/makerskg">Vkontante</a></li>
                        <li><a href="https://t.me/makerskg">Telegram</a></li>
                     </ul>
                  </div>
                  {/* column3 */}
                  <div className="col">
                     <h4>Контакты</h4>
                     <ul className="list-unstyled">
                        <li><a href="makers@gmail.com">makers@gmail.com</a></li>
                        <li><a href="https://2gis.kg/bishkek/firm/70000001038174961/74.592263,42.877737?m=74.592372,42.876913/18.56/r/4.25">Исанова 10/5</a></li>
                        <li><a href="+996501619690">tel:+996501619690</a></li>
                        <li><a href="https://2gis.kg/bishkek/firm/70000001038174961/74.592263,42.877737?m=74.604895,42.870038/17/p/45/r/75">Логвиненко, 12</a></li>
                     </ul>
                  </div>
               </div>
               <hr />
               <div className="row">
                  <p className="col-sm">
                     &copy;{new Date().getFullYear()} MAKERS | All right reserved | Term of Service | Privaty
                  </p>
               </div>
            </div>
         </div>
   );
};

export default Footer;