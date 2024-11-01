(function(window, document) {
    var container = $('body > div[role="main"] > div:nth-of-type(1)');
    var baseURL = "https://www.hollandandbarrett.com/shop/product/";
    var baseImgURL = "https://images.hollandandbarrettimages.co.uk/productimages/";
    var promoProfiles = {
        thirtyThreeOff: {
            name: "33% off",
            backgroundColor: "#c73536",
            size: ""
        },
        twentyFiveOff: {
            name: "25% off",
            backgroundColor: "#c73536",
            size: ""
        },
        halfPrice: {
            name: "Half Price",
            backgroundColor: "#c73536",
            size: ""
        },
        bogohp: {
            name: "Buy One Get One Half Price",
            backgroundColor: "#c73536",
            size: "long"
        },
        penny: {
            name: "Buy One Get One for a Penny",
            backgroundColor: "#c73536",
            size: "long"
        },
        bthp: {
            name: "Better than Half Price",
            backgroundColor: "#c73536",
            size: "long"
        },
        threeForTwo: {
            name: "3 for 2",
            backgroundColor: "#c73536",
            size: ""
        },
        twoFor3mixandmatch: {
            name: "2 for £3.00<br/> Mix & Match",
            backgroundColor: "#c73536",
            size: "long"
        },
        twoFor7: {
            name: "2 for £7.00",
            backgroundColor: "#c73536",
            size: ""
        },
        greatSavings: {
            name: "Great Savings",
            backgroundColor: "#c73536",
            size: ""
        },
        blackTicketSale: {
            name: "Black Ticket Sale",
            backgroundColor: "#000",
            size: "long"
        }
    };
    var products = [ {
        name: "Garbanzo Dry Roasted Chickpeas Thai Sweet Chilli 65g",
        sku: "098299",
        productId: "60098299",
        url: "garbanzo-dry-roasted-chickpeas-thai-sweet-chilli-60098299?skuid=098299",
        price: .64,
        rating: 4.4,
        promo: promoProfiles.halfPrice,
        description: "Garbanzo Dry Roasted Chickpeas Thai Sweet Chilli flavour are slow roasted, deliciously nutty and crunchy, and seasoned with a unique blend of sweet and spice. Garbanzo is a delicious low calorie snack that helps to keep you fuller for longer.",
        img: "HB/724/098299_A.jpg",
        tag: "food"
    }, {
        name: "Holland & Barrett Organic Gluten Free Jumbo Oats 1kg",
        sku: "039796",
        productId: "60039796",
        url: "holland-barrett-organic-gluten-free-jumbo-oats-60039796?skuid=039796",
        price: 2.69,
        rating: 4.5,
        promo: "None",
        description: "Nothing artificial. Just good, pure oats. Perfect for your favourite breakfast and baking recipes.",
        img: "HB/370/039796_A.jpg",
        tag: "food"
    }, {
        name: "Holland & Barrett Pitted Prunes 400g",
        sku: "081285",
        productId: "60081285",
        url: "holland-barrett-pitted-prunes-60081285?skuid=081285",
        price: 3.99,
        rating: 4.4,
        promo: "None",
        description: "Our Holland & Barrett Prime Pitted Prunes are soft, succulent and whole pitted. Add to your breakfast in the morning for a low fat addition, or enjoy as a tasty snack!",
        img: "HB/724/081285_A.jpg",
        tag: "food"
    }, {
        name: "Holland & Barrett Almonds 100g",
        sku: "090987",
        productId: "60090987",
        url: "holland-barrett-almonds-60090987?skuid=090987",
        price: 1.79,
        rating: 4.6,
        promo: "None",
        description: "Available in a range of pack sizes, these awesome almonds are great for lunchboxes, cooking or baking, or perfect as an addictively moreish (and nutritious) party snack!",
        img: "HB/724/090987_A.jpg",
        tag: "food"
    }, {
        name: "Holland & Barrett Chia Seeds 275g",
        sku: "004458",
        productId: "60004458",
        url: "holland-barrett-chia-seeds-60004458?skuid=004458",
        price: 4.29,
        rating: 4.7,
        promo: promoProfiles.greatSavings,
        description: "Our Holland & Barrett Clever Chia Seeds are completely natural and are a must-have ingredient for the home baker! These tasty little seeds can be added to cereal, porridge, yoghurts, baking mixes and much, much more.",
        img: "HB/724/004458_A.jpg",
        tag: "food"
    }, {
        name: "Boombod 7 Day Achiever 21 Sachets",
        sku: "017346",
        productId: "60017346",
        url: "boombod-7-day-achiever-21-sachets-60017346?skuid=017346",
        price: 12.99,
        rating: 4.1,
        promo: promoProfiles.blackTicketSale,
        description: "Boombod sachets contain a quality source of the natural fibre glucomannan that reduces appetite, helps cleanse & decreases bloating.",
        img: "HB/724/017346_A.png",
        tag: "vhms"
    }, {
        name: "Holland & Barrett Raspberry Ketone Complex Capsules",
        sku: "021031",
        productId: "60021031",
        url: "holland-barrett-raspberry-ketone-complex-capsules-60021031?skuid=021031",
        price: 19.99,
        rating: 4,
        promo: "None",
        description: "Glucomannan has almost no calories, but is very high in fibre. It absorbs water in the stomach. When in contact with water, glucomannan expands and can absorb up to 50 times its weight.",
        img: "HB/724/021031_A.png",
        tag: "vhms"
    }, {
        name: "Holland & Barrett Super Green Tea Diet 60 Tablets",
        sku: "013256",
        productId: "60013256",
        url: "holland-barrett-super-green-tea-diet-tablets-60013256?skuid=013256",
        price: 3.99,
        rating: 3,
        promo: promoProfiles.blackTicketSale,
        description: "Suitable for vegetarians, Holland & Barrett Super Green Tea Diet Tablets blend of Caffeine, Guarana, chromium, Vitamin B6, Bladderwrack, Green Tea and Uva Ursi.",
        img: "HB/724/013256_A.png",
        tag: "vhms"
    }, {
        name: "Holland & Barrett Glucomannan 500mg 60 Capsules",
        sku: "029525",
        productId: "60029525",
        url: "holland-barrett-glucomannan-500mg-60029525?skuid=029525",
        price: 3.99,
        rating: 3.9,
        promo: promoProfiles.halfPrice,
        description: "Holland & Barrett Glucomannan (Konjac fibre) is a natural ingredient that in the context of a calorie controlled diet contributes to weight loss.",
        img: "HB/370/029525_A.jpg",
        tag: "vhms"
    } ];
    function initIntro() {
        var tipsHtml = "";
        var introTitle = "Discover expert advice & products to support your weight goals";
        var tips = [ {
            icon: "fas fa-heartbeat",
            body: "When looking to lose weight, you may be tempted to go for the ‘low fat’ and ‘low sugar’ alternatives in the supermarket. Although these are marketed as healthy options, they’re rarely lower in calories than regular food products."
        }, {
            icon: "fas fa-apple-alt",
            body: "When you’re on the go, take healthy snacks with you so you eat the right foods all the time and minimise the chance of grabbing an unhealthy alternative. I recommend high-protein snacks that help keep you fuller for longer: nuts, roasted chickpeas or a protein energy ball."
        }, {
            icon: "fas fa-utensils",
            body: "Do you know that using smaller plates has been shown to help some people automatically eat fewer calories? This is a classic trick that can help reset your brain into thinking you’re full."
        }, {
            icon: "fas fa-brain",
            body: "Do you know that it takes 20 minutes for your stomach to send signals to your brain to tell it that it’s full? Eating mindfully and slowly can really help reduce overconsumption and overindulgence and help with weight loss."
        }, {
            icon: "fas fa-leaf",
            body: "High fibre foods are an essential part of your weight management as they keep you feeling fuller for longer. They also provide additional benefits such as improved gut health. I recommend these high fibre foods: oats, prunes, potatoes and beans."
        } ];
        var introHtml = '<section class="wmc-section wmc-section--has-img wmc-section--intro"><div class="wmc-section__inner fadeInUp"><h1 class="wmc-title wmc-title--white">' + introTitle + '</h1><div class="wmc-tips"></div></section>';
        var bioPhotoUrl = "/__ssobj/static/hb-nutritionist-1.jpg";
        var bioName = "Donia";
        var bioRole = "Senior H&B Nutritionist";
        var bioQuote = "Whether you’re looking to make healthier choices at meal times or to lose a few pounds for an upcoming event, I’ve pulled together some of my top tips to help kick start your weight loss.";
        var bioHtml = '<figure class="wmc-bio"><img src="' + bioPhotoUrl + '" class="wmc-bio__photo" alt="' + bioName + ", " + bioRole + '" /><figcaption class="wmc-bio__quote-wrap"><p class="wmc-bio__quote">' + bioQuote + '</p><p class="wmc-bio__cite">- <strong>' + bioName + "</strong>, " + bioRole + "</p></figcaption></figure>";
        for (var _i = 0; _i < tips.length; _i++) {
            var tip = tips[_i];
            tipsHtml += '<article class="wmc-tip wmc-c"><span class="wmc-tip__icon-wrap"><i class="' + tip.icon + ' wmc-tip__icon"></i></span><p class="wmc-tip__body">' + tip.body + "</p></article>";
        }
        container.removeClass("page").append(introHtml);
        $(".wmc-tips").before(bioHtml);
        $(".wmc-tips").append(tipsHtml);
    }
    function initProducts() {
        var productTitle = "Top Product Picks";
        var foodTabCtrLabel = "Healthy Food & Drink";
        var vhmsTabCtrLabel = "Products to Support";
        var productsHtml = '<section class="wmc-section wmc-section--has-img wmc-section--products"><div class="wmc-section__inner"><h1 class="wmc-title wmc-title--white">' + productTitle + '</h1><ul class="product-list-tabs"><li class="product-list-tabs__control product-list-tabs__control--active js-product-tab" data-tab="food"><i class="fas fa-apple-alt product-list-tabs__control-icon"></i>' + foodTabCtrLabel + '</li><li class="product-list-tabs__control js-product-tab" data-tab="vhms"><i class="fas fa-pills product-list-tabs__control-icon"></i>' + vhmsTabCtrLabel + '</li></ul><div class="wmc-products-wrap"></div></div></section>';
        $(".wmc-section--intro").after(productsHtml);
    }
    function initProductList() {
        var productHtml = "";
        var foodProducts = $('<div class="wmc-products wmc-products--active" id="wmc-products-food"></div>');
        var vhmsProducts = $('<div class="wmc-products" id="wmc-products-vhms"></div>');
        for (var _i2 = 0; _i2 < products.length; _i2++) {
            var product = products[_i2];
            var promoBannerClass = product.promo.size === "long" ? "wmc-product__promo-banner wmc-product__promo-banner--long" : "wmc-product__promo-banner";
            var promo = product.promo !== "None" ? '<span class="' + promoBannerClass + '" style="background:' + product.promo.backgroundColor + '">' + product.promo.name + "</span>" : "";
            var ratingWidth = product.rating * 10 * 2 + "px";
            var starRating = '<span class="wmc-product__star-ratings"><span class="wmc-product__rating" style="width:' + ratingWidth + '"></span></span>';
            var imgUrl = baseImgURL + product.img;
            var url = baseURL + product.url;
            var price = product.price.toFixed(2);
            productHtml = '<div class="wmc-product"><a href="' + url + '"><img src="' + imgUrl + '?i10c=img.resize(width:200,height:200)" class="wmc-product__img" width="200" height="200"></a><div class="wmc-product__side"><p class="wmc-product__title"><a href="' + url + '" class="wmc-product__title-link">' + product.name + '</a></p><div class="wmc-product__meta wmc-c">' + starRating + '<span class="wmc-product__price">&pound;' + price + '</span></div></div><div class="wmc-c"></div>' + promo + '<p class="wmc-product__desc">' + product.description + '</p><button class="wmc-product__cta quickAdd" data-sku="' + product.sku + '" data-product-id="' + product.productId + '">Quick Add</button></div>';
            product.tag === "food" ? foodProducts.append(productHtml) : vhmsProducts.append(productHtml);
        }
        $(".wmc-products-wrap").append(foodProducts).append(vhmsProducts);
        $(".js-product-tab").click(function() {
            var activeTabControlClass = "product-list-tabs__control--active";
            var activeTabClass = "wmc-products--active";
            var $target = $(this).data("tab");
            $(".js-product-tab").removeClass(activeTabControlClass);
            $(this).addClass(activeTabControlClass);
            $(".wmc-products").removeClass(activeTabClass);
            $("#wmc-products-" + $target).addClass(activeTabClass);
        });
    }
    function initAdvice() {
        var adviceCarouselHtml = "";
        var adviceTitle = "Advice";
        var articles = [ {
            title: "Seven ways to lose weight naturally",
            intro: "Simple science-backed things you can do to lose naturally.",
            image: "/the-health-hub/wp-content/uploads/2018/01/LoseWeightNaturally1-768x295.jpg",
            url: "/the-health-hub/seven-ways-lose-weight-naturally/"
        }, {
            title: "The truth about calories",
            intro: "We bust the myths and reveal the facts about the best types to target for slimming success.",
            image: "/the-health-hub/wp-content/uploads/2018/01/TruthAboutCalories1-768x295.jpg",
            url: "/the-health-hub/the-truth-about-calories/"
        }, {
            title: "Is it all about healthy fats now?",
            intro: "Why they don’t need to be the enemy.",
            image: "/the-health-hub/wp-content/uploads/2018/05/health-600x295.png",
            url: "/the-health-hub/healthy-fats-now/"
        }, {
            title: "How to lose weight healthily and keep it off.",
            intro: "The tips you actually need to slim down for life",
            image: "/the-health-hub/wp-content/uploads/2018/01/LoseWeightHealthily1-768x295.jpg",
            url: "/the-health-hub/lose-weight-healthily/"
        }, {
            title: "10 reasons running is good for you",
            intro: "Look after your heart, strengthens muscles, and increases bone density.",
            image: "/the-health-hub/wp-content/uploads/2016/10/shutterstock_398069407-1-768x295.jpg",
            url: "/the-health-hub/how-good-is-running-for-you/"
        }, {
            title: "The bedroom workout",
            intro: "Because who has the time (or money) to hit the gym?",
            image: "/the-health-hub/wp-content/uploads/2018/08/Bedroomworkout1-768x295.jpg",
            url: "/the-health-hub/the-bedroom-workout/"
        }, {
            title: "What’s the best diet for you?",
            intro: "If you’re looking to improve your wellbeing, there’s a diet that’s right for you.",
            image: "/the-health-hub/wp-content/uploads/2019/01/weightmanagement_bestdiet_main-768x295.jpg",
            url: "/the-health-hub/food-drink/diets/whats-the-best-diet-for-you/"
        } ];
        var adviceHtml = '<section class="wmc-section wmc-section--advice"><div class="wmc-section__inner"><h1 class="wmc-title">' + adviceTitle + '</h1><div class="wmc-advice"><div class="wmc-carousel-container" id="wmc-advice-carousel"><div class="wmc-advice-carousel"></div></div></div></div></section>';
        articles.forEach(function(item) {
            var extraClass = item.title === "Discover more" ? " wmc-advice-carousel-item__thumbnail--hub-article" : "";
            adviceCarouselHtml += '<div class="wmc-advice-carousel-item"><a href="' + item.url + '" class="wmc-advice-carousel-item__thumbnail' + extraClass + '" style="background-image:url(' + item.image + ')"></a><a href="' + item.url + '" class="wmc-advice-carousel-item__link">' + item.title + '</a><p class="wmc-advice-carousel-item__synopsis">' + item.intro + "</p></div>";
        });
        $(".wmc-section--products").after(adviceHtml);
        $(".wmc-advice-carousel").append(adviceCarouselHtml);
    }
    $(document).on("click", ".quickAdd", function(e) {
        var self = $(this);
        var _dynSessConf = $("input[name='_dynSessConf']").attr("value");
        var skuID = $(this).attr("data-sku");
        var prodId = $(this).attr("data-product-id");
        var data = {
            _dyncharset: "UTF-8",
            _dynSessConf: _dynSessConf,
            productId: prodId,
            skuId: skuID,
            quantity: 1
        };
        self.html("").addClass("in-progress");
        $.ajax({
            url: "/modules/ajax/addItemToOrder.jsp",
            method: "POST",
            data: $.param(data),
            success: function success(result) {
                self.removeClass("in-progress").text("Added");
            }
        }).then(function() {
            $.ajax({
                url: "/modules/ajax/basket-masthead.jsp",
                success: function success(result) {
                    $(".js-header-basket-link").html(result);
                    setTimeout(function() {
                        self.text("Quick Add");
                    }, 1e3);
                }
            });
        });
    });
    function initCampaign() {
        initIntro();
        initProducts();
        initProductList();
        initAdvice();
    }
    $(document).ready(function() {
        $(".global-banners").remove();
        container.empty().attr("id", "wmc-wrapper").show();
        initCampaign();
        $(".wmc-advice-carousel").slick({
            centerPadding: "40px",
            slidesToShow: 5,
            responsive: [ {
                breakpoint: 1024,
                settings: {
                    centerPadding: "30px",
                    slidesToShow: 3
                }
            }, {
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
            } ]
        });
    });
})(window, document);