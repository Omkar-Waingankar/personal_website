import '../css/EightVC.css';
import ContentHeader from "../components/ContentHeader";
import EightVCHeaderImage from "../img/eightvc_header.jpg";

export default function EightVC() {
  return (
    <div className="eightvc">
      <div className="eightvc-container">
          <ContentHeader
            headerTitle="8VC"
            headerDate="Jan. 2021 - May 2021"
            headerTagline="8vC is so much more than merely a space to learn. 
            It's a place where people with diverse backgrounds, career paths, hopes, and dreams converge to share their experiences and build a better world."
            headerImage={EightVCHeaderImage}
            titleColor="#7000ff"
            dateColor="#E2CCFF"
            taglineColor="#888"
          />
      </div> 
    </div>
  );
}