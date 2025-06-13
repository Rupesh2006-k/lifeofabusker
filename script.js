gsap.to('.overlay',{
    y:-200,
    duration:20,
    scrollTrigger:{
        trigger:'.page3',
        start:'top top',
        end:'bottom bottom',
        scrub:2,
    }
})
gsap.to('.page4',{
    y:-300,
    duration:20,
    scrollTrigger:{
        trigger:'.page3',
        start:'top top',
        end:'bottom bottom',
        scrub:2,
    }
})

let loader = document.querySelector("#loader");
setTimeout(function(){
  loader.style.top = '-100%'

},2000);

// circle animation
const circle = document.querySelector('.circle"');
    let rotation = 0;
    let lastScrollY = document.scrollY;
    let scrollBoost = 0;

    // Scroll event to increase speed and direction
    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;

      scrollBoost = delta * 1; // boost rotation speed
      lastScrollY = currentScrollY;
    });

    // Auto-rotate function
    function animate() {
      // Slowly reduce scrollBoost effect
      scrollBoost *= 2;

      // Add base rotation + scrollBoost
      rotation += 3 + scrollBoost;
      circle.style.transform = `rotate(${rotation}deg)`;

      requestAnimationFrame(animate);
    }

    animate(); // Start the loop