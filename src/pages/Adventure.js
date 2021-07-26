import '../css/Adventure.css';
import ContentHeader from "../components/ContentHeader";
import AdventureHeaderImage from "../img/adventure_header.jpg";

export default function Adventure() {
  return (
    <div className="adventure">
      <div className="adventure-container">
          <ContentHeader
            headerTitle="Adventure"
            headerDate={null}
            headerTagline="Be free."
            headerImage={AdventureHeaderImage}
            titleColor="#006642"
            dateColor="#E3FAF2"
            taglineColor="black"
          />
      </div> 
    </div>
  );
}