import placeholder from "../../assets/blank-profile-picture.png";
import "./personCard.css"
export default function PersonCard(props) {
    return(
        <div className="card">
                <img className="person-img" src={placeholder} alt="Placeholder profiel foto"/>
            <article>
                <h3 className="person-name orange">{props.name}</h3>
                <p className="person-role">Functie: {props.role}</p>
                <h4 className="person-quote blue">Favoriete quote: {props.quote}</h4>
                <p>{props.txt}</p>
            </article>
        </div>
    )
}