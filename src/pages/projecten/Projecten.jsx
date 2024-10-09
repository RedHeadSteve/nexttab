import "./projecten.css";

export default function Projecten() {
    return (
        <>
            <section className="banner-section">
                <div className="banner-content">
                    <div>
                        <h2 className="blue bold">Rouwen en Vieren</h2>
                        <h3 className="">Rouwen is liefhebben. Samen maken we ruimte voor rouw, hoop en troost op het
                            plein van de Grote Kerk in Den Haag.</h3>
                        <h3 className="blue">14 December - 29 December</h3>
                    </div>
                </div>
            </section>
            <section className="content">
                <div>
                    <p><span className="orange">Wij maken plaats voor rouw;</span> midden in de stad. De feestdagen zijn
                        helaas voor veel mensen niet alleen maar vieren, en daar mag ruimte voor zijn.</p>

                    <p>Vanaf zaterdag 14 december staat daarom de mooi ingerichte kas van het landelijk project <span className="bold italics">Rouwen &
                        Vieren</span> op het plein van de Grote Kerk, midden in het centrum van Den Haag. Iedereen die langs
                        wil komen is er welkom om een kaarsje te branden, een lint ter herdenking op te hangen of een
                        stukje in het gastenboek te schrijven.</p>

                    <p>Ook zullen we door de weken heen verschillende kunstenaars uitnodigen voor andere vormen van
                        expressie, zoals mooie liedjes, iemand die live een schilderij maakt in de kas en een dichter
                        die persoonlijke gedichtjes schrijft voor bezoekers.</p>

                    <p className="blue">Open van 14 t/m 29 december.</p>

                </div>
                <div className="content">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2452.112164495264!2d4.3076039999999995!3d52.077687999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTLCsDA0JzM5LjciTiA0wrAxOCcyNy40IkU!5e0!3m2!1snl!2snl!4v1728302806379!5m2!1snl!2snl"
                        width="800"
                        height="600"
                        style={{border: 0}}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">

                    </iframe>
                </div>
                <div>
                    <p>
                        Voor vragen over dit project kunt u contact opnemen via <a className="underline"
                        href="mailto:rouwenvieren@nexttab.nl ">rouwenvieren@nexttab.nl </a>
                    </p>
                    <p>
                        Ben je enthousiast en wil je graag iets bijdragen?
                        <a className="underline" href="https://signup.com/go/BShQedP"> Aanmelden als vrijwilliger</a>
                    </p>
                </div>
            </section>
        </>
    )
}