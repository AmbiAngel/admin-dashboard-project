import "./style.css"
import otto from './imgs/cool-otto.png';

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  const images = importAll(require.context('./imgs/icons', false, /\.(png|jpe?g|svg)$/));


let cardContainers = Array.from(document.querySelectorAll('.card-btnContainer')) 

cardContainers.forEach(cardContainer =>{
    // generate buttons and append them
    let favBtn = document.createElement('button')
    favBtn.classList.add('favBtn')
    let favIcon = document.createElement('img')
    favIcon.setAttribute('src', './images/star-plus-outline.svg')
    favBtn.appendChild(favIcon)
    cardContainer.appendChild(favBtn)

    let watchBtn = document.createElement('button')
    watchBtn.classList.add('watchBtn')
    let watchIcon = document.createElement('img')
    watchIcon.setAttribute('src', './images/eye-plus-outline.svg')
    watchBtn.appendChild(watchIcon)
    cardContainer.appendChild(watchBtn)

    let shareBtn = document.createElement('button')
    shareBtn.classList.add('shareBtn')
    let shareIcon = document.createElement('img')
    shareIcon.setAttribute('src', './images/share-variant-outline.svg')
    shareBtn.appendChild(shareIcon)
    cardContainer.appendChild(shareBtn)
})
