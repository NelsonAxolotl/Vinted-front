import banner2 from "../IMG/banner2.jpg"
const Hero = () => {

    return (
        <section>

            <img src={banner2} alt="photo-banner" />
            <div className="frame">
                <h1>Prêts à faire du tri dans vos placards?</h1>
                <span><button>Commencer à Vendre</button></span>
            </div>
            <div className="empty-frame"></div>
        </section>

    )

};

export default Hero;