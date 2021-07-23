import '../css/Splash.css';
import PortraitPhoto from "../img/splash.jpg";
import SplashButton from "../components/SplashButton";

export default function Splash() {
  return (
    <div className="splash">
      <div className="splash-container">
        <div className="portrait">
            <img src={PortraitPhoto} alt="omkie" className="portrait-image"/>
        </div>
        <div className="content">
            <div className="content-container">
              <p className="header">Hello!</p>
              <p className="intro">My name's Omkar and I'm a software engineer at Nylas. 
              I'm from Atlanta, currently live in New York City, and just graduated from UC-Berkeley. 
              I love technology, music, salsa, snowboarding, hiking, and traveling.
              Click below to learn about the people, passions, and pastimes that mean so much to me!
              </p>
              <div className="button-tray">
                <SplashButton link="/nylas" borderColor="#00C8A7" backgroundColor="#E5F9F6" text="Nylas" textColor="black"/>
                <SplashButton link="/berkeley" borderColor="#003262" backgroundColor="#EBF2F5" text="UC-Berkeley" textColor="#FDB515"/>
                <SplashButton link="/8vc" borderColor="#7000ff" backgroundColor="#E2CCFF" text="8VC" textColor="black"/>
                <SplashButton link="/flipout" borderColor="#1D3461" backgroundColor="#D6DAE2" text="Flipout" textColor="#1D3461" />
                <SplashButton link="/amazon" borderColor="#232f3e" backgroundColor="#F9E4CF" text="Amazon" textColor="#e47911"/>
                <SplashButton link="/adventure" borderColor="#006642" backgroundColor="#E3FAF2" text="Adventure" textColor="#006642"/>
              </div>
              <p className="intro">Contact: omkar (dot) waingankar (at) gmail (dot) com</p>
            </div>
        </div>
      </div> 
    </div>
  );
}