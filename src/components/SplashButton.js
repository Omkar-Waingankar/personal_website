import "../css/SplashButton.css"
import "../fonts.css"

export default function SplashButton(props) {
    return (
        <a className="splash-button" href={props.link} style={{
            backgroundColor: `${props.backgroundColor}`,
            borderColor: `${props.borderColor}`,
        }}>
            <p className="splash-button-text" style={{
                color: `${props.textColor}`,
            }}>{props.text}</p>
        </a>
    )
}