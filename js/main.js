$((function(){if($(".burger__menu").on("click",(function(){$(".burger__menu").toggleClass("burger__menu--active"),$(".header__rightbox").toggleClass("header__rightbox--active"),$("body").toggleClass("hidden")})),$(".slider__wrapper").slick({infinite:!0,slidesToShow:1,slidesToScroll:1,arrows:!1,autoplay:!0,speed:0,fade:!0,cssEase:"linear",autoplaySpeed:2e3,pauseOnHover:!1}),$("body *").is("#scene")){var e=document.getElementById("scene");new Parallax(e)}if($("body *").is("#scene1")){var n=document.getElementById("scene1");new Parallax(n)}if($("body *").is("#scene2")){var a=document.getElementById("scene2");new Parallax(a)}if($("body *").is("#scene3")){var s=document.getElementById("scene3");new Parallax(s)}if($("body *").is("#scene4")){var l=document.getElementById("scene4");new Parallax(l)}if($("body *").is("#scene5")){var t=document.getElementById("scene5");new Parallax(t)}if($("body *").is("#scene6")){var d=document.getElementById("scene6");new Parallax(d)}if($("body *").is("#scene7")){var r=document.getElementById("scene7");new Parallax(r)}}));