import '../css/Flipout.css';
import ContentHeader from "../components/ContentHeader";
import FlipoutHeaderImage from "../img/flipout_header.jpg";

export default function Flipout() {
  return (
    <div className="flipout">
      <div className="flipout-container">
          <ContentHeader
            headerTitle="Flipout"
            headerDate="Jan. 2019 - Mar. 2020"
            headerTagline="Flipout is so much more than merely a space to learn. 
            It's a place where people with diverse backgrounds, career paths, hopes, and dreams converge to share their experiences and build a better world."
            headerImage={FlipoutHeaderImage}
            titleColor="#1D3461"
            dateColor="#D6DAE2"
            taglineColor="black"
          />
      </div> 
    </div>
  );
}