<template lang="pug">
.wrapper
  .bannerPremium( :class="{'active':openBannerPremium}")
    .close(@click="openBannerPremium = false")
      img(src="@/assets/close.svg")
    .scroll
      .container
        img.logo(src="@/assets/logo.png")
        h1 Goroskop Premium
        p <b>Больше свободы,</b> эксклюзивные функции и x2 к точности прогнозов с подпиской <b>Goroskop Premium</b>
      .list
          .block 
            h3 Ежедневная активность
            ul
              li
                img(src="@/assets/premiumImg/icon1.png")
                .info
                  .title Маникюр
                  .desc Благоприятные дни для маникюра
              li
                img(src="@/assets/premiumImg/icon2.png")
                .info
                  .title Интим
                  .desc Благоприятные дни для любви
              li
                img(src="@/assets/premiumImg/icon3.png")
                .info
                  .title Бизнес
                  .desc Благоприятные дни для сделок
              li
                img(src="@/assets/premiumImg/icon4.png")
                .info
                  .title Спа процедуры
                  .desc Благоприятные дни для ухаживания за телом 
              li
                img(src="@/assets/premiumImg/icon5.png")
                .info
                  .title Творческая активность
                  .desc Благоприятные дни для творения 
              li
                img(src="@/assets/premiumImg/icon6.png")
                .info
                  .title Личная жизнь
                  .desc Благоприятные дни для развития отношений             
          .block 
            h3 Прогнозы
            ul
              li
                img(src="@/assets/premiumImg/icon7.png")
                .info
                  .title Прогноз по финансам
                  .desc Ежедневные рекомендации по финансам
              li
                img(src="@/assets/premiumImg/icon8.png")
                .info
                  .title Прогноз по здоровью
                  .desc Расчет здоровья и настроения на день
              li
                img(src="@/assets/premiumImg/icon9.png")
                .info
                  .title Прогноз по важным событиям
                  .desc Расчет событий на день, неделю, месяц
              li
                img(src="@/assets/premiumImg/icon10.png")
                .info
                  .title Прогноз по покупкам/продажам
                  .desc Благоприятные дни для покупок и продаж 
          .block 
            h3 Дополнительные функции
            ul
              li
                img(src="@/assets/premiumImg/icon11.png")
                .info
                  .title Отключение рекламы
                  .desc Полное отсутствие рекламы от Google и Yandex 
              li
                img(src="@/assets/premiumImg/icon12.png")
                .info
                  .title Персональная иконка
                  .desc Создадим вам иконку приложения под ваше имя и знак зодиака
              li
                img(src="@/assets/premiumImg/icon13.png")
                .info
                  .title Открытие всех 12 знаков зодиака
                  .desc Вам откроются все знаки, сможете смотреть расчеты по родным, близким и друзьям
              li
                img(src="@/assets/premiumImg/icon14.png")
                .info
                  .title Уникальный фон под настроение
                  .desc Красивые обои приложения, меняйте тему в 1 клик 
              li
                img(src="@/assets/premiumImg/icon15.png")
                .info
                  .title В 2 раза больше информации
                  .desc По вашему асценденту, луне и солнцу  
              li
                img(src="@/assets/premiumImg/icon16.png")
                .info
                  .title Уникальный дизайн вашего знака
                  .desc Создадим +3 уникальных дизайна вашему знаку на выбор
              li
                img(src="@/assets/premiumImg/icon16.png")
                .info
                  .title Разбор судьбы в подарок
                  .desc Расчет от старшего астролога, по вашему предназначению, личной жизни, финансам, здоровью, прогнозу на год

      .infoblock Бесплатная версия <b>Goroskop 108</b> предлагает больше, чем любое другое приложение, а <b> с подпиской Goroskop Premium</b> Ваши возможности станут еще шире.
      .buttonblock
        button.btn1 Попробовать 3 дня бесплатно
        button.btn2 Подключить всего за 299₽ в месяц 
  .changeSymbolMenu( :class="{'close':activeSybmol}")
    .container
      h1 Выберите знак
      ul
        li(v-for="s in Symbols" :key="s.name" v-bind:data-symbol="s.name" class="symbolItem") 
          img( :src="getImgSybmol(s.name)"  v-bind:data-symbol="s.name" )
          div( v-bind:data-symbol="s.name" )
            .name( v-bind:data-symbol="s.name" ) {{s.name}}
            .date( v-bind:data-symbol="s.name" ) {{s.date}}
  .header( :class=`{'mini':pageStyle.headerApp.mini === true} `)
    .icon.activeSymbolIcon(@click="activeSybmol = false")
      .background
        img(:src="getImgSybmol(activeSybmol)")
    .info(@click="activeSybmol = false") 
      .title {{activeSybmol}}
      .button Выбрать знак
  .content
    .container(v-if="infoCart && activeSybmol")
      .tabs
        ul
          li(data-day="0" :class="{'active':activeDay==0}") Cегодня
          li(data-day="1" :class="{'active':activeDay==1}") Завтра
          li(data-day="2" :class="{'active':activeDay==2}") Неделя
          li(data-day="3" :class="{'active':activeDay==3}") Месяц 
      .card.info-cart
        .button-more 
          p Читать больше
        h1 {{infoCart[activeSybmolNymber].main_cart.title}}
        .diagrams 
          .diagram.d1(:data-number="infoCart[activeSybmolNymber].diagram[0]")
            .number {{infoCart[activeSybmolNymber].diagram[0]}}
            .title Здоровье
            .canvas
              svg.chart(width="100" height="100" viewBox="0 0 50 50")
                circle.unit(r="15.9" cx="50%" cy="50%")
                circle.unit(r="15.9" cx="50%" cy="50%")
          .diagram.d2(:data-number="infoCart[activeSybmolNymber].diagram[1]")
            .number {{infoCart[activeSybmolNymber].diagram[1]}}
            .title Любовь
            .canvas
              svg.chart(width="100" height="100" viewBox="0 0 50 50")
                circle.unit(r="15.9" cx="50%" cy="50%")
                circle.unit(r="15.9" cx="50%" cy="50%")
          .diagram.d3(:data-number="infoCart[activeSybmolNymber].diagram[2]")
            .number {{infoCart[activeSybmolNymber].diagram[2]}}
            .title Карьера
            .canvas
              svg.chart(width="100" height="100" viewBox="0 0 50 50")
                circle.unit(r="15.9" cx="50%" cy="50%")
                circle.unit(r="15.9" cx="50%" cy="50%")
        p(v-html="infoCart[activeSybmolNymber].main_cart.content")

      .card.info-cart.icart(v-for="card in infoCart[activeSybmolNymber].other_carts" :key="card.name")
        .button-more 
          p Читать больше
        h1 {{card.title}}
        p(v-html="card.content")
      
      .card.actives
        h1 Активности
        ul
          li(v-for="actives in infoCart[activeSybmolNymber].actives" :key="actives.title" :class="{good: actives.status == 1, bad: actives.status == 2, neutral: actives.status == 3, premium: !actives.access && !premiumAccount}")
            .bg
              p.title {{actives.title}}
              p.desc(v-if="actives.status == 1 && (actives.access || premiumAccount)") Хороший день
              p.desc(v-if="actives.status == 2 && (actives.access || premiumAccount)") Плохой день
              p.desc(v-if="actives.status == 3 && (actives.access || premiumAccount)") Нейтральный день
              p.desc.openPremiumBanner(v-if="!actives.access && !premiumAccount") Доступно по подписке
      .card.comment
        h1 Понравился разбор?
        button Оставьте отзыв
      .card.myaddbanner
        img(src="@/assets/РазборСудьбы.jpg")
       
</template>

<script>


export default {
  name: 'Home',
  data() {
    return {
      openBannerPremium: false,
      premiumAccount: false,
      changeSybmol: false,
      activeSybmol: false,
      activeSybmolNymber: 0,
      activeDay: 1,
      pageStyle: {
        headerApp: {mini: false},
      },
      infoCart: {
        
      },
      infoCartDay0: {},
      infoCartDay1: {},
      infoCartDay2: {},
      infoCartDay3: {},
      Symbols: [
        {name: "Козерог", date: "20 января - 16 февраля"},
        {name: "Водолей", date: "16 февраля - 11 марта"},
        {name: "Рыбы", date: "11 марта - 18 Апреля"},
        {name: "Овен", date: "18 апреля - 13 мая"},
        {name: "Телец", date: "13 мая - 21 июня"},
        {name: "Близнецы", date: "21 июня - 20 июля"},
        {name: "Рак", date: "20 июля - 10 августа"},
        {name: "Лев", date: "10 августа - 16 сентября"},
        {name: "Дева", date: "16 сентября - 30 октября"},
        {name: "Весы", date: "30 октября - 23 ноября"},
        {name: "Скорпион", date: "23 ноября - 17 декабря"},
        {name: "Стрелец", date: "17 декабря - 20 января"},
      ]
    }
  },
  watch: {
     activeSybmol:  function(val){
      console.log(val);
      this.changeSybmol = true;
      let _this = this
      _this.activeSybmolNymber = _this.infoCartDay1.findIndex(x => x.name == val);
    },
    activeDay: function(){
      this.changeSybmol = true;
    }
  },
  methods: {
    // isEmptyObject: function (obj) {
    //   for (var i in obj) {
    //       if (obj.hasOwnProperty(i)) {
    //           return false;
    //       }
    //   }
    //   return true;
    // },
    scrollHandle: function(e) {
        var top = e.srcElement.scrollingElement.scrollTop; // Получить высоту прокрутки страницы
        if (top > 25) {
          this.pageStyle.headerApp.mini = true;
        } else {
          this.pageStyle.headerApp.mini = false;
        }
      },
    loadInfo: function(){
      if(JSON.parse(localStorage.getItem('symbols_info0'))) {
          let info = JSON.parse(localStorage.getItem('symbols_info0'));
          this.infoCartDay0 = info;
      } else {
          this.downloadInfo();
      }
      if(JSON.parse(localStorage.getItem('symbols_info1'))) {
          let info = JSON.parse(localStorage.getItem('symbols_info1'));
          this.infoCartDay1 = info;
      } else {
          this.downloadInfo();
      }
      if(JSON.parse(localStorage.getItem('symbols_info2'))) {
          let info = JSON.parse(localStorage.getItem('symbols_info2'));
          this.infoCartDay2 = info;
      } else {
          this.downloadInfo();
      }
      if(JSON.parse(localStorage.getItem('symbols_info3'))) {
          let info = JSON.parse(localStorage.getItem('symbols_info3'));
          this.infoCartDay3 = info;
      } else {
          this.downloadInfo();
      }
    },
    downloadInfo: async function(){
      localStorage.removeItem('symbols_info0');
      //     /-app108/data0.json
      let info =  await fetch("/-app108/data0.json").then((res) => res.json()).then(json => this.infoCartDay0 = json.symbols_info);
      this.infoCartDay0 = JSON.stringify(info);
      localStorage.setItem('symbols_info0', JSON.stringify(info));

      localStorage.removeItem('symbols_info1');
      info =  await fetch("/-app108/data1.json").then((res) => res.json()).then(json => this.infoCartDay1  = json.symbols_info);
      this.infoCartDay1 = JSON.stringify(info);
      localStorage.setItem('symbols_info1', JSON.stringify(info));

      localStorage.removeItem('symbols_info2');
      info =  await fetch("/-app108/data2.json").then((res) => res.json()).then(json => this.infoCartDay2  = json.symbols_info);
      this.infoCartDay2 = JSON.stringify(info);
      localStorage.setItem('symbols_info2', JSON.stringify(info));

      localStorage.removeItem('symbols_info3');
      info =  await fetch("/-app108/data3.json").then((res) => res.json()).then(json => this.infoCartDay3  = json.symbols_info);
      this.infoCartDay3 = JSON.stringify(info);
      localStorage.setItem('symbols_info3', JSON.stringify(info));
    },

    openMoreCard: function(e){
      e.srcElement.parentNode.parentNode.classList.remove('big');
    },
    closeChangeSybmol: function(e){
      this.activeSybmol = e.srcElement.dataset.symbol;
    },
    getImgSybmol(pic) {
      if (pic)
        return require('@/assets/SVG/' + pic + '.svg');
      else
        return false
    },
    closeCart(){
      // Кнопка показать больше
      
        let infoCart = window.document.getElementsByClassName('icart');
        let length = infoCart.length;
        let _this = this
        for (let i = 0; i < length; i++) {
          let height = infoCart[i].clientHeight
          if (height > 300) {
            infoCart[i].classList.add('big');
          }
          infoCart[i].addEventListener('click', _this.openMoreCard)
        }
      
      
      console.log('Карты свернуты')
    },
    setDiagram(){
      let diagram = window.document.getElementsByClassName('diagram');
      for (let i = 0; i < diagram.length; i++) {
        let number = diagram[i].dataset.number;
        console.log(number);
        diagram[i].childNodes[2].firstChild.firstChild.setAttribute('style', 'stroke-dasharray: '+number+' 100;');
      }
      console.log(diagram);
    },
    setOpenPremiumBanner(){
      let el = window.document.getElementsByClassName('openPremiumBanner');
      let _this = this;
      console.log(el);
      for (let i = 0; i < el.length; i++) {
        console.log(el[i]);
        el[i].addEventListener('click', function(){_this.openBannerPremium = true})
      }
      
    },
    setTabs(){
      if (window.document.getElementsByClassName('tabs').length){
        let tabs = window.document.getElementsByClassName('tabs')[0].childNodes[0].childNodes;
        
        let _this = this;
        for (let i = 0; i < tabs.length; i++){
          tabs[i].addEventListener('click', _this.changeDay);
        }
      }
         
    },
    changeDay(e){
      this.activeDay = e.srcElement.dataset.day;
      this.changeSybmol = true;
    }
  },
  mounted(){    
    window.addEventListener('scroll', this.scrollHandle); // привязываем событие прокрутки страницы
    
    // Выбор знака
    let symbols = window.document.getElementsByClassName('symbolItem');
    
    for (let i = 0; i < symbols.length; i++) {
      symbols[i].addEventListener('click', this.closeChangeSybmol, false)
    }
    this.loadInfo();
    if (this.activeDay == 0)
        this.infoCart = this.infoCartDay0;
      if (this.activeDay == 1)
        this.infoCart = this.infoCartDay1;
      if (this.activeDay == 2)
        this.infoCart = this.infoCartDay2;
      if (this.activeDay == 3)
        this.infoCart = this.infoCartDay3;
   
  },
  updated(){
    if (this.changeSybmol){
      if (this.activeDay == 0)
        this.infoCart = this.infoCartDay0;
      if (this.activeDay == 1)
        this.infoCart = this.infoCartDay1;
      if (this.activeDay == 2)
        this.infoCart = this.infoCartDay2;
      if (this.activeDay == 3)
        this.infoCart = this.infoCartDay3;

      this.closeCart();
      this.setTabs();
      this.setOpenPremiumBanner();
      this.changeSybmol = false;
    }
    this.setDiagram();
  }
}
</script>

<style lang="stylus">

@keyframes rotate {
  from {
    transform: rotate(0deg)
  }
  
  to {
    transform: rotate(360deg)
  }
}

@keyframes backrotate {
  from {
    transform: rotate(360deg)
  }
  
  to {
    transform: rotate(0deg)
  }
}

@keyframes render {
  0% {
    stroke-dasharray: 0 100;
  }
}

.wrapper
  background conic-gradient(from 192.67deg at 50% 24.24%, #73669F 0deg, #BDB5F1 99.37deg, #ECB9C2 260.62deg, #73669F 360deg);
  min-height 100vh
  height 100%
  overflow hidden
  padding-bottom 70px
  
  .bannerPremium
    position fixed
    background #f0f0f0
    z-index 99999
    width 100%
    height 100%
    top 0
    left -100%
    transition 0.7s
    

    .close 
      width 40px
      height 40px
      position absolute
      right 10px
      top 10px

    .scroll
      overflow-y scroll
      height 100%
      
      .container 
        padding 0 15px
        display flex
        justify-content center
        flex-flow column nowrap
        align-items: center;

        .logo
          margin-top: 70px 
          margin-bottom 20px
          max-width 200px
        
        h1
          margin-bottom 20px

        p 
          max-width 75%
          text-align center

      .list
        background #fff
        width 100%
        padding-top 30px
        margin-top 30px
        border-top-left-radius 10px
        border-top-right-radius 10px

        .block
          border-bottom 2px solid #f0f0f0
          margin-bottom 20px
          padding 0 0 0 30px 
          padding-bottom 20px


          h3
            margin-left 60px
            margin-bottom 10px
          ul
            li
              margin-top 10px
              display grid
              grid-template-columns: 60px 1fr; 
              
              img
                width 40px
                height 40px
                margin-top 10px
                margin-right 20px
              .info
                border-top 2px solid #f0f0f0
                padding-top 10px
                padding-right 30px
                .title
                  font-weight 600
                  margin-bottom 3px
                .desc
                  opacity 0.6
    .infoblock
      padding 20px 30px 30px
      text-align center

    .buttonblock
      background #fff
      padding 10px 30px 50px  

      button
        width 100%
        background linear-gradient(90deg ,#a14fcd,#d54e79) 
        border none
        padding 20px 10px 
        margin-bottom 10px
        color #fff
        font-weight 600
        font-size 16px
        border-radius 10px
      
      button.btn2
        background linear-gradient(270deg ,#a14fcd,#d54e79) 
  
  .bannerPremium.active
    left 0

  .changeSymbolMenu
    position fixed
    background url('../assets/changeSymbolBG.jpg')
    z-index 99999
    width 100%
    height 100%
    top 0
    left 0
    transition 0.7s
    
    .container 
      width 100%
      height 100vh
      padding 40px 0
      color #fff

      h1 
        font-style: normal;
        font-weight: 900;
        font-size: 30px;
        line-height: 35px;
        text-align: center;
        text-transform: uppercase;
        text-align: center
        height 5%

      ul
        margin-top 30px
        overflow-y scroll
        height 95%
        display flex
        flex-direction column
        align-items: center

        li
          display flex
          align-items center
          margin-bottom: 30px
          width 80%

          img 
            width 65px
            height auto
            margin-right 20px

          div
            .name 
              font-style: normal;
              font-weight: 700;
              font-size: 24px;
              line-height: 28px;
              text-transform: uppercase;
            
            .date 
              font-style: normal;
              font-weight: 500;
              font-size: 18px;
              line-height: 21px;
              text-transform: uppercase;
              opacity .6
  .changeSymbolMenu.close
    left -100%

  .header
    background  url('../assets/header-bg.png'), linear-gradient(276.73deg, #C971B1 23.77%, #73669F 69.71%)
    background-position center
    background-size cover
    border-bottom-left-radius 150% 40px
    border-bottom-right-radius 150% 40px
    display flex
    padding-bottom 30px
    padding-top 30px
    padding-left 15px
    padding-right 15px
    width 100%
    position fixed
    top 0 
    left 0
    z-index 99

    .icon
      transform scale(1)
      transition 0.7s
      height 115px
      width 115px

      .background
        background url('../assets/icon-bg.png')
        background-size cover
        height 115px
        width 115px
        border 3px solid #fff
        border-radius 50%
        display flex
        justify-content center
        align-items center
        animation rotate
        animation-duration 30s
        animation-iteration-count: infinite;

        img
            width 60%
            height 60%
            animation backrotate
            animation-duration 30s
            animation-iteration-count: infinite;

      .background::after
        content ' ';
        width 127px
        height 127px
        position absolute
        background url('../assets/icon-effect.svg')
        background-size contain
        animation rotate
        animation-duration 10s, 5s, 24s, 3s
        animation-iteration-count: infinite;

    .info
      margin-left 25px
      .title
        font-style: normal;
        font-weight: 500;
        font-size: 40px;
        line-height: 47px;
        color: #FFFFFF;
      
      .button
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 23px;
        color: #E9C097;
  .content
    width 100%
    padding-top: 200px

    .container
      width 100%
      padding 0 15px

      .tabs
        ul
          list-style none
          display: flex
          margin-bottom -7px

          li
            width: 25%
            text-align center
            background-color #fff
            padding-top: 10px 
            padding-bottom: 13px
            border-top-left-radius 7px
            border-top-right-radius 7px
            opacity 0.3

          li.active 
            opacity 1 


      .card
        width 100%
        background-color #fff
        padding 20px
        border-radius 7px
        color #545454
        margin-bottom 20px
        position relative
        transition 1.5s
        max-height 1000px

        .diagrams
          display flex
          justify-content space-between
          margin-bottom 30px
          .diagram
            transform: rotate(-90deg)
            width 100px
            position relative
            .number
              transform: rotate(90deg) translate(-50%, 50%);
              position: absolute;
              left: 50%;
              top: 50%;
              height: 20px;
              width: 20px;
              text-align: center;
              line-height: 25px;
            .title 
              transform: rotate(90deg) translate(50%, 50%);
              position: absolute;
              left: -42%;
              bottom: 50%;
              text-transform: uppercase;
              text-align: center;
              width: 100%;
              height: 100%;
              font-size: 14px;
            .canvas
              display: flex;
              justify-content: space-between;
              align-items: center;
              .chart
                .unit 
                  fill: none;
                  stroke-width: 3;
                  cursor: pointer;
                  animation-name: render;
                  animation-duration: 1.5s;
                  transition-property: all; 
                  transition-duration: 1.5s;

                .unit:nth-child(1) 
                  stroke: #9DC962;
                  stroke-dasharray: 75 100; 
                .unit:nth-child(2) 
                  stroke: #9DC962;
                  opacity: 0.3;
                  stroke-dasharray: 100 100;
          
          .diagram.d1
            .unit
              stroke: #FDB535 !important
            .title
              color #FDB535 !important
          .diagram.d2
            .unit
              stroke: #EF9EFB !important
            .title
              color #EF9EFB !important
          .diagram.d3
            .unit
              stroke: #9CCC5D !important
            .title  
              color #9CCC5D !important

        .button-more
          position absolute
          bottom 0
          left 0
          width 100%
          text-align center
          background linear-gradient(0deg, rgba(256, 256, 256, 1), rgba(256, 256, 256, 0))
          padding-top 150px
          padding-bottom 5px
          border-radius 7px
          display none

          p 
            text-transform uppercase
            color #8C2799

        h1 
          font-size 25px
          margin-bottom: 20px
        p 
          margin-bottom 10px
      .card.myaddbanner
        padding 0
        height auto
        display flex
        img
          width 100%
          height auto
          margin 0
          border-radius inherit 

      .card.comment
          button
            width 100%
            background: radial-gradient(188% 1836% at 33.06% 0%, #C971B1 0%, #73669F 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 7px;
            padding 10px
            border none
            color #fff
            font-size 20px
            font-weight 600

      .card.actives
        ul
          list-style none
          li
            margin-bottom 15px
            position relative
            .bg
              padding 5px 10px
              background: #cae0ff;
              border-radius 5px
              margin-left: 35px
              position relative
              p.title 
                font-style: normal;
                font-weight: 700;
                font-size: 16px;
                line-height: 18px;
                margin-bottom: 3px;
              p.desc
                font-style: normal;
                font-weight: 300;
                font-size: 12px;
                line-height: 14px;
                color: #A3A3A3;
                text-transform: uppercase;
                margin-bottom: 0px
            .bg::before
              content: ' ';
              height: 10px;
              width: 10px;
              display: block;
              background: #cae0ff;
              position: absolute;
              top: 11px;
              left: -5px;
              transform: rotate(45deg);
          li::before
            content: ' ';
            height: 20px;
            width: 20px;
            display: block;
            background: red;
            border-radius: 50%;
            position: absolute;
            top 6px

          li.good::before
            background: #AEED7D
          li.bad::before
            background: #ED917D
          li.neutral::before
            background: #8E8A89
          li.premium::before 
            content: '?'; 
            background: none
            border 1px solid #8E8A89
            color: #8E8A89
            text-align center
      .card.big 
        max-height 300px
        overflow hidden
        transition 1.5s


        .button-more
          display block

  .header.mini
    border-bottom-left-radius 0
    border-bottom-right-radius 0
    padding-top 10px
    padding-bottom 10px

    .icon
      transform scale(0)
      height 0
      width 0

    .info
      margin-left 0px
  
</style>
