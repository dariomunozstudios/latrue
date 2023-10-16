import { FaDownload } from "react-icons/fa"
import { AiFillHeart } from "react-icons/ai"


const Footer = () => {
    return(
        <div className="card-body shadow-xl">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                
                <div className="text-2xl font-bold">
                    Democratizando el arte con tecnología 🎆
                </div>
                <div className="grid grid-cols-2 gap-4">

                    
                    <div className="btn btn-secundary">
                      <FaDownload/>  Descargar
                    </div>

                    <div className="btn btn-secundary">
                       <AiFillHeart/> Premium
                    </div>

                </div>
        </div>
        
        </div>
    )
}

export default Footer