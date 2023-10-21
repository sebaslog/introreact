import styles from './navbar.module.css'
import "../../globals.css"

const Navbar = () => {

    return (
        <div className='navbar'>
            <nav>
                <ul className='navcontent'>
                    <li>
                        Home
                    </li>
                    <li>
                        Info
                    </li>
                    <li>
                        Blog
                    </li>
                    <li>
                        Contact
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;