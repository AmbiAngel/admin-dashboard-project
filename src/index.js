import "./style.css"
import otto from './imgs/cool-otto.png';

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  const images = importAll(require.context('./imgs/icons', false, /\.(png|jpe?g|svg)$/));