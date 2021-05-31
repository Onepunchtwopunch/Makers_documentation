import React from 'react';
import "./Test.css"

const Test = () => {
   return (
      <div className="wraper"> 
         <div className="main-left">
            <div className="main__box">
               <h3>Вступление в HTML</h3>
               <p className="box-1">Возврат нескольких элементов из компонента является распространённой практикой в React.
               Фрагменты
               позволяют формировать список дочерних элементов, не создавая лишних узлов в DOM.
               </p>
               <span className="img-first"></span>
               <p className="box-2">Обратите внимание на первую строку
               DOCTYPE (document type) — служебная информация для браузера, где описывается стандарт
               HTML, который нужно обработать. Текущий стандарт HTML5 поддерживается всеми браузерами, поэтому
               достаточно указать в первой строке документа, который говорит, что наш документ размечен по стандарту HTML5.
               </p>
            </div>

            <div className="main__block">
               <h2>Начало работы с HTML</h2>
               <p>Далее открывается парный тег html с атрибутом lang="ru". Указание языка также необходимо для браузеров,
               особенно если сайт рассчитан на массовую аудиторию, в том числе и за рубежом.
               </p>
               <p className="block-2">Во избежание ошибок, обе вышеописанные конструкции, при их отсутствии, будут добавлены
               браузером
               автоматически. В некоторых ситуациях браузеры могут добавить не те строки, которые вы бы хотели, и вместо
               обработки страницы по стандарту HTML5 браузер будет обрабатывать всё как HTML4, что приведёт к множеству
               проблем.
               </p>
               <span className="img-first"></span>
               <p className="block-2">Во избежание ошибок, обе вышеописанные конструкции, при их отсутствии, будут добавлены
               браузером
               автоматически. В некоторых ситуациях браузеры могут добавить не те строки, которые вы бы хотели, и вместо
               обработки страницы по стандарту HTML5 браузер будет обрабатывать всё как HTML4, что приведёт к множеству
               проблем.
               </p>
            </div>
            <div className="main-img">
               <span className="img-pen"></span>
               <button>Редактировать</button>
               <span className="img-plus"></span>
               <button>Добавить документацию</button>
            </div>
         </div>

         <div className="main-right">
            <div classt="righ__list">
               <ol>
                  <li className="list-1"><a className="lists" href="">Вступление в HTML</a></li>
                  <li><a className="lists" href="">Начало работы с HTML</a></li>
                  <li><a className="lists" href="">Что в "шапке"? Метаданные в HTML</a></li>
                  <li><a className="lists" href="">Тексты в HTML </a></li>
                  <li><a className="lists" href="">Создание гиперссылок</a></li>
                  <li><a className="lists" href="">Структура документа и веб-сайта</a></li>
                  <li><a className="lists" href="">Отладка HTML</a></li>
                  <li><a className="lists" href="">Изображения в HTML</a></li>
                  <li><a className="lists" href="">От object до iframe</a></li>
               </ol>
            </div>
            <div className="right__style">
               <div><a className="lists" href="">CSS - стилизирование Веба</a></div>
               <div><a className="lists" href="">JavaScript-динамический клиентский скрининг</a></div>
               <div><a className="lists" href="">JavaScript-динамический клиентский скрининг</a></div>
               <div><a className="lists" href="">JavaScript-динамический клиентский скрининг</a></div>
               <div><a className="lists" href="">JavaScript-динамический клиентский скрининг</a></div>
               <div><a className="lists" href="">JavaScript-динамический клиентский скрининг</a></div>
               <div><a className="lists" href="">JavaScript-динамический клиентский скрининг</a></div>
            </div>
         </div>  
      </div>

   
   );
};

export default Test;