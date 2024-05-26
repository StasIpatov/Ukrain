let logo1 = anime({
    targets: ".fixed",
    keyframes: [
     
      {
        
        rotate: 180,
      },
      {
        
        rotate: 360,
      },
      {
        scale: 1.2,
      },
      {
        scale: 1,
      }
    ],
    duration: 2000,
    easing: "linear",
    autoplay: false,
  
  })
  document.querySelector('.fixed') .addEventListener('click', logo1.play)
  