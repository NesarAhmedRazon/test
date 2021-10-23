
    $(function() {
        $('#slick').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 100000,
            dots: true,
            arrows: false,
            infinite: true,
            dotsClass:'carousel-indicators slick',
            responsive: [
                {
                  breakpoint: 1400,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                  }
                },{
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 800,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
              ]
            });

        
    });

    const els = document.querySelectorAll('.stars'),        
        rat = document.querySelectorAll('.rating');

        els.forEach(function(e,i,a) {
            let fill = e.querySelector('.fill-ratings');
            fill.style.width = (Number(rat[i].innerText)/5)*100+"%";
          })
    
