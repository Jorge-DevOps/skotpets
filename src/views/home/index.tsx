import { Footer } from "../../common/components/footer"
import { Header } from "../../common/components/header"
import background from  "../../assets/img/home/fondoHome.svg"
import "./style.sass"

export const Home = () => {
    return (
        <div style={{ backgroundImage: `url(${background})` }} className="Container-home">
            <Header />
            <Footer />
        </div>
    )
}