# 礼品商城重构

本次项目源于我之前做的一个商城，不过之前的商城由于种种原因，使用jquery加php混编的方式开发，交互简陋，维护复杂，趁着闲暇时间使用webpack+vue+vuex+vue-router+vux+mint-ui+sass+es6进行重新开发，本人之后会不断进行优化...

    src
    │  App.vue
    │  main.js
    │  
    ├─common
    │  ├─css
    │  │      loading.scss
    │  │      pxToRem.scss
    │  │      reset.css
    │  │      
    │  ├─images
    │  │      adv01.png
    │  │      adv02.png
    │  │      adv03.png
    │  │      banner.png
    │  │      details0.png
    │  │      details1.png
    │  │      
    │  ├─img
    │  │      close.png
    │  │      d-gwc.png
    │  │      d-weixin.png
    │  │      discounts-card.png
    │  │      feiji0.gif
    │  │      feiji1.gif
    │  │      go_dingdan.png
    │  │      go_gerenzhongxin.png
    │  │      go_gouwuche.png
    │  │      go_gouwuka.png
    │  │      go_shopcard.png
    │  │      go_weixin.png
    │  │      go_zhuye.png
    │  │      m-right.png
    │  │      my-mall.png
    │  │      shell-exchange.png
    │  │      shopping-car.png
    │  │      shopping-card.png
    │  │      weixinkefu.png
    │  │      
    │  └─js
    │          ball.animate.js
    │          custom.js
    │          
    ├─components
    │      ball.vue
    │      
    ├─data
    │      goodsDetails.json
    │      index.json
    │      
    ├─page
    │      error.vue
    │      goodDetails.vue
    │      index.vue
    │      specBox.vue
    │      specChoose.vue
    │      
    ├─router
    │      index.js
    │      
    ├─store
    │  │  index.js
    │  │  mutation-types.js
    │  │  
    │  └─modules
    │          cart.js
    │          details.js
    │          main.js
    │          
    └─utils
            http.js
            
