$(document).ready(function(){

  $('#menu').click(function(){

      $(this).toggleClass('fa-times');
      $('.navbar').toggleClass('nav-toggle');

  });

  $(window).on('load scroll',function(){

    $('#menu').removeClass('fa-times');
    $('.navbar').removeClass('nav-toggle');

    if($(window).scrollTop() > 0){
      $('#scroll-top').show();
    }else{
      $('#scroll-top').hide();
    }

  });

  // smooth scrolling 

  $('a[href*="#"]').on('click',function(e){

    e.preventDefault();

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top,

    },
      500,
      'linear'
    );

  });

});


const timeline = document.querySelector('.timeline');
const timelineContainers = document.querySelectorAll('.timeline-container');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      timeline.classList.add('show-line');
      timeline.classList.remove('hide-line');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.8
});

timelineContainers.forEach(container => {
  observer.observe(container);
});

window.addEventListener('scroll', () => {
  const timelineRect = timeline.getBoundingClientRect();
  const top = timelineRect.top;
  const bottom = timelineRect.bottom;

  if (top > window.innerHeight / 2 || bottom < window.innerHeight / 2) {
    timeline.classList.remove('show-line');
    timeline.classList.add('hide-line');
  } else {
    timeline.classList.add('show-line');
    timeline.classList.remove('hide-line');
  }
});
