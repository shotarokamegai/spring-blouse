import * as THREE from 'three';
import Scroll from './utils/Scroll';
// import frag from "./../../assets/shader/main.frag?raw";
// import vert from "./../../assets/shader/main.vert?raw";

class main {
  constructor() {
    this.width = window.innerWidth;
    this.height = window.innerWidth;
    this.header = document.getElementById('header');
    this.toTop = document.getElementById('to-top');
    this.top = document.getElementById('top');
    this.home = document.getElementById('home');
    this.style01 = document.getElementById('style01');
    this.modal = document.getElementById('modal');
    this.container = document.getElementById('container');
    this.visitor = document.getElementById('visitor');
    this.ceu = document.getElementById('challenge-enthusiasm-unity');
    this.menu = document.getElementById('menu');
    this.footer = document.getElementById('footer');
    this.kv = document.getElementsByClassName('kv-img');
    this.textTarget = document.getElementsByClassName('text-target');
    this.swiperContainer = document.getElementsByClassName('swiper-container');
    this.qa = document.getElementsByClassName('qa-faq');
    this.modalTrigger = document.getElementsByClassName('modal-trigger');
    this.scrollTrigger = document.getElementsByClassName('scroll-trigger');
    this.menuTrigger = document.getElementsByClassName('menu-trigger');
    this.index = 0;
    this.scroller = document.body;
    this.scrollingElement =
      'scrollingElement' in document
        ? document.scrollingElement
        : window.navigator.userAgent.indexOf('WebKit') != -1
          ? body
          : document.documentElement || body.parentNode;

    gsap.registerPlugin(ScrollTrigger);
    Splitting();
    this.init();
    this.animationScroll();
    for (let i = 0; i < this.menuTrigger.length; i++) {
      this.menuTrigger[i].addEventListener('click', this.triggerMenu.bind(this));
    }
    for (let i = 0; i < this.qa.length; i++) {
      this.qa[i].addEventListener('click', this.triggerQa.bind(this));
    }
    for (let i = 0; i < this.scrollTrigger.length; i++) {
      this.scrollTrigger[i].addEventListener('click', this.toScroll.bind(this));
    }
    for (let i = 0; i < this.modalTrigger.length; i++) {
      this.modalTrigger[i].addEventListener('click', this.triggerModal.bind(this));
    }
    window.onresize = () => {
      this.resizeEvent();
    }
    window.onscroll = () => {
      this.scrollAnimation();
    }
  }

  gifAnim() {
    if (this.index < this.kv.length-1) {
      this.index++;
    } else {
      this.index = 0;
    }
    for (let i = 0; i < this.kv.length; i++) {
      this.kv[i].classList.remove('active');
    }
    this.kv[this.index].classList.add('active');
  }

  animationScroll() {
    let addactive = document.getElementsByClassName('addactive');
    let parallax = document.getElementsByClassName('parallax');
    let vertical = document.getElementById('vertical');
    let targetImg = document.getElementsByClassName('style-imgs-back');
    let scaleUp = document.getElementsByClassName('scale-up');

    gsap.to(vertical, {
      height: '100vh',
      // ease: "power4.inOut",
      scrollTrigger: {
        trigger: this.style01,
        start: `top center`,
        // end: `top center`,
        // scrub: 1,
        // invalidateOnRefresh: true,
        onEnter: () => {
          this.vertical.classList.add('active');
        }
      }
    });

    // for (let i = 0; i < scaleUp.length; i++) {
    //   let elm = scaleUp[i];
    //   gsap.set(elm, {scale: 0});
    //   gsap.to(elm, {
    //     scale: 1,
    //     ease: "power1.out",
    //     scrollTrigger: {
    //       trigger: elm,
    //       start: `top bottom`, 
    //       end: `center center`,
    //       scrub: 1,
    //     }
    //   });
    // }
    // for (let i = 0; i < targetImg.length; i++) {
    //   let target = targetImg[i];
    //   let path1 = 'polygon(0px 0px, 100% 0px, 100% 0%, 0% 0%)';
    //   let path2 = "polygon(0% 0px, 100% 0px, 100% 100%, 0% 100%)";

    //   // if (document.getElementsByClassName(`cover${i+1}`)[0].classList.contains('cover-left')) {
    //   //   path1 = 'polygon(100% 0px, 100% 0px, 100% 100%, 100% 100%)';
    //   //   path2 = "polygon(0% 0px, 100% 0px, 100% 100%, 0% 100%)";
    //   // }
    //   let clip_polygon = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: target,
    //       start: "top center",
    //       end: "center center",
    //       scrub: true,
    //     }
    //   });
    //   clip_polygon.fromTo(
    //     target,
    //     {
    //       clipPath: path1
    //     },
    //     {
    //       clipPath: path2,
    //       duration: 1.5
    //     }
    //   );
    // }

    for (let i = 0; i < parallax.length; i++) {
      let elm = parallax[i];
      let amount = elm.getAttribute('data-amount');
      gsap.fromTo(elm, {
        y: () => `${amount/ -2}%`,
      }, {
        y: () => `${amount/ 2}%`,
        ease: "power1.out",
        scrollTrigger: {
          trigger: elm,
          start: `top bottom`, 
          end: `bottom top`,
          scrub: 1,
          invalidateOnRefresh: true
        }
      });
    }

    ScrollTrigger.create({
      trigger: '#home',
      start: "top top", 
      end: `bottom bottom`, 
      pin: '.pin-home'
    })
    
    ScrollTrigger.create({
      trigger: '#visitor',
      start: "top top", 
      end: `bottom bottom`, 
      pin: '.pin-visitor'
    })

    gsap.to(this.container, {
      ease: "power4.inOut",
      backgroundColor: `#000000`,
      scrollTrigger: {
        trigger: this.visitor,
        start: `top center`, 
        end: `top top`, 
        scrub: true,
      }
    });

    gsap.to(this.ceu, {
      ease: "power4.inOut",
      backgroundColor: `#ffffff`,
      scrollTrigger: {
        trigger: this.ceu,
        start: `top center`, 
        end: `top top`, 
        scrub: true,
      }
    });

    for (let i = 0; i < addactive.length; i++) {
      let elm = addactive[i];
      let start = `top center+=${window.innerHeight/4}`;
      if (elm.classList.contains('first')) {
        start = `top center+=${window.innerHeight/2}`;
      }
      gsap.to(elm, {
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: elm,
          start: start, 
          onEnter: () => {
            elm.classList.add('active');
            if (elm.classList.contains('show')) {
              setTimeout(() => {
                elm.classList.add('nowillchange');
              }, 3000)
            }
          }
        }
      });
    }
  }

  initSwiper() {
    for (let i = 0; i < this.swiperContainer.length; i++) {
      let thisSwiper = this.swiperContainer[i];
      let space = this.width * .02544529262086514;
      let slides = 1.5;
      let speed = 700;
      let loop = true;
      let  initialSlide = 0;
      let autoplay = {
          delay: 3000,
          // pauseOnMouseEnter: true,
          disableOnInteraction: false,
        };
      if (thisSwiper.classList.contains('marquee-slider')) {
        speed = 80000;
        slides = 1;
        space = 0;
        autoplay = {
          delay: 0,
          // pauseOnMouseEnter: true,
          disableOnInteraction: false,
        };
      }
      new Swiper(thisSwiper, {
        // Optional parameters
        // direction: 'vertical',
        speed: speed,
        initialSlide: initialSlide,
        loop: loop,
        autoplay: autoplay,
        slidesPerView: slides,
        spaceBetween: space,
      });
    }
  }

  triggerModal(e) {
    let elm = e.currentTarget;
    if (this.modal.classList.contains('active')) {
      this.modal.classList.remove('active');
      setTimeout(() => {
        for (let i = 0; i < this.textTarget.length; i++) {
          this.textTarget[i].classList.remove('active');
        }
      }, 1000);
    } else {
      let target = document.getElementById(elm.getAttribute('data-target'));
      target.classList.add('active');
      this.modal.classList.add('active');
    }
  }

  triggerQa(e) {
    let elm = e.currentTarget;
    let a = elm.getElementsByClassName('a')[0];
    let aInner = a.getElementsByClassName('a__inner')[0];

    if (elm.classList.contains('active')) {
      elm.classList.remove('active');
      a.setAttribute('style', `height: 0`);
    } else {
      elm.classList.add('active');
      a.setAttribute('style', `height: ${aInner.clientHeight}px`);
    }
  }
  
  toScroll(e) {
    const elm = e.currentTarget;
    const target = document.getElementById(elm.getAttribute('data-target'));
    let elemRect = target.getBoundingClientRect();
    let scrollY = window.scrollY || window.pageYOffset;
    let top = elemRect.top + scrollY;

    // top -= this.header.clientHeight;

    Scroll.to(top, 2);
  }


  init() {
    this.resizeEvent();
    this.lenis();
    this.initSwiper();
    window.scrollTo(0, 0);
    document.body.classList.add('loaded');
    setTimeout(() => {
      this.interval = setInterval(this.gifAnim.bind(this), 2500);
    }, 1000);
  }

  resizeEvent() {
    let vh = window.innerHeight * 0.01;
    // カスタム変数--vhの値をドキュメントのルートに設定
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    if (this.width < 750) {
    } else {
    ScrollTrigger.refresh();
    }
    // this.checkBreakPoint();
  }
  scrollAnimation() {
    this.scrollY = this.scrollingElement.scrollTop;

    // if (this.scrollY > this.height) {
    //   this.toTop.classList.add('active');
    // } else {
    //   this.toTop.classList.remove('active');
    // }
  }
  lenis() {
    let lerp = .8;
    let duration = 1.1;
    if (this.width < 750) {
      // lerp = .1;
      // duration = 3;
      // this.lenisInstance = new Lenis({
      //   lerp: lerp,
      //   duration: duration,
      //   smooth: true,
      //   smoothTouch: true,
      // })
    } else {
      if (this.browserName === 'Safari' && parseFloat(this.browserVersion) < 14) {
      } else {
        this.lenisInstance = new Lenis({
          lerp: lerp,
          duration: duration
        })
      }
    }

    if (this.lenisInstance) {
      gsap.ticker.add((time)=>{
        this.lenisInstance.raf(time * 1000)
      })
    }
  }

}

window.addEventListener("load", () => {
  new main();
});
