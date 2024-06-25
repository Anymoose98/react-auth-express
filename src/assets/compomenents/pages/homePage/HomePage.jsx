import homePageStyles from "./HomePage.module.scss"
import img from "../../img/Bird Walking Sticker - Find & Share on GIPHY.gif"
import { Link } from "react-router-dom";


const HomePage = () =>{
    return(
        <main>
            <div className="container">
                <div className="row">
                    <div className="col-6 d-flex justify-content-center align-items-center">
                        <h1 className={homePageStyles.blu} >Benvenuto nel blog</h1>
                    </div>
                    <div className="col-6 d-flex justify-content-center align-items-center">
                        <figure>
                            <img src={img} alt="Papero che cammina" className={homePageStyles.gif} />
                        </figure>
                    </div>
                    <div className="col-12 d-flex justify-content-center align-items-center">
                        <button>
                            <h1><Link to={"http://localhost:5173/lista"}>Le nostre notizie</Link></h1>
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default HomePage;