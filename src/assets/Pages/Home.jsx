import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Hero from "../Components/Hero"
import Offers from "../Components/Offers";

const Home = ({ }) => {
    return (
        <div>
            <Header />
            <Hero />
            <Offers />
            {/* <Link to="/offer/:id">Cliquez ici pour aller vers la page details</Link> */}
        </div>
    );
};

export default Home;
