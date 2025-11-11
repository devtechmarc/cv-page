import { CardDaisy } from "../components/shared/CardDaisy";
import { certificatesImgRoute } from "../constants";

const certificates = [
    `${certificatesImgRoute}tanstack.png`
];
export const CertificationSection = () => {
    console.log(certificates);
    return (
        <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-8">
            {
                certificates.map((cert, idx) => <CardDaisy/>
                )
            }
        </section>
    )
}
