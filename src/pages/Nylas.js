import '../css/Nylas.css';
import ContentHeader from "../components/ContentHeader";
import NylasHeaderImage from "../img/nylas_header.jpg";

export default function Nylas() {
  return (
    <div className="nylas">
      <div className="nylas-container">
          <ContentHeader
            headerTitle="Nylas"
            headerDate="May 2021 - Present"
            headerTagline="Nylas is so much more than merely a space to learn. 
            It's a place where people with diverse backgrounds, career paths, hopes, and dreams converge to share their experiences and build a better world."
            headerImage={NylasHeaderImage}
            titleColor="#00C8A7"
            dateColor="#E5F9F6"
            taglineColor="white"
          />
      </div> 
    </div>
  );
}