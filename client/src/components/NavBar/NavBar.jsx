import { Button } from "react-bootstrap";

const NavBar = () => {
    return (
        <>
            <nav className="navbar bg-body-tertiary">
                <form className="container-fluid justify-content-space-arround">
                    <h2 className="">JobPortalX</h2>
                    <div>
                        <Button className="btn btn-outline-success me-2" type="button">Iniciar sesión</Button>
                        <Button className="btn btn-outline-success me-2" type="button">Registrarme</Button>
                    </div>
                </form>
            </nav>
        </>
    )
}

export default NavBar;