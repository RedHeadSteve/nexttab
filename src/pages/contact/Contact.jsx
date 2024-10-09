import insta from "./../../assets/Instagram_Glyph_White.svg"
import './contact.css'

export default function Contact() {
    return (
        <>
            <section className="banner-section">
                <div className="banner-content">
                    <div>
                        <h2 className="">Contact</h2>
                    </div>
                </div>
            </section>
            <section className="content">
                <div className="contact-info">
                    <ul>
                        <li>email:</li>
                        <li>socials:</li>
                    </ul>
                    <ul>
                        <li><a className="underline" href="mailto:info@nexttab.nl">info@nexttab.nl</a></li>
                        <li><a className="underline" href="https://www.instagram.com/nexttab_nl">Instagram</a></li>
                    </ul>
                </div>

            </section>
        </>


    )
}