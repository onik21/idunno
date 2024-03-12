var clickCount = 0;

function revealFeeling() {
  clickCount++;
  var responseDiv = document.getElementById('response');
  responseDiv.style.display = 'block';
  
  switch(clickCount) {
    case 1:
      responseDiv.innerHTML = "na ano";
      break;
    case 2:
      responseDiv.innerHTML = "ang cute mo";
      break;
    case 3:
      responseDiv.innerHTML = "Napaka ganda mo";
      break;
    case 4:
        responseDiv.innerHTML = "Sobrang ganda mo";
        break;
    case 5:
        responseDiv.innerHTML = "Good luck sayo!";
        break;
    case 6:
        responseDiv.innerHTML = "iba talga tama pag ano";
        break;
    default:
      responseDiv.innerHTML = "hulaan";
  }
}
