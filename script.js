// Создание JS-объектов и свойств
var team = {
    name: "LATA",
    members: ["Lyailya", "Aiganym", "Tomiris", "Akbota"],
    leader: "Lyailya"
  };
  
  // Использование селекторов, методов и событий
  document.addEventListener("DOMContentLoaded", function() {
    var linkMore = document.querySelector(".link-more");
    linkMore.addEventListener("click", function(event) {
      event.preventDefault();
      alert("Leave a comment");
    });
  
    var logoImage = document.querySelector("nav img");
    logoImage.addEventListener("mouseover", function() {
      this.style.transform = "rotate(360deg)";
    });
  
    document.addEventListener("keypress", function(event) {
      console.log("Key pressed:", event.key);
    });
  });
  
  // Создание анимации с помощью функций JS
  function animateElement(element, property, start, end, duration) {
    var startTimestamp = null;
  
    function step(timestamp) {
      if (!startTimestamp) startTimestamp = timestamp;
      var progress = timestamp - startTimestamp;
      element.style[property] = Math.min(progress / duration * (end - start) + start, end) + "px";
      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    }
  
    window.requestAnimationFrame(step);
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    var carouselNext = document.querySelector(".carousel-control-next");
    carouselNext.addEventListener("click", function() {
      var carouselInner = document.querySelector(".carousel-inner");
      animateElement(carouselInner, "transform", 0, -800, 1000);
    });
  });
  
  // Воспроизведение звука на странице с помощью JS
  document.addEventListener("DOMContentLoaded", function() {
    var audioElement = document.createElement("audio");
    audioElement.src = "sound.wav";
    audioElement.preload = "auto";
  
    var playButton = document.createElement("button");
    playButton.textContent = "Play Sound";
    playButton.addEventListener("click", function() {
      audioElement.play();
    });
  
    document.body.appendChild(playButton);
  });
  