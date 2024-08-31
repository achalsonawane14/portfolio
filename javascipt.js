var typed = new Typed('#element', {
    strings: ['Hello, My name is <span class="namecolour">Achal</span> and I am a passionate  <span class="namecolour"> Web developer!</span> '],
    typeSpeed: 30,
    html: true,
    showCursor: false,  // This will hide the cursor after typing
  });
  document.getElementById('myButton').onclick = function() {
    window.location.href = 'Skill.html'; // Opens the Skill.html file
};

// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
