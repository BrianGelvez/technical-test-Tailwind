document.addEventListener("DOMContentLoaded", function() {

    let collection1Swiper, collection2Swiper, collection3Swiper, collection4Swiper;

    function initSwipers() {
        collection1Swiper = new Swiper('.collection1-swiper', {
            direction: 'horizontal',
            loop: false,
            slidesPerView: 3,  
            spaceBetween: 30,  
            pagination: {
                el: '.swiper-pagination',
            },
            allowTouchMove: true,
            breakpoints: {
                1024: {
                    slidesPerView: 5, 
                    spaceBetween: 50
                }
            }
        });

        collection2Swiper = new Swiper('.collection2-swiper', {
            direction: 'horizontal',
            loop: false,
            slidesPerView: 3, 
            spaceBetween: 30, 
            pagination: {
                el: '.swiper-pagination',
            },
            allowTouchMove: true,
            breakpoints: {
                1024: {
                    slidesPerView: 5,  
                    spaceBetween: 50
                }
            }
        });

        collection3Swiper = new Swiper('.collection3-swiper', {
            direction: 'horizontal',
            loop: false,
            slidesPerView: 3,  
            spaceBetween: 30,  
            pagination: {
                el: '.swiper-pagination',
            },
            allowTouchMove: true,
            breakpoints: {
                1024: {
                    slidesPerView: 5,  
                    spaceBetween: 50
                }
            }
        });

        collection4Swiper = new Swiper('.collection4-swiper', {
            direction: 'horizontal',
            loop: false,
            slidesPerView: 3, 
            spaceBetween: 30, 
            pagination: {
                el: '.swiper-pagination',
            },
            allowTouchMove: true,
            breakpoints: {
                1024: {
                    slidesPerView: 5, 
                    spaceBetween: 50
                }
            }
        });
    }

    function destroySwipers() {
        if (collection1Swiper && collection1Swiper.destroy) {
            collection1Swiper.destroy();
        }

    
    }

    function handleResize() {
        const isMobile = window.innerWidth <= 1024;
        if (isMobile) {
            destroySwipers();
            initSwipers();
        } else {
            destroySwipers();
            initSwipers();
        }
    }

    window.addEventListener('resize', handleResize);


    initSwipers();
    handleResize();


    const menuButton = document.getElementById("menuButton");
    const menu = document.getElementById("menu");
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
    let active = false;

    if (window.innerWidth <= 1024) {
        menu.classList.add("hidden");
    }

    menuButton.addEventListener("click", () => {
        menu.classList.toggle("hidden");

    });


    window.addEventListener("resize", () => {
        if (window.innerWidth <= 1024) {
            menu.classList.add("hidden");
        } else {
            menu.classList.remove("hidden");
        }
    });

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
      
        pagination: {
          el: '.swiper-pagination',
        },
      
        navigation: {
          nextEl: '.butonArrow2',
          prevEl: '.butonArrow1',
        },
      
    
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });

      tabs.forEach(tab => {
        tab.addEventListener('click', () => {

            tabs.forEach(tab => {
                tab.classList.remove('active', 'tab-indicator', 'bg-colorGreen', 'text-white', 'rounded-xl');
            });

            tabContents.forEach(content => {
                content.classList.add('hidden');
            });

          
            const collection = tab.getAttribute('data-collection');
            const activeContent = document.querySelector(`.tab-content.${collection}`);
            activeContent.classList.remove('hidden');
            activeContent.classList.add('active');

            tab.classList.add('active', 'tab-indicator', 'bg-colorGreen', 'text-white', 'rounded-xl', 'px-5');
        });
    });




});


