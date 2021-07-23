import '../css/Berkeley.css';
import ContentHeader from "../components/ContentHeader";
import BerkeleyHeaderImage from "../img/berkeley-header.jpg";

export default function Berkeley() {
  return (
    <div className="berkeley">
      <div className="berkeley-container">
          <ContentHeader
            headerTitle="UC-Berkeley"
            headerDate="August 2017 - May 2021"
            headerTagline="Cal is so much more than merely a space to learn. 
            It's a place where people with diverse backgrounds, career paths, hopes, and dreams converge to share their experiences and build a better world."
            headerImage={BerkeleyHeaderImage}
            titleColor="#FDB515"
            dateColor="#3B7EA1"
            taglineColor="#fff"
          />
      </div> 
    </div>
  );
}