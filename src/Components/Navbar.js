import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
    return (
        <Nav>
            <NavMenu>
                <NavLink to="/" activeStyle>
                    Home
                </NavLink>
                <NavLink to="/works" activeStyle>
                    My Works
                </NavLink>
                <NavLink to="/about" activeStyle>
                    About Me
                </NavLink>
            </NavMenu>
        </Nav>
    );
};

export default Navbar;