const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  let index = 0;
  
  function onKeyDownHandler(e) {
    const key = e.key;
    
    if (key === codes[index]) {
      index++;
      if (index === codes.length){
        alert("You got it!");
        
        index = 0;
      }
    } else {
      index = 0;
    }
  }
  
  const body = document.body;
  
  body.addEventListener('keydown', onKeyDownHandler)
}
