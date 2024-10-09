import './home.css'
import Button from "../../components/button/Button.jsx";

export default function Home() {
    return (
        <>
            <section className="banner-section">
                <div className="banner-content">
                    <div>
                        <h1 className="blue">Breaking taboos, one project at a time</h1>
                        <h3 className="">Bij NextTab doorbreken we maatschappelijke taboes door het op creëren van toegankelijke,
                            publieke ruimtes voor kwetsbare thema’s.
                        </h3>
                        <Button
                            txt="Waar vind u ons?"
                        />
                    </div>
                </div>
            </section>
            <section className="content">
                <div className="missie">
                    <h3 className="orange">
                        Missie & Visie
                    </h3>
                    <p>
                        NextTab creëert laagdrempelige projecten in de publieke ruimte om onderwerpen die vaak vermeden worden, bespreekbaar te maken. Van rouw tot armoede, onze projecten nodigen uit tot reflectie, verbinding en hoop. Om zo dichter bij jezelf en de ander te komen.
                    </p>
                </div>
                <div className="upcoming">
                    <h3 className="orange">Rouwen en Vieren Den Haag</h3>
                    <p>Rouwen is liefhebben. Samen maken we ruimte voor rouw, hoop en troost op het plein van de Grote Kerk in Den Haag.</p>
                </div>
            </section>
        </>
    )
}