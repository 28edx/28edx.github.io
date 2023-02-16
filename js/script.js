window.addEventListener('scroll', function(e) {
  const scrollY = window.pageYOffset;

  const parallaxItems = document.querySelectorAll('.parallax');

  parallaxItems.forEach(function(parallaxItem) {
      
      const movement = -( (scrollY - parallaxItem.offsetTop ) * .4 );

      parallaxItem.children[0].style.transform = 'translateY(' + movement + 'px)';   
      
  });
});