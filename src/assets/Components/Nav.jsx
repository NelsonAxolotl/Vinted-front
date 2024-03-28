const Nav = () => {

    return (
        <>
            <div className="spany">
                <span>Trier par prix:</span>
                <button></button>
                <span className="price-btw">Prix entre:</span>
                <button></button>
            </div>
            <nav className="container">
                <ul>
                    <li>Femmes</li>
                    <li>Hommes</li>
                    <li>Enfants</li>
                    <li>Maison</li>
                    <li>Divertissement</li>
                    <li>Animaux</li>
                    <li>A propos</li>
                    <li>Notre plateforme</li>
                </ul>
                <div className="btn-language">

                    <select name="language" id="">
                        <option value="French">FR</option>
                        <option value="English">EN</option>
                        <option value="Spanish">SP</option>
                        <option value="Dutch">DE</option>
                    </select>
                </div>
            </nav>

        </>
    )


}
export default Nav;