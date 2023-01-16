import "./style.scss"

export const Menu = () => {
    return (
        <nav className="menu">
            <ol>
                <li className="menu-item"><a href="#0">Home</a></li>
                <li className="menu-item"><a href="#0">Nosotros</a></li>
                <li className="menu-item">
                    <a href="#0">Productos</a>
                    <ol className="sub-menu">
                        <li className="menu-item"><a href="#0">Arnes</a></li>
                        <li className="menu-item"><a href="#0">Collar</a></li>
                        <li className="menu-item"><a href="#0">Arnes</a></li>
                    </ol>
                </li>
                
                <li className="menu-item"><a href="#0">Contacto</a></li>
            </ol>
        </nav>
        
        )
}