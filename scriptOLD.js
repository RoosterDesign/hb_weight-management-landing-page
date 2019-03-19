<style>
  #content > div:nth-of-type(1) > div:nth-of-type(1) {
    display: none;
  }

  #weight-management-campaign {
    display: block;
    margin: 0 auto;
    width: 100%;
    position: relative;
    background-image: url(/__ssobj/static/ww-intro-background.jpg);
    background-position: center 59%;
    background-repeat: no-repeat;
    background-size: 100%;
  }

  #weight-management-campaign h1 {
    text-align: center;
    margin-bottom: 50px;
    font-weight: 100;
    font-size: 54px;
    color: #3B3B3B;
    letter-spacing: 0;
  }

  #weight-management-campaign p small {
    display: block;
    text-align: left;
    font-weight: bold;
  }

  #weight-management-campaign p small em {
    font-weight: normal;
  }

  #weight-management-campaign > p {
    font-size: 25px;
    color: #8B8B8B;
    letter-spacing: 0;
    line-height: 30px;
    font-weight: 300;
    width: 55%;
    text-align: center;
    margin: 0 auto;
    position: relative;
  }

  #weight-management-campaign > p span {
    font-size: 75px;
    position: absolute;
    font-family: Georgia, Helvetica, Sans-serif;
  }

  #weight-management-campaign > p span:first-of-type {
    top: -3px;
    left: -27px;
  }

  #weight-management-campaign > p span:last-of-type {
    float: right;
    margin-left: 10px;
    display: inline-block;
    margin-top: 23px;
  }

  .weight-management-campaign-carousel {
    position: relative;
  }

  .weight-management-campaign-carousel img {
    display: block;
    margin: 0 auto;
  }

  .weight-management-campaign-product-list {
    display: none;
  }

  .weight-management-campaign-hero {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    border-bottom: 1px solid #eaeaea;
    padding: 30px 10px;
    background: #fff;
    position: relative;
    overflow: hidden;
  }

  .weight-management-campaign-hero span.weight-management-campaign-promo {
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    width: 155px;
    top: 32px;
    left: -35px;
  }

  .weight-management-campaign-hero:nth-child(even) span.weight-management-campaign-promo {
    right: -38px;
    left: auto;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  .weight-management-campaign-hero aside {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 65%;
    flex: 0 0 65%;
  }

  .weight-management-campaign-hero img {
    border-radius: 30px;
    display: inline-block;
    margin-left: -20px;
  }

  .weight-management-campaign-hero p {
    font-size: 14px;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    margin-top: 15px;
    color: #565656;
  }

  .weight-management-campaign-hero span {
    display: inline-block;
  }

  .weight-management-campaign-hero span:nth-of-type(2) {
    font-size: 16px;
    font-weight: bold;
  }

  .weight-management-campaign-hero:nth-of-type(even) {
    background: -webkit-gradient(linear, left top, left bottom, from(#f7f4f4), to(#fff));
    background: linear-gradient(#f7f4f4, #fff);
  }

  .weight-management-campaign-hero a {
    font-size: 17px;
    color: #0a623f;
    display: block;
  }

  .weight-management-campaign-hero button {
    width: 140px;
  }

  .weight-management-campaign_star_ratings {
    background-image: url(/__ssobj/static/ratings-stars-18px.png);
    background-position: left top;
    background-repeat: repeat-x;
    height: 18px;
    display: block;
    width: 98px;
    position: relative;
  }

  .weight-management-campaign_rating {
    background-image: url(/__ssobj/static/ratings-stars-18px.png);
    background-position: left -18px;
    background-repeat: repeat-x;
    height: 18px;
    display: block;
    content: '';
    width: 50px;
    max-width: 98px;
  }

  .weight-management-campaign-meta {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 5px 0 10px;
  }

  .weight-management-campaign-mainmenu-container {
    background: -webkit-gradient(linear, left top, left bottom, from(#609e8e), to(#386d60));
    background: linear-gradient(#609e8e, #386d60);
    border-bottom: 1px solid #ffffff;
    -webkit-box-shadow: 0 8px 20px #0000001a;
    box-shadow: 0 8px 20px #0000001a;
    -webkit-transition: position .5s ease-out;
    transition: position .5s ease-out;
  }

  .weight-management-campaign-mainmenu {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: space-evenly;
    -ms-flex-pack: space-evenly;
    justify-content: space-evenly;
    list-style: none;
    margin: 0 auto;
    padding: 10px 0;
    position: relative;
    clear: both;
    z-index: 999;
  }

  .weight-management-campaign-mainmenu li {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    text-align: center;
  }

  .weight-management-campaign-mainmenu li.selected a {
    background: -webkit-gradient(linear, left top, left bottom, from(#fff), to(#ffd025));
    background: linear-gradient(#fff, #ffd025);
    border-bottom: 2px solid #ffb84d;
  }

  .weight-management-campaign-mainmenu a {
    background: -webkit-gradient(linear, left top, left bottom, from(#fff), to(#ececec));
    background: linear-gradient(#fff, #ececec);
    border-radius: 20px;
    -webkit-box-shadow: 0 4px 0 #3e5d55;
    box-shadow: 0 4px 0 #3e5d55;
    display: block;
    font-size: 16px;
    padding: 7px 0;
    position: relative;
    top: -1px;
    font-family: Georgia, Sans-serif;
    border-bottom: 2px solid #eaeaea;
    -webkit-transition: all 1s ease-in-out;
    transition: all 1s ease-in-out;
  }

  .weight-management-campaign-mainmenu a:hover {
    text-decoration: none;
  }

  .fix-weight-management-campaign-menu {
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 999;
  }

  .weight-management-campaign-menu-placeholder {
    content: '';
    display: none;
    height: 58px;
    width: 100%;
  }

  .weight-management-campaign-tips h3,
  .weight-management-campaign-product-list h3,
  .weight-management-campaign-advice h3,
  .weight-management-campaign-carousel-container h3 {
    font-family: Georgia, Sans-serif;
    font-size: 30px;
    text-align: center;
    font-weight: normal;
    color: #3a6e62;
    margin: 0 0 20px;
    position: relative;
    z-index: 10;
  }

  .weight-management-campaign-tips ul {
    list-style: none;
    margin: 0;
    padding: 0 10px;
    position: relative;
    z-index: 10;
  }

  .weight-management-campaign-tips ul li {
    font-size: 14px;
    text-align: left;
    padding: 13px 13px 13px 50px;
    background-color: rgba(255, 255, 255, 0.8);
    color: #565656;
    position: relative;
  }

  .weight-management-campaign-tips ul li:not(:last-of-type) {
    border-bottom: 1px dashed #e4e4e4;
  }

  .weight-management-campaign-tips__icon {
    color: #269b6f;
    left: 15px;
    position: absolute;
    top: 25px;
  }

  .weight-management-campaign-section-blurb {
    font-family: Georgia, Sans-serif;
    width: 85%;
    text-align: center;
    margin: 0 auto 40px;
    color: #696969;
    position: relative;
    z-index: 10;
  }

  .weight-management-campaign-article-thumbnail {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin: 0 auto 20px;
    -webkit-box-shadow: 0 8px 10px #0000000d;
    box-shadow: 0 8px 10px #0000000d;
  }

  .weight-management-campaign-article-thumbnail.weight-management-campaign-health-hub-article {
    background-color: #fff;
    background-size: 60%;
  }

  .weight-management-campaign-articles-slider a {
    font-size: 18px;
    font-family: Georgia, Sans-serif;
    color: #0a623f;
  }

  .weight-management-campaign-articles-slider p {
    font-size: 14px;
    margin-top: 15px;
    color: #464646;
  }

  .weight-management-campaign-articles-slider .slick-arrow {
    top: 58px;
  }

  .slick-slide {
    width: 200px;
  }

  .weight-management-campaign-carousel .slick-slide {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    border: 1px solid #eee;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 10px;
    border-radius: 5px;
    position: relative;
  }

  .weight-management-campaign-carousel .slick-slide a {
    font-size: 14px;
    display: block;
    margin-top: 20px;
    min-height: 55px;
    color: #3f796a;
    text-align: left;
  }

  .weight-management-campaign-carousel .slick-slide:focus {
    outline: none;
  }

  .weight-management-campaign-carousel .slick-slide button,
  .quickAdd {
    padding: 4px 8px;
    border-radius: 20px;
    -webkit-box-shadow: none;
    box-shadow: none;
    background-color: #106847;
    font-size: 13px;
    height: 38px;
    margin: 0;
  }

  .weight-management-campaign-carousel .slick-slide button {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
  }

  .weight-management-campaign-carousel .slick-slide button:active,
  .weight-management-campaign-carousel .slick-slide button:hover,
  .weight-management-campaign-carousel .slick-slide button:visited {
    outline: none;
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  .weight-management-campaign-carousel .slick-slide i {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 28px;
    color: #3f796a;
    z-index: 99;
  }

  .weight-management-campaign-carousel .slick-slide p.product-info {
    position: absolute;
    top: 0;
    width: 90%;
    height: 100%;
    display: none;
    margin: 0;
    background: #fffffff5;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-size: 15px;
    padding: 65px 0;
    z-index: 9;
  }

  .weight-management-campaign-carousel .slick-slide .weight-management-campaign-product-price {
    font-size: 15px;
    font-weight: bold;
  }

  .slick-arrow, .slick-arrow:active, .slick-arrow:hover {
    -webkit-box-shadow: none;
    box-shadow: none;
    background: #ffffff82;
    border-radius: 50%;
    height: 35px;
    width: 35px;
  }

  .slick-prev, .slick-prev:active {
    left: 2%;
  }

  .slick-next, .slick-next:active {
    right: 2%;
  }

  .slick-prev:before {
    left: 12px;
  }

  .slick-next:before {
    right: 12px;
  }

  .weight-management-campaign-advice,
  .weight-management-campaign-carousel-container {
    padding: 40px 0 50px;
    border-top: 1px solid #eee;
  }

  .in-progress:before {
    content: '';
    display: inline-block;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-left-color: #fff;
    -webkit-animation: quick-order-loading 1500ms infinite linear;
    animation: quick-order-loading 1500ms infinite linear;
  }

  .weight-management-campaign-promo {
    position: absolute;
    background: #ED028B;
    top: 160px;
    width: 90%;
    text-align: center;
    font-weight: bold;
    font-size: 12px;
    padding: 5px 0;
    color: #fff;
  }

  #weight-management-campaign::after,
  .weight-management-campaign-tips::after,
  .weight-management-campaign-product-list::after {
    content: '';
    width: 100%;
    height: 200px;
    display: block;
    position: absolute;
    background: -webkit-gradient(linear, left top, left bottom, from(#fff), to(#fff0));
    background: linear-gradient(#fff, #fff0);
    margin-left: -19px;
    top: 0;
    z-index: 0;
  }

  .weight-management-campaign-tips,
  .weight-management-campaign-product-list,
  .weight-management-campaign-advice,
  .weight-management-campaign-carousel-container {
    background-position: center bottom;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  }

  .weight-management-campaign-tips {
    background-image: url(/__ssobj/static/ww-tips-background.jpg);
    padding: 50px 0;
    background-repeat: no-repeat;
  }

  .weight-management-campaign-advice {
    background-color: #f7f7f7;
  }

  .weight-management-campaign-product-list {
    background-image: url(/__ssobj/static/ww-honey.jpg);
  }

  .weight-management-campaign-tips::after,
  .weight-management-campaign-product-list::after {
    margin-left: 0;
  }

  .wmc-prod-list-wrap {
    max-width: 820px;
    margin: 0 auto;
  }

  .wmc-prod-list-product {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    border-bottom: 1px solid #eaeaea;
    padding: 30px 10px;
    background: #fff;
    position: relative;
    overflow: hidden;
  }

  .wmc-prod-list-product__promo {
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    width: 155px;
    top: 32px;
    left: -35px;
  }

  .wmc-prod-list-product__image {
    width: 130px;
    height: auto;
  }

  .wmc-prod-list-product__meta {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 5px 0 10px;
  }

  @media only screen and (min-width: 768px) {
    .weight-management-campaign-product-list {
      display: block;
      padding: 40px 0 0;
    }
  }

  @media only screen and (min-width: 767px) {
    .weight-management-campaign-carousel-container {
      display: none !important;
    }
  }

  @media screen and (max-width: 320px) {
    .weight-management-campaign-hero aside {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 60%;
      flex: 0 0 60%;
    }
  }

  @media screen and (max-width: 767px) {
    .weight-management-campaign-remedy-image {
      width: 130px;
      height: auto;
    }
    #weight-management-campaign {
      background-position: center bottom;
      background-size: cover;
      padding: 30px 19px 90px;
    }
    #weight-management-campaign h1 {
      font-size: 45px;
      margin: 0 0 50px;
      position: relative;
      z-index: 1;
      font-family: Georgia, Sans-serif;
      color: #476779;
    }
    #weight-management-campaign > p {
      font-size: 18px;
      width: 95%;
      padding: 10px;
      border-radius: 10px;
      color: #4b606f;
      position: relative;
      z-index: 10;
      display: inline;
    }
    .usabilla_live_button_container {
      top: 80% !important;
    }
    .weight-management-campaign-hero:nth-child(even) aside {
      -webkit-box-flex: 1;
      -ms-flex: 1 0 54%;
      flex: 1 0 54%;
      padding-right: 15px;
      -webkit-box-ordinal-group: 2;
      -ms-flex-order: 1;
      order: 1;
    }
    .weight-management-campaign-hero:nth-child(even) img {
      margin: 0;
      -webkit-box-ordinal-group: 3;
      -ms-flex-order: 2;
      order: 2;
    }
    .weight-management-campaign-hero:nth-child(even) p {
      -webkit-box-ordinal-group: 4;
      -ms-flex-order: 3;
      order: 3;
    }
    .weight-management-campaign-hero:nth-child(even) button {
      -webkit-box-ordinal-group: 5;
      -ms-flex-order: 4;
      order: 4;
    }
    .weight-management-campaign-protect-soothe {
      border-bottom: 1px solid #d4d4d4;
    }
    #weight-management-campaign > p span {
      font-size: 55px;
    }
    .weight-management-campaign-hero p {
      margin: 10px 0;
    }
    .weight-management-campaign-mainmenu li:last-of-type {
      display: none;
    }
    #weight-management-campaign > p span:last-of-type {
      float: none;
      margin: 0;
      right: 0px;
      position: absolute;
      top: -40px;
      left: auto;
      right: -295px;
    }
    .weight-management-campaign-product-list {
      background-position: 20% -4%;
      background-size: 280%;
    }
    .weight-management-campaign-tips {
      background-size: 228%;
      background-position: top;
    }
  }

  @media screen and (max-width: 414px) {
    #weight-management-campaign > p span:last-of-type {
      float: none;
      margin: 0;
      right: 0px;
      position: absolute;
      top: -40px;
      left: auto;
      right: -145px;
    }
  }

  @media screen and (min-width: 768px) {
    .weight-management-campaign-remedy-image {
      width: 200px;
      height: auto;
    }
    #weight-management-campaign {
      padding: 80px 19px;
      margin-top: -66px;
      background-attachment: fixed;
    }
    .weight-management-campaign-mainmenu {
      max-width: 900px;
      width: 100%;
    }
    .weight-management-campaign-section-blurb {
      max-width: 660px;
      width: 95%;
      font-size: 20px;
      font-style: italic;
      background: -webkit-gradient(linear, left top, left bottom, from(#ffffffab), to(#ffffffcf));
      background: linear-gradient(#ffffffab, #ffffffcf);
      border-radius: 8px;
      padding: 8px 20px;
      -webkit-box-shadow: 0 10px 33px #ffffffb0;
      box-shadow: 0 10px 33px #ffffffb0;
      border-bottom: 1px solid #fff;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      margin-bottom: 50px;
    }
    .weight-management-campaign-tips ul {
      margin: 0 auto;
      width: 100%;
      max-width: 820px;
      padding: 0;
    }
    .weight-management-campaign-tips ul li {
      padding: 25px 25px 25px 50px;
      font-size: 18px;
    }
    .weight-management-campaign-product-list-inner {
      margin: 0 auto;
      width: 100%;
      max-width: 820px;
    }
    .weight-management-campaign-hero:nth-of-type(1) {
      border-radius: 5px 5px 0 0;
    }
    .weight-management-campaign-protect-soothe li {
      font-size: 25px;
      padding: 25px 10px;
      font-weight: 100;
    }
    .weight-management-campaign-tips,
    .weight-management-campaign-product-list,
    .weight-management-campaign-advice,
    .weight-management-campaign-carousel-container {
      padding: 60px 0;
    }
    .weight-management-campaign-hero {
      padding: 30px;
    }
    .weight-management-campaign-hero img {
      margin-left: 0;
    }
    .weight-management-campaign-hero {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      height: 275px;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
    }
    .weight-management-campaign-hero p {
      -webkit-box-flex: 0;
      -ms-flex: 0 1 auto;
      flex: 0 1 auto;
      margin-top: 0px;
      width: 70%;
      padding-top: 0px;
      font-size: 16px;
    }
    .weight-management-campaign-hero aside {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 30%;
      flex: 0 0 30%;
      width: 70%;
    }
    .weight-management-campaign-hero a {
      font-weight: bold;
      font-size: 20px;
    }
    .weight-management-campaign-hero:nth-child(even) img {
      -webkit-box-ordinal-group: 4;
      -ms-flex-order: 3;
      order: 3;
    }
    .weight-management-campaign-hero button {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 38px;
      flex: 0 0 38px;
      -ms-flex-item-align: start;
      align-self: flex-start;
      margin-top: 15px;
      font-size: 14px;
    }
    .weight-management-campaign-hero span:nth-of-type(2) {
      font-size: 18px;
    }
    .weight-management-campaign-articles-slider,
    .weight-management-campaign-carousel {
      max-width: 1050px;
      width: 100%;
      margin: 0 auto;
    }
    .weight-management-campaign-carousel {
      max-width: 1080px;
    }
    .slick-prev, .slick-prev:active {
      left: -4%;
    }
    .slick-next, .slick-next:active {
      right: -4%;
    }
    .weight-management-campaign-section-blurb::before,
    .weight-management-campaign-section-blurb::after {
      font-size: 51px;
    }
    .weight-management-campaign-section-blurb::before {
      left: -12px;
      top: -22px;
    }
    .weight-management-campaign-section-blurb::after {
      right: -2px;
      bottom: -49px;
    }
    .product-list-wrap {
      -webkit-box-shadow: 0 21px 33px 0 #00000040;
      box-shadow: 0 21px 33px 0 #00000040;
      border-radius: 5px 5px 0 0;
    }
    .product-list-wrap > p {
      margin: 20px 0;
    }
    .weight-management-campaign-hero .weight-management-campaign-promo {
      font-size: 14px;
    }
    .weight-management-campaign-mainmenu li {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 16%;
      flex: 0 0 16%;
    }
    #weight-management-campaign > p span:first-of-type {
      left: 93px;
    }
    #weight-management-campaign p small {
      text-align: center;
    }
    #weight-management-campaign > p span:last-of-type {
      right: 50px;
      bottom: -20px;
    }
    .weight-management-campaign-tips,
    .weight-management-campaign-product-list,
    .weight-management-campaign-advice,
    .weight-management-campaign-carousel-container {
      background-attachment: fixed;
    }
    .wmc-prod-list-product__image {
      width: 200px;
      height: auto;
    }
  }
  </style>

  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP" crossorigin="anonymous">
  </head>
  $1
  <script>
 (function(window, document){
    

    // Define container
    var container = $('body > div[role="main"] > div:nth-of-type(1)');
    
    // Variables
    var baseURL = 'https://www.hollandandbarrett.com/shop/product/';
    var baseImgURL = 'https://images.hollandandbarrettimages.co.uk/productimages/';
    var weightManagementCampaignMainMenuPosY = 0;
    var scrollAreas = null;

    // Promo Profiles
    var promoProfiles = {
        penny: {
            name: 'Buy One Get One for a Penny',
            backgroundColor: '#ED028B'
        },
        thirtyThreeOff: {
            name: '33% off',
            backgroundColor: '#c73536'
        },
        twentyFiveOff: {
            name: '25% off',
            backgroundColor: '#c73536'
        }
    }
            
    // Products
    var products = [
        {
            name: 'Boombod 7 Day Achiever 21 Sachets',
            sku: '017346',
            productId: '60017346',                
            url: 'boombod-7-day-achiever-21-sachets-60017346?skuid=017346',
            price: 29.99,
            rating: 4.0,                
            promo: promoProfiles.penny,
            description: 'Boombod sachets contain a quality source of the natural fibre glucomannan that reduces appetite, helps cleanse & decreases bloating.',
            img: 'HB/724/017346_A.png'            
        }, {
            name: 'Holland & Barrett Raspberry Ketone Complex Capsules',
            sku: '021031',
            productId: '60021031',                
            url: 'holland-barrett-raspberry-ketone-complex-capsules-60021031?skuid=021031',
            price: 19.99,
            rating: 3.9,                
            promo: promoProfiles.penny,
            description: 'Glucomannan has almost no calories, but is very high in fibre. It absorbs water in the stomach. When in contact with water, glucomannan expands and can absorb up to 50 times its weight. That\'s why the recommended dosage of glucomannan is lower compared to other fibre supplements.',
            img: 'HB/724/021031_A.png'            
        }, {
            name: 'Holland & Barrett Super Green Tea Diet 60 Tablets',
            sku: '013256',
            productId: '60013256',                
            url: 'holland-barrett-super-green-tea-diet-tablets-60013256?skuid=013256',
            price: 9.49,
            rating: 2.9,                
            promo: promoProfiles.penny,
            description: 'Suitable for vegetarians, Holland & Barrett Super Green Tea Diet Tablets blend of Caffeine, Guarana, chromium, Vitamin B6, Bladderwrack, Green Tea and Uva Ursi. You must be 18 years or older to purchase this product.',
            img: 'HB/724/013256_A.png'
        }, {
            name: 'Holland & Barrett Glucomannan 500mg 60 Capsules',
            sku: '029525',
            productId: '60029525',                
            url: 'holland-barrett-glucomannan-500mg-60029525?skuid=029525',
            price: 7.99,
            rating: 3.8,                
            promo: 'None',
            description: 'Holland & Barrett Glucomannan (Konjac fibre) is a natural ingredient that in the context of a calorie controlled diet contributes to weight loss. Glucomannan absorbs water in the stomach, and then expands to potentially up to 50 times its weight. Glucomannan is extremely high in fibre and therefore the dosage is lower compared to other fibre based supplements.',
            img: 'HB/724/029525_A.png'
        }, {
            name: 'Protein World Carb Blocker 90 Capsules',
            sku: '017665',
            productId: '60017665',                
            url: 'protein-world-carb-blocker-90-capsules-60017665?skuid=017665',
            price: 10.04,
            rating: 4.3,                
            promo: promoProfiles.thirtyThreeOff,
            description: 'This award winning, revolutionary product contains a combination of ingredients which makes our carb blocker completely unique. Firstly, the white kidney bean extract, which is the only ingredient used in most carb blockers, is the highest strength available on the market making it extremely potent. This stops carbs being broken down into sugars, leaving less to be stored as fat if unused.',
            img: 'HB/724/017665_A.png'
        }, {
            name: 'Nutritional Headquarters Fat Metaboliser 120 Tablets',
            sku: '010212',
            productId: '60010210',                
            url: 'nutritional-headquarters-fat-metaboliser-tablets-60010210?skuid=010212',
            price: 12.99,
            rating: 3.4,                
            promo: promoProfiles.penny,
            description: 'Fat Metaboliser tablets provide a combination of vitamins, minerals and botanical extracts, alongside a 14-day diet plan, to help you reach your weight management goals.',
            img: 'HB/724/010212_A.png'
        }, {
            name: 'Bootea 28 Day Teatox',
            sku: '003427',
            productId: '60003425',                
            url: 'bootea-senna-less-teatox-60003425?skuid=003427',
            price: 37.99,
            rating: 3.7,                
            promo: promoProfiles.penny,
            description: 'The Bootea Senna Free Teatox will leave you feeling super energised and motivated, ready to reach your weight-loss goals.',
            img: 'HB/724/003427_A.png'
        }, {
            name: 'Skinny Coffee Club 28 Day Program Instant Edition',
            sku: '017408',
            productId: '60017408',                
            url: 'skinny-coffee-club-28-day-program-instant-edition-60017408?skuid=017408',
            price: 27.95,
            rating: 4.0,                
            promo: promoProfiles.penny,
            description: 'Skinny Coffee Club Instant edition is tasty, effective and the perfect way to start your day. Skinny Coffee Club is the go to one step program because lets face it what is life without our greatest love? What was once just your average cup of joe has been reformulated to start your day the right way.',
            img: 'HB/724/017408_A.png'
        }, {
            name: 'Eat Water Slim Rice 200g',
            sku: '007572',
            productId: '60007572',                
            url: 'eat-water-slim-rice-60007572?skuid=007572',
            price: 2.59,
            rating: 3.5,                
            promo: promoProfiles.penny,
            description: 'Eat Water Slim Rice is a low calorie alternative to regular rice that helps you lose weight. The weight loss secret is in the Konjac flour, which is rich in glucomannan. Glucomannan helps you lose weight by slowing digestion and prolonging the satisfying feeling of fullness.',
            img: 'HB/724/007572_A.png'
        }, {
            name: 'Eat Water Slim Noodles 200g',
            sku: '007566',
            productId: '60007566',                
            url: 'eat-water-slim-noodles-60007566?skuid=007566',
            price: 2.59,
            rating: 4.2,                
            promo: promoProfiles.penny,
            description: 'Eat Water Slim Noodles is a Low Calorie alternative to regular noodles that helps you lose weight. The weight loss secret is in the Konjac flour, which is rich in glucomannan. Glucomannan helps you lose weight by prolonging the satisfying feeling of fullness.',
            img: 'HB/724/007566_A.png'
        }
    ];





    
    // == Introduction
    // =============================================================== //
    function initIntro(){
        
        var content = {
            heading: 'COPY?',
            blurb: "COPY?"
        }
        
        // HTML
        var html = '<h1>'+content.heading+'</h1><p>' + content.blurb + '</p>';
        
        // Add header content to website
        container.removeClass('page').append(html);
        
    }
    
    
    // == Tips
    // =============================================================== //
    function initTips(){
    
        var tips = [
            'The secret to weight loss is to burn more energy than you consume each day. Rather than looking to cut out carbohydrates or whole food groups, you should focus on creating a calorie deficit (burning more calories than you consume). Carbohydrates used to be considered bad, but experts now know it’s the quality of the carbohydrate that’s important. Wholegrain carbohydrates found in oats, sweet potatoes and brown rice are excellent sources of energy and there’s no reason to cut these out of your diet.',
            'When looking to lose weight, you may be tempted to go for the ‘low fat’ and ‘low sugar’ alternatives in the supermarket. Although these are marketed as healthy options, they’re rarely lower in calories than regular food products.',
            'When you’re on the go, take healthy snacks with you so you eat the right foods all the time and minimise the chance of grabbing an unhealthy alternative. I recommend high-protein snacks that help keep you fuller for longer: nuts, roasted chickpeas or a protein energy ball.',
            'Do you know that using smaller plates has been shown to help some people automatically eat fewer calories? This is a classic trick that can help reset your brain into thinking you’re full.',
            'Do you know that it takes 20 minutes for your stomach to send signals to your brain to tell it that it’s full? Eating mindfully and slowly can really help reduce overconsumption and overindulgence and help with weight loss.',
            'High fibre foods are an essential part of your weight management as they keep you feeling fuller for longer. They also provide additional benefits such as improved gut health. I recommend these high fibre foods: oats, prunes, potatoes and beans.'
        ];
        
        // Open Tips Container
        // var tipsHtml = '<section class="weight-management-campaign-tips" id="weight-management-campaign-tips"><h3>~ Tips ~</h3><p class="weight-management-campaign-section-blurb">Follow these tips to make sure you’re feeling tip top</p><ul>';
        var tipsHtml = '<section class="weight-management-campaign-tips" id="weight-management-campaign-tips"><h3>~ Tips ~</h3><ul>';
        
        // Populate container with tips
        tips.forEach(function(tip){
            tipsHtml += '<li><i class="fas fa-check-circle weight-management-campaign-tips__icon"></i>'+tip+'</li>';
        });
        
        // Close Tips Container
        tipsHtml += '</ul></section>';
        
        // Add header and nutritionist profile
        $('.weight-management-campaign-mainmenu-container').after(tipsHtml);
        
    }
    
    
    // == Product List
    // =============================================================== //
    function initProductList(){
        
        // Intro blurb
        // var intro = "I've picked out my top picks to help protect you against illness and soothe symptoms if you're feeling under the weather";
        
        // Protect Soothe Container
        // var productListHtml = '<section class="weight-management-campaign-heroes" id="weight-management-campaign-remedies"><h3>~ Products ~</h3><p class="weight-management-campaign-section-blurb">'+intro+'</p><div class="weight-management-campaign-product-list-container"></div></section>';
        var productListHtml = '<section class="weight-management-campaign-product-list" id="weight-management-campaign-remedies"><h3>~ Products ~</h3><div class="weight-management-campaign-product-list-inner"></div></section>';
        
        // Add Product List Container to DOM
        $('.weight-management-campaign-tips').after(productListHtml);
        
        // Create Product List Wrapper
        var productListWrap = $('<div class="product-list-wrap"></div>');
        
        // Populate Wrapper
        products.forEach(function(product){            
                
            var ratingWidth = (product.rating * 10 * 2) + 'px';
            
            var starRating = '<span class="weight-management-campaign_star_ratings"><span class="weight-management-campaign_rating" style="width:'+ratingWidth+'"></span></span>';
            
            var promo = (product.promo !== 'None') ? '<span class="weight-management-campaign-promo">Penny Sale</span>' : '';
            
            var imageSize = $(window).width() > 768 ? '200' : '130' ;
            
            var image = '<img src="' + baseImgURL + product.img + '?i10c=img.resize(width:'+imageSize+',height:'+imageSize+')" class="weight-management-campaign-remedy-image"/>';
            
            var productHeroHTML = '<article class="weight-management-campaign-hero">' + promo + image + '<aside><a href="' + baseURL + product.url + '">' + product.name + '</a><div class="weight-management-campaign-meta">'+starRating+'<span>£'+product.price+'</span></div></aside><p>'+product.description+'</p><button class="quickAdd" data-sku="'+product.sku+'">Quick Add</button></article>';
            
            // Append soothe and protect products to respective containers
            productListWrap.append(productHeroHTML);    
            
        });
        
        // Append Heroes HTML to DOM
        $('.weight-management-campaign-product-list-inner').append(productListWrap);
        
        
    }
    

     // == Products Carousel
    // =============================================================== //
    function initProductCarousel(){
        
        // Intro blurb
        var intro = "I’ve picked out my top picks to help protect you against illness and soothe symptoms if you’re feeling under the weather";
        
        var productListCarousel = '<section class="weight-management-campaign-carousel-container" id="weight-management-campaign-carousel"><h3>~ Products ~</h3><p class="weight-management-campaign-section-blurb">'+intro+'</p><div class="weight-management-campaign-carousel">';
        
        // Populate products list carousel items
        products.forEach(function(product){
            var ratingWidth = (product.rating * 10 * 2) + 'px';
            var starRating = '<span class="weight-management-campaign_star_ratings"><span class="weight-management-campaign_rating" style="width:'+ratingWidth+'"></span></span>';
            var productUrl = baseImgURL + product.sku + '_A.png?i10c=img.resize(width:160,height:160)';
            var promo = (product.promo !== 'None') ? '<span class="weight-management-campaign-promo" style="background:'+product.promo.backgroundColor+'">'+product.promo.name+'</span>' : '';
            var veganType = product.veganType ? '<span class="vegan-type-strip" style="background:'+product.veganType.baseColor+'; color: '+product.veganType.textColor+'">'+product.veganType.name+'</span>' : '';
            
            productList += '<div><img src="'+productUrl+'" alt="'+product.name+'" />' + promo + veganType + '<a href="' + baseURL + product.url + '">' + product.name + '</a><div class="weight-management-campaign-meta">'+starRating+'<span class="weight-management-campaign-product-price">£'+product.price+'</span></div><button class="ss-quick-add" data-sku="'+product.sku+'" data-product-id="'+product.productId+'">Quick Add</button></div>'; 
        });

        // products.forEach(function(product){
        //     var ratingWidth = (product.rating * 10 * 2) + 'px';
        //     var starRating = '<span class="weight-management-campaign_star_ratings"><span class="weight-management-campaign_rating" style="width:'+ratingWidth+'"></span></span>';
        //     var productUrl = baseImgURL + product.img + '?i10c=img.resize(width:160,height:160)';

        //     var promo = (product.promo !== 'None') ? '<span class="weight-management-campaign-promo" style="background:'+product.promo.backgroundColor+'">'+product.promo.name+'</span>' : '';
            
        //     productList += '<div><i class="fas fa-info-circle"></i><p class="product-info">'+product.description+'</p><img src="'+productUrl+'" alt="'+product.name+'" />'+promo+'<a href="' + baseURL + product.url + '">' + product.name + '</a><div class="weight-management-campaign-meta">'+starRating+'<span class="weight-management-campaign-product-price">£'+product.price+'</span></div><button class="quickAdd" data-sku="'+product.sku+'" data-product-id="'+product.productId+'">Quick Add</button></div>'; 
        // });
        
        // Close products list
        productListCarousel += '</div></section>';
        
        // Append Products List Carousel to DOM
        // $('.weight-management-campaign-advice').after(productList);
        $('.weight-management-campaign-tips').after(productListCarousel);
        
    }

    
    // == Weight Management Campaign Menu
    // =============================================================== //
    function weightManagementCampaignMenu(){
        
        var links = ['Tips', 'Remedies', 'Advice', 'Products'];
        
        var weightManagementCampaignMenu = '<div class="weight-management-campaign-menu-placeholder"></div><div class="weight-management-campaign-mainmenu-container"><ul class="weight-management-campaign-mainmenu">';
        
        links.forEach(function(link){
            weightManagementCampaignMenu += '<li class=weight-management-campaign-nav-'+link.toLowerCase()+'><a href="#weight-management-campaign-'+link.toLowerCase()+'">'+link+'</a></li>';
        });
        
        weightManagementCampaignMenu += '</ul></div>';
        
        container.after(weightManagementCampaignMenu);
        
        weightManagementCampaignMainMenuPosY = $('.weight-management-campaign-mainmenu').position().top + 60;
        
    }
   
    
    // == Scroll Areas
    // =============================================================== //
    function setScrollAreas(){
        
        scrollAreas = [{
            name: 'tips',
            areaStart: $('.weight-management-campaign-tips').position().top,
            areaEnd: $('.weight-management-campaign-tips').position().top + $('.weight-management-campaign-tips').outerHeight()
        }, {
            name: 'remedies',
            areaStart: $('.weight-management-campaign-product-list').position().top,
            areaEnd: $('.weight-management-campaign-product-list').position().top + $('.weight-management-campaign-product-list').outerHeight()
        }, {
            name: 'advice',
            areaStart: $('.weight-management-campaign-advice').position().top,
            areaEnd: $('.weight-management-campaign-advice').position().top + $('.weight-management-campaign-advice').outerHeight()
        }];
        
    }
    
    
    // == Advice
    // =============================================================== //
    function initAdvice(){
        
        // Intro blurb
        var intro = "COPY???";
        
        var articles = [{
            title: 'Seven ways to lose weight naturally',
            intro: 'Simple science-backed things you can do to lose naturally.',
            image: '/the-health-hub/wp-content/uploads/2018/01/LoseWeightNaturally1-768x295.jpg',
            url: 'weight-management/weight-loss/seven-ways-lose-weight-naturally/'
        }, {
            title: 'The truth about calories',
            intro: 'We bust the myths and reveal the facts about the best types to target for slimming success.',
            image: '/the-health-hub/wp-content/uploads/2018/01/TruthAboutCalories1-768x295.jpg',
            url: 'weight-management/weight-loss/the-truth-about-calories/'
        }, {
            title: 'Is it all about healthy fats now?',
            intro: 'Why they don’t need to be the enemy.',
            image: '/the-health-hub/wp-content/uploads/2018/05/health-600x295.png',
            url: 'weight-management/weight-loss/healthy-fats-now/'
        }, {
            title: 'How to lose weight healthily and keep it off.',
            intro: 'The tips you actually need to slim down for life',
            image: '/the-health-hub/wp-content/uploads/2018/01/LoseWeightHealthily1-768x295.jpg',
            url: 'weight-management/weight-loss/lose-weight-healthily/'
        }, {
            title: '10 reasons running is good for you',
            intro: 'Look after your heart, strengthens muscles, and increases bone density.',
            image: '/the-health-hub/wp-content/uploads/2016/10/shutterstock_398069407-1-768x295.jpg',
            url: 'weight-management/weight-loss/how-good-is-running-for-you/'
        },{
            title: 'The bedroom workout',
            intro: 'Because who has the time (or money) to hit the gym?',
            image: '/the-health-hub/wp-content/uploads/2018/08/Bedroomworkout1-768x295.jpg',
            url: 'weight-management/weight-loss/the-bedroom-workout/'
        },{
            title: 'Discover more ',
            intro: 'Find a balance between your diet and exercise with our advice.',
            image: '/the-health-hub/wp-content/uploads/2016/11/shutterstock_277227671-768x295.jpg',
            url: 'weight-management/'
        }];
        
        // Init HTML string
        var html = '<section class="weight-management-campaign-advice" id="weight-management-campaign-advice"><h3>~ Advice ~</h3><p class="weight-management-campaign-section-blurb">'+intro+'</p><div class="weight-management-campaign-articles-slider">';
        
        // Populate articles
        articles.forEach(function(item){
            var extraClass = item.title === 'Discover more' ? 'weight-management-campaign-health-hub-article' : '';
            html += '<div><div class="weight-management-campaign-article-thumbnail '+extraClass+'" style="background-image:url('+item.image+')"></div><a href="/the-health-hub/'+item.url+'">'+item.title+'</a><p>'+item.intro+'</p></div>'; 
        });
        
        // Close HTML string
        html += '</div></section>';
        
        // Append container to DOM
        $('.weight-management-campaign-product-list').after(html);
        
    }
    
    
    // == Init Campaign Function
    // =============================================================== //
    function initCampaign(){
        initIntro();
        weightManagementCampaignMenu();
        initTips();
        initProductList();
        initAdvice();
        initProductCarousel();
        setScrollAreas();
    }
    
    
    // == Add item to basket
    // =============================================================== //

    $(document).on('click', '.quickAdd', function(e){
        var self = $(this);

        // Variables
        var _dynSessConf = $("input[name='_dynSessConf']").attr('value');
        var skuID = $(this).attr('data-sku');
        var prodId = $(this).attr('data-product-id');

        // Form Data
        var data = {
            '_dyncharset': 'UTF-8',
            '_dynSessConf': _dynSessConf,
            'productId' : prodId,
            'skuId' : skuID,
            'quantity' : 1
        };

        // Show loading spinner and remove text
        self.html('').addClass('in-progress');

        // Run AJAX call to dyanmically add to basket 
        $.ajax({
            url:"/modules/ajax/addItemToOrder.jsp",
            method:"POST",
            data: $.param(data),
            success: function(result){
                self.removeClass('in-progress').text('Added');
            }                
        }).then(function(){
            $.ajax({
                url: '/modules/ajax/basket-masthead.jsp',
                success: function(result){
                    $('.js-header-basket-link').html(result);
                    setTimeout(function(){
                        button.text('Quick Add');
                    }, 1000);
                }
            });
        });

    });

    
    
    // == Init Content
    // =============================================================== //
    $(document).ready(function(){
        
        $('.global-banners').remove();
        
        // Empty main content container
        container.empty().attr('id', 'weight-management-campaign').show();
        
        // Get intro height
        var introHeight =  ( $(window).height() - $('#weight-management-campaign').position().top ) + 'px';
        
        // Init Campaign
        initCampaign();
        
        // Init Slick
        $('.weight-management-campaign-articles-slider, .weight-management-campaign-carousel').slick({    
            centerMode: true,
            centerPadding: '30px',
            slidesToShow: 3,
            variableWidth: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: true,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 3
                    }
                }, {
                    breakpoint: 480,
                    settings: {
                        arrows: true,
                        centerMode: true,
                        centerPadding: '30px',
                        slidesToShow: 1
                    }
                }
            ]
        });
        
    });
    



    
    // == Toggle Heroes
    // =============================================================== //
    /*
    $(document).on('click', '.weight-management-campaign-protect-soothe li', function(){
        var link = $(this).text();            
        if( link === 'Soothe' && $('.sootheHeroes').is(':hidden')){                
            $('.sootheHeroes').show();
            $('.protectHeroes').hide();
        } else if ( link === 'Protect' && $('.protectHeroes').is(':hidden') ) {                
            $('.sootheHeroes').hide();
            $('.protectHeroes').show();                
        }            
        $('.weight-management-campaign-protect-soothe li').removeClass('selected');
        $(this).addClass('selected');            
    });
    */



    
    // == Main Menu Navigation
    // =============================================================== //
    $(document).on('click', '.weight-management-campaign-mainmenu li', function(){
        
        // Remove highlight from all links
        $('.weight-management-campaign-mainmenu li').removeClass('selected');
        
        // Add highlight to clicked button only
        $(this).addClass('selected');
        
    });
    
    
    // == Quick Add Product
    // =============================================================== //
    // $(document).on('click', '.quickAdd', function(e){
    //     e.preventDefault();
    //     $(this).text('').addClass('in-progress');
    //     addItemToBasket ( $(this).attr('data-sku'), $(this) );
    // });
    
    
    // == Toggle Products Info
    // =============================================================== //
    // $(document).on('click', '.slick-slide .fas', function(e){
    //     e.preventDefault();
    //     if( $(this).hasClass('fa-info-circle') ) {
    //         $(this).removeClass('fa-info-circle');
    //         $(this).addClass('fa-times-circle');
    //         $(this).parent().find('.product-info').fadeIn();
    //     } else {
    //         $(this).removeClass('fa-times-circle');
    //         $(this).addClass('fa-info-circle');
    //         $(this).parent().find('.product-info').fadeOut();
    //     }
    // });
    
    
    // == Sticky Weight Management Campaign Nav
    // =============================================================== //
    $(window).scroll(function(){
        
        var windowScrollPosition = $(window).scrollTop();
        
        if( windowScrollPosition > weightManagementCampaignMainMenuPosY && $('.fix-weight-management-campaign-menu').length === 0 ){
            $('.weight-management-campaign-mainmenu-container').addClass('fix-weight-management-campaign-menu');
            $('.weight-management-campaign-menu-placeholder').show();
        }
        
        if( windowScrollPosition <= weightManagementCampaignMainMenuPosY ){
            $('.weight-management-campaign-mainmenu-container').removeClass('fix-weight-management-campaign-menu');
            $('.weight-management-campaign-menu-placeholder').hide();
        }
        
        // Check which content area we are scrolling over
        scrollAreas.forEach(function(area){
            
            var areaStart = area.areaStart;
            var areaEnd = area.areaEnd;
            
            if (windowScrollPosition >= areaStart && windowScrollPosition < areaEnd) {
                $('.weight-management-campaign-nav-'+area.name).addClass('selected');
            } else {
                $('.weight-management-campaign-nav-'+area.name).removeClass('selected');
            } 
        });
        
    });

    
    // == Return all recommended products to defualt when clicking slick arrows
    // =============================================================== //
    $(document).on('click', '.slick-arrow', function(){            
        $('.fas').removeClass('fa-times-circle').addClass('fa-info-circle');
        $('.slick-slide .product-info').fadeOut();            
    });        
    
})(window, document);          
 </script>
  </body>