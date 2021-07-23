import '../css/Amazon.css';
import ContentHeader from "../components/ContentHeader";
import AmazonHeaderImage from "../img/amazon_header.jpg";

export default function Amazon() {
  return (
    <div className="amazon">
      <div className="amazon-container">
          <ContentHeader
            headerTitle="Amazon"
            headerDate="June 2019 - Aug. 2019"
            headerTagline="Amazon is so much more than merely a space to learn. 
            It's a place where people with diverse backgrounds, career paths, hopes, and dreams converge to share their experiences and build a better world."
            headerImage={AmazonHeaderImage}
            titleColor="#232f3e"
            dateColor="#3B7EA1"
            taglineColor="black"
          />
      </div> 
    </div>
  );
}