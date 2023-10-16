import { FaDownload } from "react-icons/fa"
import { AiFillHeart } from "react-icons/ai"
import { BiLogoFacebookSquare, BiLogoInstagramAlt, BiLogoWhatsappSquare } from "react-icons/bi"


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
     <div className="collapse collapse-plus bg-base-200">
         <input type="radio" name="my-accordion-3" /> 
        <div className="collapse-title text-xl font-medium">
                            Nostros
                             </div>
 <div className="collapse-content"> 
                                    <p>Latrue es una plataforma para artistas, que les ayuda a vender.</p>
                                      </div>
                                      </div>
                                      <div className="collapse collapse-plus bg-base-200">
                                        <input type="radio" name="my-accordion-3" /> 
                                          <div className="collapse-title text-xl font-medium">
                                              Misión
                                                </div>
                                                  <div className="collapse-content"> 
                                                      <p>hello</p>
                                                        </div>
                                                        </div>
                                                        <div className="collapse collapse-plus bg-base-200">
                                                          <input type="radio" name="my-accordion-3" /> 
                                                            <div className="collapse-title text-xl font-medium">
                          Tecnología  
                                                                  </div>
                                                                    <div className="collapse-content"> 
                                                                        <p>Nuestro proyecto </p>
                                                                          </div>                          </div>
                                                <div className="flex justify-center gap-8">
                    <BiLogoFacebookSquare size={20}/>
                    
                    <BiLogoInstagramAlt size={20}/>      
                    
                    <BiLogoWhatsappSquare size={20}/>

                
                                   </div>    

          <div className="flex justify-between text-content text-xs">

<div>
  © Al rights reserved
  </div>

  <div className="text-right">
    Dev by Dario Muñoz
    </div>

            </div>        

        </div>
        
        </div>
    )
}

export default Footer