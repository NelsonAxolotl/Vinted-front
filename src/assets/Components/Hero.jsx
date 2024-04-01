import banner2 from "../IMG/banner2.jpg"
import { Link } from "react-router-dom";
const Hero = () => {

    return (

        <section>
            <img src={banner2} alt="banner" />
            <div className="frame">
                <h1>Prêts à faire du tri dans vos placards?</h1>
                <Link to="/publish/"><span><button>Commencer à Vendre</button></span></Link>
            </div>
            <div className="empty-frame"></div>
        </section>

    )

};

export default Hero;