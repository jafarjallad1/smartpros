


checkToken();



const swiper = new Swiper('.swiper', {
    speed: 800,
    spaceBetween: 100,
    autoplay: {
        delay: 1500,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
     
  });

  let slider = document.querySelector('.swiper .swiper-wrapper');
let slides = [
  {
    name: "slide1" , src : "./css/img/undraw_data_report_re_p4so.svg",
  },
  {
    name: "slide2", src : "./css/img/undraw_online_articles_re_yrkj.svg",
  },
  {
    name: "slide3", src : "./css/img/undraw_credit_card_re_blml.svg",
  }
];

slides.forEach((slide, index) => {
  slider.innerHTML += `<div class="swiper-slide"><img src="${slide.src}" alt="${slide.name}"></div>`;
});


  
  let email = document.querySelector('#email');
  let password = document.querySelector('#password');
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
 
  function logiin(event) {
    event.preventDefault();
    let checkbox = document.querySelector("#check");
  let checkval = checkbox.checked;
    emailvalue = email.value.trim().toLowerCase();
    passwordvalue = password.value;
    console.log(regex.test(emailvalue));
    if(regex.test(emailvalue)){

      if(passwordvalue.length >= 8){
        let res = {
          msg : "success",
          token : 112233,
        }

        if(checkval){
          localStorage.setItem('token', res.token);
        }
        else{
          sessionStorage.setItem('token', res.token);
        }
        
        console.log('valid');

        window.location.href = 'home.html';
      }else{
        alert('invalid password');
      }
    }
    else{
      alert('invalid email');
    }
}
  
function checkToken(){
  let token = localStorage.getItem('token') || sessionStorage.getItem('token');
  if(token){
    let res = true;
    if(res){
      window.location.href = 'home.html';
    }
    else{
     
      localStorage.clear();
      sessionStorage.clear();
    }
  }
  else{
   
    localStorage.clear();
    sessionStorage.clear();
  }
}

window.addEventListener('resize', () => {
let width = window.innerWidth;
console.log(width);
  
});