import PersonCard from "../../components/personCard/PersonCard.jsx";
import "./over-ons.css"

export default function OverOns() {
    return (
        <>
            <section className="banner-section">
                <div className="banner-content">
                    <div>
                        <h2>Over ons</h2>
                    </div>
                </div>
            </section>
            <section className="content">
                <h3 className="orange">Iets over het team</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad at blanditiis cumque delectus dolor
                    excepturi magni maiores minima minus natus officia possimus, quae ratione? Doloribus eligendi fugit
                    id odit sapiente!</p>
                <div className="cards">
                    <PersonCard
                        name="Willemijn Veerman"
                        role="Oprichter en penningmeester"
                        quote=" “If there ever comes a time when the women (or people) of the world come together purely and simply for the benefit of mankind, it will be a force such as the world has never known.”  Matthew Arnold"
                    />
                    <PersonCard
                        name="Kesia Watson"
                        role="Voorzitter"
                        quote="‘’Het kan anders’’- Kesia Watson"
                        txt="We kunnen leren van het verleden om tot heldere inzichten te komen."
                    />
                    <PersonCard
                        name="Liesbeth Van Dingenen"
                        role="Secretaris"
                        quote="“And as we let our own light shine, we unconsciously give other people permission to do the same.” Marianne Williamson"
                        txt="Mentaal welzijn en emotionele intelligentie zijn voor mij belangrijke onderwerpen in het dagelijkse leven. Het leren omgaan met mijn eigen emoties geeft me nieuwe inzichten en daarnaast ook ruimte om te genieten van alles om me heen. Met een creatieve opleiding in muziekonderwijs en werkervaring als receptioniste ben ik met veel plezier deel van het NextTab bestuur. Wat mij energie geeft is het helpen organiseren van projecten en evenementen als plek van nieuwe ontmoeting, van nieuwe grond voor veranderende wegen."
                    />
                </div>
            </section>

        </>

    )
}