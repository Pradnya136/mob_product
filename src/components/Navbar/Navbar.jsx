import styles from "./Navbar.module.css"

// eslint-disable-next-line react/prop-types
const Navbar = ({onShowFav, onShowAll}) =>{



    return(
        <>
            <ul className={styles.ulist}>
                <li onClick={onShowAll}>Home</li>
                <li>About</li>
                <li onClick={onShowFav}>Favourites</li>
                <li>Contact</li>
            </ul>
        </>
    )
}

export default Navbar;