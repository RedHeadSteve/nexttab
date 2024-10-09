import './footer.css';
import {NavLink} from "react-router-dom";
import insta from './../../assets/Instagram_Glyph_White.svg'

export default function Footer() {
    return (
        <footer className="footer">
            <form action="https://api.web3forms.com/submit" method="POST">
                <input type="hidden" name="access_key" value="9ee1ec05-ad43-48ef-8443-f67ea2051fee"/>
                <input type="hidden" name="subject" value="Deze persoon wil graag updates ontvangen (ik ga dit automatiseren, echt waar!)"/>
                <label>Blijf op de hoogte van al onze projecten </label>
                <input className="mail-field" type="email" name="email" id="email" placeholder='email@adress.com' required/>
                <input className="button" type="submit" value="Send"/>
            </form>
            <div>
                <ul className="footer-info">
                <li><a href="https://www.instagram.com/nexttab_nl">Volg ons:  <img className="logo-insta" src={insta} alt="Instagram"/></a></li>
                    <li><NavLink className="footer-item" to="/contact">contact</NavLink></li>
                    <li><a href="https://signup.com/go/BShQedP">Word vrijwilliger</a></li>
                </ul>
            </div>
        </footer>
    )
}