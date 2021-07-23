import '../css/ContentHeader.css';

export default function ContentHeader(props) {
  return (
    <div className="header">
        <div className="header-text">
            <p className="header-title" style={{color: props.titleColor}}>{props.headerTitle}</p>
            <p className="header-date" style={{color: props.dateColor}}>{props.headerDate}</p>
        </div>
        <p className="header-tagline" style={{color: props.taglineColor}}>{props.headerTagline}</p>
        <img src={props.headerImage} alt="header-img" className="header-image"/>
    </div>
          
  );
}