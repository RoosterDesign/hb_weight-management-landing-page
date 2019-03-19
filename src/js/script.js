(function(window, document){


    // Define container
    const container = $('body > div[role="main"] > div:nth-of-type(1)');
    // const container = $('.hook');
    
    // Variables
    const baseURL = 'https://www.hollandandbarrett.com/shop/product/';
    const baseImgURL = 'https://images.hollandandbarrettimages.co.uk/productimages/';
    
    // Promo Profiles
    const promoProfiles = {
        penny: {
            name: 'Penny Sale',
            backgroundColor: '#ED028B',            
            size: ''
        },
        thirtyThreeOff: {
            name: '33% off',
            backgroundColor: '#c73536',
            size: ''
        },
        twentyFiveOff: {
            name: '25% off',
            backgroundColor: '#c73536',
            size: ''
        },
        halfPrice: {
            name: 'Half Price',
            backgroundColor: '#c73536',
            size: ''
        },
        buyOneGetOneHalfPrice: {
            name: 'Buy One Get One Half Price',
            backgroundColor: '#c73536',
            size: 'long'
        }
    };
        
    
    // Products
    const products = [
        {
            name: 'Garbanzo Dry Roasted Chickpeas Thai Sweet Chilli 65g',
            sku: '098299',
            productId: '60098299',                
            url: 'garbanzo-dry-roasted-chickpeas-thai-sweet-chilli-60098299?skuid=098299',
            price: 0.50,
            rating: 4.5,                
            promo: 'None',
            description: 'Garbanzo Dry Roasted Chickpeas Thai Sweet Chilli flavour are slow roasted, deliciously nutty and crunchy, and seasoned with a unique blend of sweet and spice. Garbanzo is a delicious low calorie snack that helps to keep you fuller for longer.',
            img: 'HB/724/098299_A.jpg',
            tag: 'food'
        }, {
            name: 'Holland & Barrett 100% Organic Jumbo Oats 1kg',
            sku: '039796',
            productId: '60039796',                
            url: 'holland-barrett-100-organic-jumbo-oats-60039796?skuid=039796',
            price: 2.65,
            rating: 4.5,                
            promo: promoProfiles.buyOneGetOneHalfPrice,
            description: 'Nothing artificial. Just good, pure oats. Perfect for your favourite breakfast and baking recipes.',
            img: 'HB/724/039796_A.jpg',
            tag: 'food'
        }, {
            name: 'Holland & Barrett Pitted Prunes 400g',
            sku: '081285',
            productId: '60081285',                
            url: 'holland-barrett-pitted-prunes-60081285?skuid=081285',
            price: 3.99,
            rating: 4.4,                
            promo: 'None',
            description: 'Our Holland & Barrett Prime Pitted Prunes are soft, succulent and whole pitted. Add to your breakfast in the morning for a low fat addition, or enjoy as a tasty snack!',
            img: 'HB/724/081285_A.jpg',
            tag: 'food'
        }, {
            name: 'Holland & Barrett Almonds 100g',
            sku: '090987',
            productId: '60090987',                
            url: 'holland-barrett-almonds-60090987?skuid=090987',
            price: 1.79,
            rating: 4.6,                
            promo: 'None',
            description: 'Available in a range of pack sizes, these awesome almonds are great for lunchboxes, cooking or baking, or perfect as an addictively moreish (and nutritious) party snack!',
            img: 'HB/724/090987_A.jpg',
            tag: 'food'
        }, {
            name: 'Holland & Barrett Chia Seeds 275g',
            sku: '004458',
            productId: '60004458',                
            url: 'holland-barrett-chia-seeds-60004458?skuid=004458',
            price: 4.29,
            rating: 4.7,                
            promo: 'None',
            description: 'Our Holland & Barrett Clever Chia Seeds are completely natural and are a must-have ingredient for the home baker! These tasty little seeds can be added to cereal, porridge, yoghurts, baking mixes and much, much more.',
            img: 'HB/724/004458_A.jpg',
            tag: 'food'
        }, {
            name: 'Boombod 7 Day Achiever 21 Sachets',
            sku: '017346',
            productId: '60017346',                
            url: 'boombod-7-day-achiever-21-sachets-60017346?skuid=017346',
            price: 14.99,
            rating: 4.0,                
            promo: promoProfiles.halfPrice,
            description: 'Boombod sachets contain a quality source of the natural fibre glucomannan that reduces appetite, helps cleanse & decreases bloating.',
            img: 'HB/724/017346_A.png',
            tag: 'vhms'
        }, {
            name: 'Holland & Barrett Raspberry Ketone Complex Capsules',
            sku: '021031',
            productId: '60021031',                
            url: 'holland-barrett-raspberry-ketone-complex-capsules-60021031?skuid=021031',
            price: 9.99,
            rating: 3.9,                
            promo: promoProfiles.halfPrice,
            description: 'Glucomannan has almost no calories, but is very high in fibre. It absorbs water in the stomach. When in contact with water, glucomannan expands and can absorb up to 50 times its weight.',
            img: 'HB/724/021031_A.png',
            tag: 'vhms'
        }, {
            name: 'Holland & Barrett Super Green Tea Diet 60 Tablets',
            sku: '013256',
            productId: '60013256',                
            url: 'holland-barrett-super-green-tea-diet-tablets-60013256?skuid=013256',
            price: 4.74,
            rating: 2.9,                
            promo: promoProfiles.halfPrice,
            description: 'Suitable for vegetarians, Holland & Barrett Super Green Tea Diet Tablets blend of Caffeine, Guarana, chromium, Vitamin B6, Bladderwrack, Green Tea and Uva Ursi.',
            img: 'HB/724/013256_A.png',
            tag: 'vhms'
        }, {
            name: 'Holland & Barrett Glucomannan 500mg 60 Capsules',
            sku: '029525',
            productId: '60029525',                
            url: 'holland-barrett-glucomannan-500mg-60029525?skuid=029525',
            price: 5.99,
            rating: 3.8,                
            promo: promoProfiles.twentyFiveOff,
            description: 'Holland & Barrett Glucomannan (Konjac fibre) is a natural ingredient that in the context of a calorie controlled diet contributes to weight loss.',
            img: 'HB/724/029525_A.png',
            tag: 'vhms'
        }, {
            name: 'Nutritional Headquarters Fat Metaboliser 120 Tablets',
            sku: '010212',
            productId: '60010210',                
            url: 'nutritional-headquarters-fat-metaboliser-tablets-60010210?skuid=010212',
            price: 6.49,
            rating: 3.4,                
            promo: promoProfiles.halfPrice,
            description: 'Fat Metaboliser tablets provide a combination of vitamins, minerals and botanical extracts, alongside a 14-day diet plan, to help you reach your weight management goals.',
            img: 'HB/724/010212_A.png',
            tag: 'vhms'
        }
    ];
    
    
    
    
    
    // == Introduction
    // =============================================================== //
    function initIntro() {
        let tipsHtml = '';
        
        const introTitle = 'Discover expert advice & products to support your weight goals';

        const tips = [{
            'icon': 'fas fa-heartbeat',
            'body': 'When looking to lose weight, you may be tempted to go for the ‘low fat’ and ‘low sugar’ alternatives in the supermarket. Although these are marketed as healthy options, they’re rarely lower in calories than regular food products.'
        }, {
            'icon': 'fas fa-apple-alt',
            'body': 'When you’re on the go, take healthy snacks with you so you eat the right foods all the time and minimise the chance of grabbing an unhealthy alternative. I recommend high-protein snacks that help keep you fuller for longer: nuts, roasted chickpeas or a protein energy ball.'
        }, {
            'icon': 'fas fa-utensils',
            'body': 'Do you know that using smaller plates has been shown to help some people automatically eat fewer calories? This is a classic trick that can help reset your brain into thinking you’re full.'
        }, {
            'icon': 'fas fa-brain',
            'body': 'Do you know that it takes 20 minutes for your stomach to send signals to your brain to tell it that it’s full? Eating mindfully and slowly can really help reduce overconsumption and overindulgence and help with weight loss.'
        }, {
            'icon': 'fas fa-leaf',
            'body': 'High fibre foods are an essential part of your weight management as they keep you feeling fuller for longer. They also provide additional benefits such as improved gut health. I recommend these high fibre foods: oats, prunes, potatoes and beans.'
        }];
        
        // Intro HTML
        const introHtml = '<section class="wmc-section wmc-section--has-img wmc-section--intro"><div class="wmc-section__inner fadeInUp"><h1 class="wmc-title wmc-title--white">'+introTitle+'</h1><div class="wmc-tips"></div></section>';


        // Bio HTML
        const bioPhotoUrl = `/__ssobj/static/hb-nutritionist-1.jpg`;
        const bioName = 'Donia';
        const bioRole = 'Senior H&B Nutritionist';
        const bioQuote = 'Whether you’re looking to make healthier choices at meal times or to lose a few pounds for an upcoming event, I’ve pulled together some of my top tips to help kick start your weight loss.';
        // const bioHtml = `
        //     <figure class="wmc-bio">
        //         <img src="${bioPhotoUrl}" class="wmc-bio__photo" alt="${bioName}, ${bioRole}"" />
        //         <figcaption class="wmc-bio__quote-wrap">
        //             <p class="wmc-bio__quote">${bioQuote}</p>
        //             <p class="wmc-bio__cite">- <strong>${bioName}</strong>, ${bioRole}</p>
        //         </figcaption>
        //     </figure>
        // `;
        const bioHtml = '<figure class="wmc-bio"><img src="'+bioPhotoUrl+'" class="wmc-bio__photo" alt="'+bioName+', '+bioRole+'" /><figcaption class="wmc-bio__quote-wrap"><p class="wmc-bio__quote">'+bioQuote+'</p><p class="wmc-bio__cite">- <strong>'+bioName+'</strong>, '+bioRole+'</p></figcaption></figure>';


        // Loop through tips
        for(let tip of tips) {
            // tipsHtml += `
            //     <article class="wmc-tip wmc-c">
            //         <span class="wmc-tip__icon-wrap">
            //             <i class="${tip.icon} wmc-tip__icon"></i>
            //         </span>
            //         <p class="wmc-tip__body">${tip.body}</p>
            //     </article>
            // `;   
            tipsHtml += '<article class="wmc-tip wmc-c"><span class="wmc-tip__icon-wrap"><i class="'+tip.icon+' wmc-tip__icon"></i></span><p class="wmc-tip__body">'+tip.body+'</p></article>';            
        }

        // Add Intro HTML to DOM
        container.removeClass('page').append(introHtml);

        // Add Bio HTML to DOM
        $('.wmc-tips').before(bioHtml);

        // Add Tips HTML to DOM
        $('.wmc-tips').append(tipsHtml);
        
    };


    // == Products
    // =============================================================== //
    function initProducts() {

        const productTitle = 'Top Product Picks';
        const foodTabCtrLabel = 'Healthy Food & Drink';
        const vhmsTabCtrLabel = 'Products to Support';

        // Products HTML
        // const productsHtml = `
        //     <section class="wmc-section wmc-section--has-img wmc-section--products">
        //     <div class="wmc-section__inner">
        //         <h1 class="wmc-title wmc-title--white">${productTitle}</h1>      
        //         <ul class="product-list-tabs">
        //             <li class="product-list-tabs__control product-list-tabs__control--active js-product-tab" data-tab="food"><i class="fas fa-apple-alt product-list-tabs__control-icon"></i>Food</li>
        //             <li class="product-list-tabs__control js-product-tab" data-tab="vhms"><i class="fas fa-pills product-list-tabs__control-icon"></i>VHMS</li>
        //         </ul>
        //         <div class="wmc-products-wrap"></div>            
        //     </div>
        // </section>`;
        
        const productsHtml = '<section class="wmc-section wmc-section--has-img wmc-section--products"><div class="wmc-section__inner"><h1 class="wmc-title wmc-title--white">'+productTitle+'</h1><ul class="product-list-tabs"><li class="product-list-tabs__control product-list-tabs__control--active js-product-tab" data-tab="food"><i class="fas fa-apple-alt product-list-tabs__control-icon"></i>'+foodTabCtrLabel+'</li><li class="product-list-tabs__control js-product-tab" data-tab="vhms"><i class="fas fa-pills product-list-tabs__control-icon"></i>'+vhmsTabCtrLabel+'</li></ul><div class="wmc-products-wrap"></div></div></section>';

        

        // Add Products HTML to DOM
        $('.wmc-section--intro').after(productsHtml);

    };

   
    // == Product List
    // =============================================================== //
    function initProductList() {

        let productHtml = '';
        const foodProducts = $('<div class="wmc-products wmc-products--active" id="wmc-products-food"></div>');
        const vhmsProducts = $('<div class="wmc-products" id="wmc-products-vhms"></div>');   

        // Loop through products                 
        for(let product of products) {
            const promoBannerClass = product.promo.size === 'long' ? 'wmc-product__promo-banner wmc-product__promo-banner--long' : 'wmc-product__promo-banner';
            const promo = (product.promo !== 'None') ? '<span class="'+promoBannerClass+'" style="background:'+product.promo.backgroundColor+'">'+product.promo.name+'</span>' : '';            
            const ratingWidth = (product.rating * 10 * 2) + 'px';
            const starRating = '<span class="wmc-product__star-ratings"><span class="wmc-product__rating" style="width:'+ratingWidth+'"></span></span>';
            const imgUrl = baseImgURL + product.img;
            const url = baseURL + product.url;
            const price = product.price.toFixed(2);

            // productHtml += `
            //     <div class="wmc-product">
            //         ${promo}
            //         <a href="${url}">
            //             <img src="${imgUrl}?i10c=img.resize(width:200,height:200)" class="wmc-product__img" width="200" height="200">
            //         </a>
            //         <p class="wmc-product__title">
            //             <a href="${url}" class="wmc-product__title-link">${product.name}</a>
            //         </p>
            //         <div class="wmc-product__meta wmc-c">
            //             ${starRating}
            //             <span class="wmc-product__price">&pound;${price}</span>
            //         </div>
            //         <p class="wmc-product__desc">${product.description}</p>
            //         <button class="wmc-product__cta quickAdd" data-sku="${product.sku}" data-product-id="${product.productId}">Quick Add</button>
            //     </div>                
            // `;              
            
            productHtml = '<div class="wmc-product"><a href="'+url+'"><img src="'+imgUrl+'?i10c=img.resize(width:200,height:200)" class="wmc-product__img" width="200" height="200"></a><div class="wmc-product__side"><p class="wmc-product__title"><a href="'+url+'" class="wmc-product__title-link">'+product.name+'</a></p><div class="wmc-product__meta wmc-c">'+starRating+'<span class="wmc-product__price">&pound;'+price+'</span></div></div><div class="wmc-c"></div>'+promo+'<p class="wmc-product__desc">'+product.description+'</p><button class="wmc-product__cta quickAdd" data-sku="'+product.sku+'" data-product-id="'+product.productId+'">Quick Add</button></div>';   

            // Add Products HTML to DOM
            // $('.wmc-products').append(productHtml);
            product.tag === 'food' ? foodProducts.append(productHtml) : vhmsProducts.append(productHtml);

        };

        // Append Products HTML to DOM
        $('.wmc-products-wrap').append(foodProducts).append(vhmsProducts);

        
        // Tabs
        $('.js-product-tab').click(function() {
            const activeTabControlClass = 'product-list-tabs__control--active'
            const activeTabClass = 'wmc-products--active';
            const $target = $(this).data('tab');    

            $('.js-product-tab').removeClass(activeTabControlClass);
            $(this).addClass(activeTabControlClass);       
            
            $('.wmc-products').removeClass(activeTabClass);
            $('#wmc-products-' + $target).addClass(activeTabClass);
        });

    };


    // == Product Carousel (Mobile Only)
    // =============================================================== //
    /*
    function initProductCarousel(){    

        let productCarouselItemHtml = '';

        var productCarouselHtml = '<div class="wmc-carousel-container" id="wmc-product-carousel"><div class="wmc-product-carousel"></div></div>';

        // Loop through products
        for(let product of products) {
            const promo = (product.promo !== 'None') ? '<span class="wmc-product-carousel-item__promo-banner" style="background:'+product.promo.backgroundColor+'">'+product.promo.name+'</span>' : '';            
            const ratingWidth = (product.rating * 10 * 2) + 'px';
            const starRating = '<span class="wmc-product__star-ratings"><span class="wmc-product__rating" style="width:'+ratingWidth+'"></span></span>';
            const imgUrl = baseImgURL + product.img;
            const url = baseURL + product.url;
            
            // productCarouselItemHtml += `
            //     <div>
            //         <img src="'+imgUrl+'" alt="'+product.name+'" />
            //         ${promo}
            //         <a href="${url}">${product.name}</a>
            //             <div class="weight-management-campaign-meta">
            //                 ${starRating}
            //                 <span class="weight-management-campaign-product-price">£${product.price}</span>
            //             </div>
            //         <button class="ss-quick-add" data-sku="${product.sku}" data-product-id="${product.productId}">Quick Add</button>
            //     </div>`;    
            
            productCarouselItemHtml += '<div class="wmc-product-carousel-item"><img src="'+imgUrl+'" alt="'+product.name+'" class="wmc-product-carousel-item__img" />'+promo+'<a href="'+url+'" class="wmc-product-carousel-item__link">'+product.name+'}</a><div class="wmc-product-carousel-item__meta">'+starRating+'<span class="wmc-product-carousel-item__price">£'+product.price+'</span></div><button class="wmc-product-carousel-item__cta quickAdd" data-sku="'+product.sku+'" data-product-id="'+product.productId+'">Quick Add</button></div>'; 

        };
    

         // Add Products HTML to DOM
        $('.wmc-products-wrap').after(productCarouselHtml);

         // Add Products HTML to DOM
        $('.wmc-product-carousel').append(productCarouselItemHtml);
        
    }
    */
    
    
    
    




    // == Product List (Tablet+ only)
    // =============================================================== //
    function initAdvice() {

        let adviceCarouselHtml = '';

        const adviceTitle = 'Advice';

        const articles = [{
            title: 'Seven ways to lose weight naturally',
            intro: 'Simple science-backed things you can do to lose naturally.',
            image: '/the-health-hub/wp-content/uploads/2018/01/LoseWeightNaturally1-768x295.jpg',
            url: '/the-health-hub/seven-ways-lose-weight-naturally/'
        }, {
            title: 'The truth about calories',
            intro: 'We bust the myths and reveal the facts about the best types to target for slimming success.',
            image: '/the-health-hub/wp-content/uploads/2018/01/TruthAboutCalories1-768x295.jpg',
            url: '/the-health-hub/the-truth-about-calories/'
        }, {
            title: 'Is it all about healthy fats now?',
            intro: 'Why they don’t need to be the enemy.',
            image: '/the-health-hub/wp-content/uploads/2018/05/health-600x295.png',
            url: '/the-health-hub/healthy-fats-now/'
        }, {
            title: 'How to lose weight healthily and keep it off.',
            intro: 'The tips you actually need to slim down for life',
            image: '/the-health-hub/wp-content/uploads/2018/01/LoseWeightHealthily1-768x295.jpg',
            url: '/the-health-hub/lose-weight-healthily/'
        }, {
            title: '10 reasons running is good for you',
            intro: 'Look after your heart, strengthens muscles, and increases bone density.',
            image: '/the-health-hub/wp-content/uploads/2016/10/shutterstock_398069407-1-768x295.jpg',
            url: '/the-health-hub/how-good-is-running-for-you/'
        },{
            title: 'The bedroom workout',
            intro: 'Because who has the time (or money) to hit the gym?',
            image: '/the-health-hub/wp-content/uploads/2018/08/Bedroomworkout1-768x295.jpg',
            url: '/the-health-hub/the-bedroom-workout/'
        },{
            title: 'What’s the best diet for you?',
            intro: 'If you’re looking to improve your wellbeing, there’s a diet that’s right for you.',
            image: '/the-health-hub/wp-content/uploads/2019/01/weightmanagement_bestdiet_main-768x295.jpg',
            url: '/the-health-hub/whats-the-best-diet-for-you/'
        }];
                
        // Advice Section HTML
        const adviceHtml = '<section class="wmc-section wmc-section--advice"><div class="wmc-section__inner"><h1 class="wmc-title">'+adviceTitle+'</h1><div class="wmc-advice"><div class="wmc-carousel-container" id="wmc-advice-carousel"><div class="wmc-advice-carousel"></div></div></div></div></section>';
                              
        // Loop through advice
        articles.forEach(function(item){
            var extraClass = item.title === 'Discover more' ? ' wmc-advice-carousel-item__thumbnail--hub-article' : '';
            adviceCarouselHtml += '<div class="wmc-advice-carousel-item"><a href="'+ item.url + '" class="wmc-advice-carousel-item__thumbnail'+extraClass+'" style="background-image:url('+item.image+')"></a><a href="'+item.url+'" class="wmc-advice-carousel-item__link">'+item.title+'</a><p class="wmc-advice-carousel-item__synopsis">'+item.intro+'</p></div>'; 
        });

        
        // Append advice container to DOM
        $('.wmc-section--products').after(adviceHtml);

        // Add Advice HTML to DOM
        $('.wmc-advice-carousel').append(adviceCarouselHtml);



    };
    
      
        
    
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
                        self.text('Quick Add');
                    }, 1000);
                }
            });
        });
    
    });    




    



    
       
    
    // == Init Campaign Function
    // =============================================================== //
    function initCampaign(){
        initIntro();
        initProducts();
        initProductList();
        // initProductCarousel();
        initAdvice();
    }
    
    
    
        
    // == Init Content
    // =============================================================== //
    $(document).ready(function(){
        
        $('.global-banners').remove();
        
        // Empty main content container
        container.empty().attr('id', 'wmc-wrapper').show();
        
        // Init Campaign
        initCampaign();
    
        // Products Slider (mobile only)  
        /* $('.wmc-product-carousel').slick({    
            slidesToShow: 3,
            responsive: [
                {
                    breakpoint: 710,
                    settings: {
                        centerMode: false, 
                        // centerPadding: '30px',
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                    }
                }, {
                    breakpoint: 410,
                    settings: {
                        arrows: true,
                        centerMode: false,
                        slidesToShow: 1
                    }
                }
            ]
        });  */


        
        

        // Articles Slider
        $('.wmc-advice-carousel').slick({    
            centerPadding: '40px',
            slidesToShow: 5,
            responsive: [                
                 {
                    breakpoint: 1024,
                    settings: {
                        centerPadding: '30px',
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        arrows: true,
                        centerMode: false, 
                        slidesToShow: 2
                    }
                }, {
                    breakpoint: 480,
                    settings: {
                        arrows: true,
                        centerMode: false,
                        slidesToShow: 1
                    }
                }
            ]
        });  
                    
    });
    
            
        
    })(window, document);