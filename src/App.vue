<template lang="pug">
#app
  <router-view/>
  .nav
    ul
      li Прогноз
      li Блог
      li Персональный разбор
      li Премиум
      li Еще
</template>

<style lang="stylus">
*
  padding 0
  margin 0
  box-sizing border-box
#app
  font-family Arial, Helvetica, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
 

  .nav
    width 100%
    height 70px
    background: #fff
    position fixed
    bottom: 0
    left: 0

    ul 
      display: flex
      list-style: none
      align-items: center
      justify-content center
      height 100%

      li  
        width 20%
        text-align: center
        font-size 14px


</style>
