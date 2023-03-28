
function changerActive(list) {
    for(let i = 0; i < list.length; i++) {
        list[i].classList.remove('active')
    }
    list = 0
}
//-----header-------
//size-control for active blocks
window.addEventListener('resize', function(event){
    if(window.innerWidth > 1199) {
      document.querySelector('.header-m').classList.remove('active');
      document.querySelector('#nav-icon').classList.remove('open');
      document.querySelector('.header-w').classList.remove('fixed');
    }
//search_nav
    if(document.querySelectorAll('.search-nav-w').length) {
        if((window.innerWidth > 899) && (!document.querySelector('.search-nav__more-dropdown').classList.contains('active'))) {
            document.querySelector('.search-w').classList.remove('active');
            document.querySelector('.search-nav__more').classList.remove('active');
          }
          if(window.innerWidth <= 899) {
            document.querySelector('.search-nav__more-dropdown').classList.remove('active');
            document.querySelector('.search-nav__more').classList.remove('active');
            document.querySelector('.search-nav__price-dropdown').classList.remove('active');
            document.querySelector('.search-nav__price').classList.remove('active');
            document.querySelector('.search-nav__types-dropdown').classList.remove('active');
            document.querySelector('.search-nav__types').classList.remove('active');
          }
          if(window.innerWidth <= 1199) {
            document.querySelector('.search-nav__rooms-dropdown').classList.remove('active');
            document.querySelector('.search-nav__rooms').classList.remove('active');
          }
    }


//place-popup
    if(document.querySelectorAll('.place-w').length) {
        if(window.innerWidth <= 1023) {
            if(document.querySelector('.place-w').classList.contains('active')) {
                document.querySelector('.header-w').classList.add('fixed');
            }
        }
        if(window.innerWidth <= 540) {
            // change text place__currency-preview-item
            document.querySelector('.place__currency-preview-item').textContent = "$"
        }
        if(window.innerWidth > 540) {
            // change text place__currency-preview-item
            document.querySelector('.place__currency-preview-item').textContent = "Валюта"
        }
    }
});
if(document.querySelectorAll('.place-w').length) {
    if(window.innerWidth <= 540) {
        // change text place__currency-preview-item
        document.querySelector('.place__currency-preview-item').textContent = "$"
    }
}

//-----map_city-------

window.addEventListener('resize', function(event){
    if(document.querySelectorAll('#map_city').length) {
        if(window.innerWidth > 1003)
        document.querySelector('.city__content').classList.remove('city_map')
    if(window.innerWidth <= 1003) {
        document.querySelector('#map_city').style.height = "100%"
    }
    if(window.innerWidth > 1003) {
        document.querySelector('.city-col').classList.add('active')
        document.querySelector('.map_city__btn-changer').classList.remove('active')
        document.querySelector('.city-col__btn-changer').classList.add('active')
        document.querySelector('#map_city').classList.remove('map_city_active')
        document.querySelector('.city__content').classList.remove('city_map')
    }
    if(window.innerWidth > 1199) {
        document.querySelector('#map_city').style.height = window.innerHeight - 18 - 161 + "px"
    }
    if((window.innerWidth <= 1199) && (window.innerWidth > 1003)) {
        document.querySelector('#map_city').style.height = window.innerHeight - 88 - 60 + "px"
    }
    }
});


//header-lang
document.querySelector('.header__top-lang').onclick = function() {
    document.querySelector('.header__top-lang-item').classList.toggle('active')
    document.querySelector('.header__lang-list-dropdown').classList.toggle('active')
}
//header-buy
document.querySelector('.header__nav-buy').onclick = function() {
    this.classList.toggle('active')
    document.querySelector('.header__buy-dropdown').classList.toggle('active')
}
//header-about
document.querySelector('.header__nav-about').onclick = function() {
    this.classList.toggle('active')
    document.querySelector('.header__about-dropdown').classList.toggle('active')
}
function checker() {
    if(!document.querySelector('.header-m').classList.contains('active') && !document.querySelector('.place-w').classList.contains('active') ) {
        document.querySelector('.header-w').classList.remove('fixed')
    }
}
//header__top-phone-menu
document.querySelector('.header__top-phone-menu').onclick = function() {
    document.querySelector('.header-m').classList.toggle('active')
    document.querySelector('#nav-icon').classList.toggle('open');
    document.querySelector('.header-w').classList.add('fixed')
    checker()
}
//header-m__aboute
document.querySelector('.header-m__aboute').onclick = function() {
    this.classList.toggle('active')
    document.querySelector('.header-m__aboute-list').classList.toggle('active')
}
//header-m__buy
document.querySelector('.header-m__buy').onclick = function() {
    this.classList.toggle('active')
}
//header-m__lang
let header_m_langs = document.querySelectorAll('.header-m__langs-item')

for(let i = 0; i < header_m_langs.length; i++) {
    header_m_langs[i].addEventListener("click",
    function(event){
        let list = header_m_langs
        changerActive(list)
        header_m_langs[i].classList.add('active')
  })
}
//index-map-buttons
let index_map_btns = document.querySelectorAll('.index-map__button')

for(let i = 0; i < index_map_btns.length; i++) {
    index_map_btns[i].addEventListener("click",
    function(event){
        let list = index_map_btns
        changerActive(list)
        index_map_btns[i].classList.add('active')
  })
}

//index-map-buttons
let contact_top_item = document.querySelectorAll('.contact__top-item')

for(let i = 0; i < contact_top_item.length; i++) {
    contact_top_item[i].addEventListener("click",
    function(event){
        let list = contact_top_item
        changerActive(list)
        contact_top_item[i].classList.add('active')
  })
}

//contact__form-phone-country
if(document.querySelectorAll('.contact__form-phone-country').length) {
    document.querySelector('.contact__form-phone-country').onclick = function() {
        this.classList.toggle('active')
        document.querySelector('.contact__phone-dropdown').classList.toggle('active')
    }
}

//objects-slider
const objects_swiper = new Swiper('.objects__swiper', {
    slidesPerView: 4,
    spaceBetween: 20,
    pagination: {
        el: '.objects__pagination',
        clickable: true,
      },
    navigation: {
        nextEl: '.objects__next',
        prevEl: '.objects__prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20
          },
        640: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        900: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        1199: {
          slidesPerView: 4,
          spaceBetween: 20
        }
      }
  })
//place__slider_p
let place__slider_p
function create_place_slider(number) {
        place__slider_p = new Swiper('.place__slider_p-swiper', {
        slidesPerView: 1,
        autoHeight: true,
        initialSlide: number,
        navigation: {
            nextEl: '.place__slider_p-prev',
            prevEl: '.place__slider_p-next',
        },
        pagination: {
            el: ".place__slider_p-pagination",
            type: "custom",
            renderCustom: function (swiper, current, total) {
                return current + ' из ' + (total); 
        }
        }
    })
}
function destroy_place_slider() {
    place__slider_p.destroy(true, true)
}
//city-slider
const city_swiper = new Swiper('.city__swiper', {
    slidesPerView: 1,
    // allowTouchMove: false,
    scrollbar: {
        el: ".city__scrollbar",
        hide: true
      },

  })
//search-nav-rooms
if(document.querySelectorAll('.search-nav__rooms-title').length) {
    document.querySelector('.search-nav__rooms-title').onclick = function() {
        document.querySelector('.search-nav__rooms').classList.toggle('active')
        document.querySelector('.search-nav__rooms-dropdown').classList.toggle('active')
    }
}

//search-nav-more  search-w
if(document.querySelectorAll('.search-nav__more-title').length) {
    document.querySelector('.search-nav__more-title').onclick = function() {
        if(window.innerWidth > 899) {
            document.querySelector('.search-nav__more').classList.toggle('active')
            document.querySelector('.search-nav__more-dropdown').classList.toggle('active')
        }
        if(window.innerWidth <= 899) {
            document.querySelector('.search-w').classList.toggle('active')
        }
    }
}

if(document.querySelectorAll('.search-w__close').length) {
    document.querySelector('.search-w__close').onclick = function() {
        if(window.innerWidth <= 899) {
            document.querySelector('.search-w').classList.remove('active')
        }
    }
}


//search-nav__bedrooms
let search_nav_bedrooms = document.querySelectorAll('.search-nav__rooms-dropdown-bedrooms-button')
for(let i = 0; i < search_nav_bedrooms.length; i++) {
    search_nav_bedrooms[i].addEventListener("click",
    function(event){
        let list = search_nav_bedrooms
        changerActive(list)
        search_nav_bedrooms[i].classList.add('active')
  })
}

//search-nav__bathrooms
let search_nav_bathrooms = document.querySelectorAll('.search-nav__rooms-dropdown-bathrooms-button')
for(let i = 0; i < search_nav_bathrooms.length; i++) {
    search_nav_bathrooms[i].addEventListener("click",
    function(event){
        let list = search_nav_bathrooms
        changerActive(list)
        search_nav_bathrooms[i].classList.add('active')
  })
}
//search-nav__view
let search_nav_view = document.querySelectorAll('.search-nav__view-button')
for(let i = 0; i < search_nav_view.length; i++) {
    search_nav_view[i].addEventListener("click",
    function(event){
        let list = search_nav_view
        changerActive(list)
        search_nav_view[i].classList.add('active')
  })
}
//search-nav__sea
let search_nav_sea = document.querySelectorAll('.search-nav__sea-button')
for(let i = 0; i < search_nav_sea.length; i++) {
    search_nav_sea[i].addEventListener("click",
    function(event){

        let list = search_nav_sea
        changerActive(list)
        search_nav_sea[i].classList.add('active')
  })
}
//search-nav-type
if(document.querySelectorAll('.search-nav__types-title').length) {
        document.querySelector('.search-nav__types-title').onclick = function() {
        document.querySelector('.search-nav__types').classList.toggle('active')
        document.querySelector('.search-nav__types-dropdown').classList.toggle('active')
    }
}

//search-nav-price
if(document.querySelectorAll('.search-nav__price-title').length) {
    document.querySelector('.search-nav__price-title').onclick = function() {
    document.querySelector('.search-nav__price').classList.toggle('active')
    document.querySelector('.search-nav__price-dropdown').classList.toggle('active')
}
}
//search-nav__price-currency
let search_nav_currency = document.querySelectorAll('.search-nav__price-currency-item')
for(let i = 0; i < search_nav_sea.length; i++) {
    search_nav_currency[i].addEventListener("click",
    function(event){
        let list = search_nav_currency
        changerActive(list)
        search_nav_currency[i].classList.add('active')
  })
}
//search-nav Changaer z-index
let search_nav_item = document.querySelectorAll('.search-nav__list-item-title')
let search_nav_item_dropdown = document.querySelectorAll('.search-nav__item-dropdown')

function searchNavZindexChanger() {
    for(let i = 0; i < search_nav_item_dropdown.length-1; i++) {
        search_nav_item_dropdown[i].style.zIndex = 5
    }
}
for(let i = 0; i < search_nav_item.length-1; i++) {
    search_nav_item[i].addEventListener("click",
    function(event){
        searchNavZindexChanger()
        search_nav_item_dropdown[i].style.zIndex = 6
  })
}
if(document.querySelectorAll('.search-nav__price-title').length) {
    document.querySelector('.search-nav__price-title').onclick = function() {
    document.querySelector('.search-nav__price').classList.toggle('active')
    document.querySelector('.search-nav__price-dropdown').classList.toggle('active')
}
}


//city-col__filter
if(document.querySelector('.city-col__filter')) {
    document.querySelector('.city-col__filter').onclick = function() {
        this.classList.toggle('active')
        document.querySelector('.city-col__filter-list').classList.toggle('active')
    }
}
//favorites__filter
if(document.querySelector('.favorites__top-filter')) {
    document.querySelector('.favorites__top-filter').onclick = function() {
        this.classList.toggle('active')
        document.querySelector('.favorites__top-filter-list').classList.toggle('active')
    }
}

//place__btns-call
if(document.querySelector('.place__btns-call-preview')) {
    document.querySelector('.place__btns-call-preview').onclick = function() {
        document.querySelector('.place__btns-call-list').classList.toggle('active')
    }
}
//fixedplace__btns-call
if(document.querySelector('.place__btns-call-preview')) {
    document.querySelector('.place-w').onscroll = function() {
        if (window.innerWidth <640)
          if(document.querySelector('.place-w').scrollTop > 620) {
            document.querySelector('.place__btns').style.position = "fixed"
          }
          else {
            document.querySelector('.place__btns').style.position = "static"
          }
    }
window.addEventListener('resize', function(event){
            if (window.innerWidth >=640) {
                document.querySelector('.place__btns').style.position = "static"
            }
})
}


//favorites__items-delete

let favorites_item = document.querySelectorAll('.favorites__list-item')
let favorites_item_exit = document.querySelectorAll('.favorites__item-exit')

for(let i = 0; i < favorites_item_exit.length; i++) {
    favorites_item_exit[i].addEventListener("click",
    function(event){
        favorites_item[i].style.display = 'none'
  })
}


//favorites__pages
let favorites_pages_btn = document.querySelectorAll('.favorites__pages-item')

for(let i = 0; i < favorites_pages_btn.length; i++) {
    favorites_pages_btn[i].addEventListener("click",
    function(event){
        let list = favorites_pages_btn
        changerActive(list)
        favorites_pages_btn[i].classList.add('active')
  })
}

//city-col__btn
let city_col_btn = document.querySelectorAll('.city-col__btn')

for(let i = 0; i < city_col_btn.length; i++) {
    city_col_btn[i].addEventListener("click",
    function(event){
        let list = city_col_btn
        changerActive(list)
        city_col_btn[i].classList.add('active')
  })
}

//favorite-item-btn
let favorite_item_btn = document.querySelectorAll('.favorite-item-btn')

for(let i = 0; i < favorite_item_btn.length; i++) {
    favorite_item_btn[i].addEventListener("click",
    function(event){
        favorite_item_btn[i].classList.toggle('active')
  })
}
//objects__slide-favorites
let objects_favorites = document.querySelectorAll('.objects__slide-favorites')

for(let i = 0; i < objects_favorites.length; i++) {
    objects_favorites[i].addEventListener("click",
    function(event){
        objects_favorites[i].classList.toggle('active')
  })
}
//city-col__bottom-number
let city_col_number = document.querySelectorAll('.city-col__bottom-number')

for(let i = 0; i < city_col_number.length; i++) {
    city_col_number[i].addEventListener("click",
    function(event){
        let list = city_col_number
        changerActive(list)
        city_col_number[i].classList.add('active')
  })
}

//city content-changer
//city-col_active
if(document.querySelector('.city-col__btn-changer')) {
    document.querySelector('.city-col__btn-changer').onclick = function() {
        // map_city_add()
        destroyMap()
        this.classList.remove('active')
        document.querySelector('.city-col').classList.remove('active')
        document.querySelector('.map_city__btn-changer').classList.add('active')
        document.querySelector('#map_city').classList.add('map_city_active')
        document.querySelector('.city__content').classList.add('city_map')
    }
}
//map_country_active
if(document.querySelector('.map_city__btn-changer')) {
    document.querySelector('.map_city__btn-changer').onclick = function() {
        this.classList.remove('active')
        document.querySelector('.city-col').classList.add('active')
        document.querySelector('.city-col__btn-changer').classList.add('active')
        document.querySelector('#map_city').classList.remove('map_city_active')
        document.querySelector('.city__content').classList.remove('city_map')
    }
}
//place__currency-list
if(document.querySelectorAll('.place__currency-preview').length) {
    document.querySelector('.place__currency-preview').onclick = function() {
        document.querySelector('.place__currency').classList.toggle('active')
    }
}
//section city header-controll
if(window.innerWidth > 1003) {
    if(document.querySelectorAll('.city').length) {
        document.body.classList.add('scroll_fixed')
    }
}
window.addEventListener('resize', function(event){
    if(window.innerWidth > 1003) {
        if(document.querySelectorAll('.city').length) {
            document.body.classList.add('scroll_fixed')
        }
    }
    if(window.innerWidth <= 1003) {
        if(document.querySelectorAll('.city').length) {
            document.body.classList.remove('scroll_fixed')
        }
    }
})

//place-w object kompleks
let city_col_item = document.querySelectorAll('.city-col__item')
let object = document.querySelector('.place-w')

for(let i = 0; i < city_col_item.length; i++) {
    city_col_item[i].addEventListener("click",
    function(event){
        if(!event.target.classList.contains('favorite-item-btn')) {
            document.body.classList.add('scroll_fixed')
            document.querySelector('.header-w').classList.add('fixed')
            object.classList.add('active')
        }
  })
}

if(document.querySelectorAll('.place__exit').length) {
    document.querySelector('.place__exit').onclick = function() {
        document.querySelector('.place-w').classList.remove('active')
        document.body.classList.remove('scroll_fixed')
        document.querySelector('.header-w').classList.remove('fixed')
    }
}
if(document.querySelectorAll('.place__header-exit').length) {
    document.querySelector('.place__header-exit').onclick = function() {
        document.querySelector('.place-w').classList.remove('active')
        document.body.classList.remove('scroll_fixed')
        document.querySelector('.header-w').classList.remove('fixed')
    }
}

//place__sliderfa
const place_swiper = new Swiper('.place__swiper', {
    // Default parameters
    slidesPerView: 2,
    spaceBetween: 4,
    navigation: {
        nextEl: '.place__next',
        prevEl: '.place__prev',
    },
      pagination: {
        el: ".place__pagination",
        type: "custom",
        renderCustom: function (swiper, current, total) {
            return current + ' из ' + (total); 
        }

    },
    breakpoints: {
        0: {
            slidesPerView: 1,
          },
        540: {
          slidesPerView: 2,
        },
      }
})

//kompleks__layout-scheme-swiper
const swiper = new Swiper('.scheme__swiper', {
    // Default parameters
    slidesPerView: 1,
    navigation: {
        nextEl: '.scheme__next',
        prevEl: '.scheme__prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
          },
        540: {
            slidesPerView: 2,
        },
        767: {
            slidesPerView: 1,
        },
      }

})
//place__slider_p

let place_collage_item = document.querySelectorAll('.place__collage-item_clickable')
let place_slide = document.querySelectorAll('.place__slide_clickable')
let place_slider_p = document.querySelector('.place__slider_p')
let place_slider_p_exit = document.querySelector('.place__slider_p-exit')
let place_popup_collage = document.querySelector('.place-popup-collage')
let place_popup_collage_exit = document.querySelector('.place-popup-collage__exit')
if(place_collage_item.length) {
    for(let i = 0; i < place_collage_item.length; i++) {
        place_collage_item[i].addEventListener("click",
        function(event){
            create_place_slider(i)
            place_slider_p.classList.add('active')
      })
    }
}
if(place_slide.length) {
    for(let i = 0; i < place_slide.length; i++) {
        place_slide[i].addEventListener("click",
        function(event){
            place_popup_collage.classList.add('active')
      })
    }
}
if(place_slide.length) {
    place_slider_p_exit.onclick = function() {
        place_slider_p.classList.remove('active')
        destroy_place_slider()
    }
}

if(place_slide.length) {
    place_popup_collage_exit.onclick = function() {
        place_popup_collage.classList.remove('active')
    }
}

if(place_slide.length) {
    window.addEventListener('resize', function(event){
        if(window.innerWidth <= 766) {  
            if(place_slider_p.classList.contains('active')) {
                place_popup_collage.classList.add('active')
                place_slider_p.classList.remove('active')
            }
        }
        if(window.innerWidth > 766) {  
            if(place_popup_collage.classList.contains('active')) {
                place_popup_collage.classList.remove('active')
                place_slider_p.classList.add('active')
            }
        }
    });
}


var myMap,
    fullScreen = false;
function map_city_add(a) {
    if(document.querySelectorAll('#map_city').length) {
        ymaps.ready(function() {
            // Создание экземпляра карты и его привязка к созданному контейнеру.

                myMap = new ymaps.Map('map_city', {
                center: [39.475851, 30.815585],
                zoom: 6,
                controls: [],
                behaviors: ['default', 'scrollZoom'],
                }, {
                    searchControlProvider: 'yandex#search',
                });

                // Создание макета балуна на основе Twitter Bootstrap.
                var MyBalloonLayout = ymaps.templateLayoutFactory.createClass(
                    '<div class="popover top">' +
                        '<a class="close" href="#">&times;</a>' +
                        '<div class="arrow"></div>' +
                        '<div class="popover-inner">' +
                        '$[[options.contentLayout observeSize minWidth=235 maxWidth=235 maxHeight=350]]' +
                        '</div>' +
                        '</div>', {
                        /**
                         * Строит экземпляр макета на основе шаблона и добавляет его в родительский HTML-элемент.
                         * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#build
                         * @function
                         * @name build
                         */
                        build: function () {
                            this.constructor.superclass.build.call(this);
        
                            this._$element = $('.popover', this.getParentElement());
        
                            this.applyElementOffset();
        
                            this._$element.find('.close')
                                .on('click', $.proxy(this.onCloseClick, this));
                        },
        
                        /**
                         * Удаляет содержимое макета из DOM.
                         * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#clear
                         * @function
                         * @name clear
                         */
                        clear: function () {
                            this._$element.find('.close')
                                .off('click');
        
                            this.constructor.superclass.clear.call(this);
                        },
        
                        /**
                         * Метод будет вызван системой шаблонов АПИ при изменении размеров вложенного макета.
                         * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
                         * @function
                         * @name onSublayoutSizeChange
                         */
                        onSublayoutSizeChange: function () {
                            MyBalloonLayout.superclass.onSublayoutSizeChange.apply(this, arguments);
        
                            if(!this._isElement(this._$element)) {
                                return;
                            }
        
                            this.applyElementOffset();
        
                            this.events.fire('shapechange');
                        },
        
                        /**
                         * Сдвигаем балун, чтобы "хвостик" указывал на точку привязки.
                         * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
                         * @function
                         * @name applyElementOffset
                         */
                        applyElementOffset: function () {
                            this._$element.css({
                                left: -(this._$element[0].offsetWidth / 2),
                                top: -(this._$element[0].offsetHeight + this._$element.find('.arrow')[0].offsetHeight)
                            });
                        },
        
                        /**
                         * Закрывает балун при клике на крестик, кидая событие "userclose" на макете.
                         * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
                         * @function
                         * @name onCloseClick
                         */
                        onCloseClick: function (e) {
                            e.preventDefault();
        
                            this.events.fire('userclose');
                        },
        
                        /**
                         * Используется для автопозиционирования (balloonAutoPan).
                         * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/ILayout.xml#getClientBounds
                         * @function
                         * @name getClientBounds
                         * @returns {Number[][]} Координаты левого верхнего и правого нижнего углов шаблона относительно точки привязки.
                         */
                        getShape: function () {
                            if(!this._isElement(this._$element)) {
                                return MyBalloonLayout.superclass.getShape.call(this);
                            }
        
                            var position = this._$element.position();
        
                            return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([
                                [position.left, position.top], [
                                    position.left + this._$element[0].offsetWidth,
                                    position.top + this._$element[0].offsetHeight + this._$element.find('.arrow')[0].offsetHeight
                                ]
                            ]));
                        },
        
                        /**
                         * Проверяем наличие элемента (в ИЕ и Опере его еще может не быть).
                         * @function
                         * @private
                         * @name _isElement
                         * @param {jQuery} [element] Элемент.
                         * @returns {Boolean} Флаг наличия.
                         */
                        _isElement: function (element) {
                            return element && element[0] && element.find('.arrow')[0];
                        }
                    });
            // Создадим макет метки.
            var animatedLayout = ymaps.templateLayoutFactory.createClass(
                '<div class="placemark"></div>',
                {
                    build: function () {
                        animatedLayout.superclass.build.call(this);
                        var element = this.getParentElement().getElementsByClassName('placemark')[0];
                        var size = this.isActive ? 60 : 34;
                        var smallShape = {type: 'Circle', coordinates: [0, 0], radius: size / 2};
                        var bigShape = {type: 'Circle', coordinates: [0, -30], radius: size / 2};
                        // Зададим фигуру активной области.
                        this.getData().options.set('shape', this.isActive ? bigShape : smallShape);
                        document.addEventListener("click", function(e){
                            if(e.target.classList.contains('ymaps-2-1-79-balloon__close-button') || e.target.classList.contains('ymaps-2-1-79-user-selection-none')) {
                                if(window.innerWidth <= 1003) {
                                    var marks = document.querySelectorAll('.placemark')
                                    for(let i = 0; i < marks.length; i++) {
                                        marks[i].classList.remove('active')
                                    }
                                }
                        }
                        });
                        if (!this.inited) {
                            this.inited = true;
                            this.isActive = false;
                            // При клике по метке будем перестраивать макет.
                            this.getData().geoObject.events.add('click', function (e) {
                                var marks = document.querySelectorAll('.placemark')
                                if(element.classList.contains("active")) {
                                    element.classList.remove("active");
                                }
                                else {
                                    for(let i = 0; i < marks.length; i++) {
                                        marks[i].classList.remove('active')
                                    }
                                    element.classList.add("active");
                                }
                            }, this);
                        }
                    }
                }
            );
                // Создание вложенного макета содержимого балуна.
               var  MyBalloonContentLayout = ymaps.templateLayoutFactory.createClass(
                        '<div class="ballon-city__content">$[properties.balloonContent]</div>'
                ),
                
                myPlacemark = window.myPlacemark = new ymaps.Placemark([40.938240, 29.260590], {
                    balloonContent: [
                        '<div class="balloon-city">' +
                        '<div class="balloon-city__text">' +
                        '<div class="balloon-city__price">$250 000</div>' +
                        '<div class="balloon-city__rooms">2 спал, 1 ван</div>' +
                        '<div class="balloon-city__rooms_m">2 010 кв.м  <span>|</span>  2 спальни  <span>|</span>  1 ванна</div>' +
                        '<div class="balloon-city__address">Balbey, 431. Sk. No:4, 07040 Muratpaşa</div>' +
                        '<div class="balloon-city__square">1 250 кв.м</div>' +
                        '</div>' +
                        '<div class="balloon-city__img"> <img src="./img/favorites-2.png"></div>' +
                        '</div>',
                    ].join('')
                }, {
                    balloonPanelMaxMapArea: a,
                    balloonShadow: false,
                    balloonLayout: MyBalloonLayout,
                    iconLayout: animatedLayout,
                    balloonContentLayout: MyBalloonContentLayout,
                    hideIconOnBalloonOpen: false,
                    balloonOffset: [-100, -80]
                }),
            myPlacemark1 = window.myPlacemark = new ymaps.Placemark([38.227547, 27.228730], {
                balloonContent: [
                    '<div class="balloon-city">' +
                    '<div class="balloon-city__text">' +
                    '<div class="balloon-city__price">$250 000</div>' +
                    '<div class="balloon-city__rooms">2 спал, 1 ван</div>' +
                    '<div class="balloon-city__rooms_m">2 010 кв.м  <span>|</span>  2 спальни  <span>|</span>  1 ванна</div>' +
                    '<div class="balloon-city__address">Balbey, 431. Sk. No:4, 07040 Muratpaşa</div>' +
                    '<div class="balloon-city__square">1 250 кв.м</div>' +
                    '</div>' +
                    '<div class="balloon-city__img"> <img src="./img/favorites-2.png"></div>' +
                    '</div>',
                ].join('')
            }, {
                balloonPanelMaxMapArea: a,
                balloonShadow: false,
                balloonLayout: MyBalloonLayout,
                iconLayout: animatedLayout,
                balloonContentLayout: MyBalloonContentLayout,
                hideIconOnBalloonOpen: false,
                balloonOffset: [-100, -80]
            }),
            myPlacemark2 = window.myPlacemark = new ymaps.Placemark([37.256168, 28.286126], {
                balloonContent: [
                    '<div class="balloon-city">' +
                    '<div class="balloon-city__text">' +
                    '<div class="balloon-city__price">$250 000</div>' +
                    '<div class="balloon-city__rooms">2 спал, 1 ван</div>' +
                    '<div class="balloon-city__rooms_m">2 010 кв.м  <span>|</span>  2 спальни  <span>|</span>  1 ванна</div>' +
                    '<div class="balloon-city__address">Balbey, 431. Sk. No:4, 07040 Muratpaşa</div>' +
                    '<div class="balloon-city__square">1 250 кв.м</div>' +
                    '</div>' +
                    '<div class="balloon-city__img"> <img src="./img/favorites-2.png"></div>' +
                    '</div>',
                ].join('')
            }, {
                balloonPanelMaxMapArea: a,
                balloonShadow: false,
                balloonLayout: MyBalloonLayout,
                iconLayout: animatedLayout,
                balloonContentLayout: MyBalloonContentLayout,
                hideIconOnBalloonOpen: false,
                balloonOffset: [-100, -80]
            }),
            myPlacemark3 = window.myPlacemark = new ymaps.Placemark([36.355890, 29.260590], {
                balloonContent: [
                    '<div class="balloon-city">' +
                    '<div class="balloon-city__text">' +
                    '<div class="balloon-city__price">$250 000</div>' +
                    '<div class="balloon-city__rooms">2 спал, 1 ван</div>' +
                    '<div class="balloon-city__rooms_m">2 010 кв.м  <span>|</span>  2 спальни  <span>|</span>  1 ванна</div>' +
                    '<div class="balloon-city__address">Balbey, 431. Sk. No:4, 07040 Muratpaşa</div>' +
                    '<div class="balloon-city__square">1 250 кв.м</div>' +
                    '</div>' +
                    '<div class="balloon-city__img"> <img src="./img/favorites-2.png"></div>' +
                    '</div>',
                ].join('')
            }, {
                balloonPanelMaxMapArea: a,
                balloonShadow: false,
                balloonLayout: MyBalloonLayout,
                iconLayout: animatedLayout,
                balloonContentLayout: MyBalloonContentLayout,
                hideIconOnBalloonOpen: false,
                balloonOffset: [-100, -80]
            }),
            myPlacemark4 = window.myPlacemark = new ymaps.Placemark([36.923977, 30.711918], {
                balloonContent: [
                    '<div class="balloon-city">' +
                    '<div class="balloon-city__text">' +
                    '<div class="balloon-city__price">$250 000</div>' +
                    '<div class="balloon-city__rooms">2 спал, 1 ван</div>' +
                    '<div class="balloon-city__rooms_m">2 010 кв.м  <span>|</span>  2 спальни  <span>|</span>  1 ванна</div>' +
                    '<div class="balloon-city__address">Balbey, 431. Sk. No:4, 07040 Muratpaşa</div>' +
                    '<div class="balloon-city__square">1 250 кв.м</div>' +
                    '</div>' +
                    '<div class="balloon-city__img"> <img src="./img/favorites-2.png"></div>' +
                    '</div>',
                ].join('')
            }, {
                balloonPanelMaxMapArea: a,
                balloonShadow: false,
                balloonLayout: MyBalloonLayout,
                iconLayout: animatedLayout,
                balloonContentLayout: MyBalloonContentLayout,
                hideIconOnBalloonOpen: false,
                balloonOffset: [-100, -80]
            });
            function cal() {
                var balloon = document.querySelectorAll('.placemark')
                for(let i = 0; i < balloon.length; i++) {
                    balloon[i].classList.remove('active')
                }
            }
            // var balloon = myMap.balloon
            myMap.geoObjects.events
            myMap.behaviors.disable('scrollZoom')
            myMap.geoObjects
                .add(myPlacemark)
                .add(myPlacemark1)
                .add(myPlacemark2)
                .add(myPlacemark3)
                .add(myPlacemark4)
        });
    }
}
//map-city ballonPanel-size
var a
if (window.innerWidth > 1003)
    a = 0
else 
    a = Infinity
map_city_add(a)
window.addEventListener('resize', function(event){
    if(this.document.querySelectorAll('.city-col__item').length) {
        if(window.innerWidth > 1003) {
            if(a == 0 ) {
                myMap.destroy();
                map_city_add(0)
                a = Infinity
            }
        }
        if(window.innerWidth <= 1003) {
            if(a == Infinity) {
                myMap.destroy();
                map_city_add(Infinity)
                a = 0
            }
        }
    }
});
function destroyMap() {
    myMap.destroy();
    map_city_add(Infinity)
    myMap.container.fitToViewport();
}
if(document.querySelectorAll('#map-country').length) {
    ymaps.ready(function () {
        // Создание экземпляра карты и его привязка к созданному контейнеру.
        var myMap = new ymaps.Map('map-country', {
                center: [39.475851, 30.815585],
                zoom: 6,
                controls: [],
                behaviors: ['default', 'scrollZoom'],
    
            }, {
                searchControlProvider: 'yandex#search',
            }),
            // Создание макета балуна на основе Twitter Bootstrap.
            MyBalloonLayout = ymaps.templateLayoutFactory.createClass(
                '<div class="popover top">' +
                    '<a class="close" href="#">&times;</a>' +
                    '<div class="arrow"></div>' +
                    '<div class="popover-inner">' +
                    '$[[options.contentLayout observeSize minWidth=235 maxWidth=235 maxHeight=350]]' +
                    '</div>' +
                    '</div>', {
                    /**
                     * Строит экземпляр макета на основе шаблона и добавляет его в родительский HTML-элемент.
                     * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#build
                     * @function
                     * @name build
                     */
                    build: function () {
                        this.constructor.superclass.build.call(this);
    
                        this._$element = $('.popover', this.getParentElement());
    
                        this.applyElementOffset();
    
                        this._$element.find('.close')
                            .on('click', $.proxy(this.onCloseClick, this));
                    },
    
                    /**
                     * Удаляет содержимое макета из DOM.
                     * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#clear
                     * @function
                     * @name clear
                     */
                    clear: function () {
                        this._$element.find('.close')
                            .off('click');
    
                        this.constructor.superclass.clear.call(this);
                    },
    
                    /**
                     * Метод будет вызван системой шаблонов АПИ при изменении размеров вложенного макета.
                     * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
                     * @function
                     * @name onSublayoutSizeChange
                     */
                    onSublayoutSizeChange: function () {
                        MyBalloonLayout.superclass.onSublayoutSizeChange.apply(this, arguments);
    
                        if(!this._isElement(this._$element)) {
                            return;
                        }
    
                        this.applyElementOffset();
    
                        this.events.fire('shapechange');
                    },
    
                    /**
                     * Сдвигаем балун, чтобы "хвостик" указывал на точку привязки.
                     * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
                     * @function
                     * @name applyElementOffset
                     */
                    applyElementOffset: function () {
                        this._$element.css({
                            left: -(this._$element[0].offsetWidth / 2),
                            top: -(this._$element[0].offsetHeight + this._$element.find('.arrow')[0].offsetHeight)
                        });
                    },
    
                    /**
                     * Закрывает балун при клике на крестик, кидая событие "userclose" на макете.
                     * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
                     * @function
                     * @name onCloseClick
                     */
                    onCloseClick: function (e) {
                        e.preventDefault();
    
                        this.events.fire('userclose');
                    },
    
                    /**
                     * Используется для автопозиционирования (balloonAutoPan).
                     * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/ILayout.xml#getClientBounds
                     * @function
                     * @name getClientBounds
                     * @returns {Number[][]} Координаты левого верхнего и правого нижнего углов шаблона относительно точки привязки.
                     */
                    getShape: function () {
                        if(!this._isElement(this._$element)) {
                            return MyBalloonLayout.superclass.getShape.call(this);
                        }
    
                        var position = this._$element.position();
    
                        return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([
                            [position.left, position.top], [
                                position.left + this._$element[0].offsetWidth,
                                position.top + this._$element[0].offsetHeight + this._$element.find('.arrow')[0].offsetHeight
                            ]
                        ]));
                    },
    
                    /**
                     * Проверяем наличие элемента (в ИЕ и Опере его еще может не быть).
                     * @function
                     * @private
                     * @name _isElement
                     * @param {jQuery} [element] Элемент.
                     * @returns {Boolean} Флаг наличия.
                     */
                    _isElement: function (element) {
                        return element && element[0] && element.find('.arrow')[0];
                    }
                });
        // Создадим макет метки.

        var animatedLayout = ymaps.templateLayoutFactory.createClass(
            '<div class="placemark"></div>',
            {
                build: function () {
                    animatedLayout.superclass.build.call(this);
                    var element = this.getParentElement().getElementsByClassName('placemark')[0];
                    // Если метка выбрана, то увеличим её размер.
                    var size = this.isActive ? 60 : 34;
                    // При задании для метки своего HTML макета, фигуру активной области
                    // необходимо задать самостоятельно - иначе метка будет неинтерактивной.
                    // Создадим фигуру активной области "Круг".
                    var smallShape = {type: 'Circle', coordinates: [0, 0], radius: size / 2};
                    var bigShape = {type: 'Circle', coordinates: [0, -30], radius: size / 2};
                    // Зададим фигуру активной области.
                    this.getData().options.set('shape', this.isActive ? bigShape : smallShape);

                    if (!this.inited) {
                        this.inited = true;
                        this.isActive = false;
                        // При клике по метке будем перестраивать макет.
                        this.getData().geoObject.events.add('click', function (e) {
                            var marks = document.querySelectorAll('.placemark')
                            if(element.classList.contains("active")) {
                                element.classList.remove("active");
                            }
                            else {
                                for(let i = 0; i < marks.length; i++) {
                                    marks[i].classList.remove('active')
                                }
                                element.classList.add("active");
                            }
                        }, this);
                    }
                }
            }
        );
            // Создание вложенного макета содержимого балуна.
           var  MyBalloonContentLayout = ymaps.templateLayoutFactory.createClass(
                '<h3 class="popover-title">$[properties.balloonHeader]</h3>' +
                    '<div class="popover-content">$[properties.balloonContent]</div>'
            ),
            
            myPlacemark = window.myPlacemark = new ymaps.Placemark([40.938240, 29.260590], {
                balloonContent: [
                    'Турция, Анталия, 236 объектов'
                ].join('')
            }, {
                balloonPanelMaxMapWidth: 431520,
                balloonShadow: false,
                balloonLayout: MyBalloonLayout,
                iconLayout: animatedLayout,
                balloonContentLayout: MyBalloonContentLayout,
                hideIconOnBalloonOpen: false,
                balloonOffset: [-110, -50]
            }),
            myPlacemark1 = window.myPlacemark = new ymaps.Placemark([38.227547, 27.228730], {
                balloonContent: [
                    'Турция, Анталия, 236 объектов'
                ].join('')
            }, {
                balloonPanelMaxMapArea: 431520,
                balloonShadow: false,
                balloonLayout: MyBalloonLayout,
                iconLayout: animatedLayout,
                balloonContentLayout: MyBalloonContentLayout,
                hideIconOnBalloonOpen: false,
                balloonOffset: [-110, -50]
            }),
    
            myPlacemark2 = window.myPlacemark = new ymaps.Placemark([37.256168, 28.286126], {
                balloonContent: [
                    'Турция, Анталия, 236 объектов'
                ].join('')
            }, {
                balloonPanelMaxMapArea: 431520,
                balloonShadow: false,
                balloonLayout: MyBalloonLayout,
                iconLayout: animatedLayout,
                balloonContentLayout: MyBalloonContentLayout,
                hideIconOnBalloonOpen: false,
                balloonOffset: [-110, -50]
            }),
            myPlacemark3 = window.myPlacemark = new ymaps.Placemark([36.355890, 29.260590], {
                balloonContent: [
                    'Турция, Анталия, 236 объектов'
                ].join('')
            }, {
                balloonPanelMaxMapArea: 431520,
                balloonShadow: false,
                balloonLayout: MyBalloonLayout,
                iconLayout: animatedLayout,
                balloonContentLayout: MyBalloonContentLayout,
                hideIconOnBalloonOpen: false,
                balloonOffset: [-110, -50]
            }),
            myPlacemark4 = window.myPlacemark = new ymaps.Placemark([36.923977, 30.711918], {
                balloonContent: [
                    'Турция, Анталия, 236 объектов'
                ].join('')
            }, {
                balloonPanelMaxMapArea: 431520,
                balloonShadow: false,
                balloonLayout: MyBalloonLayout,
                iconLayout: animatedLayout,
                balloonContentLayout: MyBalloonContentLayout,
                hideIconOnBalloonOpen: false,
                balloonOffset: [-110, -50]
            });
            
            myMap.behaviors.disable('scrollZoom')
        myMap.geoObjects
            .add(myPlacemark)
            .add(myPlacemark1)
            .add(myPlacemark2)
            .add(myPlacemark3)
            .add(myPlacemark4)
    });
}

