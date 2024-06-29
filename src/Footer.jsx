import facebookicon from '/icon-facebook.svg';
import pinteresticon from '/icon-pinterest.svg';
import instagramicon from '/icon-instagram.svg';

export default function Footer() {
  return (
    <footer>

      <div className="icons">
        <a href='#'><img src={facebookicon} alt='' /></a>
        <a href='#'><img src={pinteresticon} alt='' /></a>
        <a href='#'><img src={instagramicon} alt='' /></a>
      </div>

      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/ajkun55/Launch-countdown-timer">John A</a>.
      </div>
    </footer>    
  )
}
