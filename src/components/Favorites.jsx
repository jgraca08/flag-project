import React, {useContext} from "react";
import { GlobalContext } from "../context/GlobalState";


const Favorites = (props) => {

  const {watchlist} = useContext (GlobalContext);

  const {removeTurboFromWatchlist} = useContext(GlobalContext)

  return(
    <>
      <div className="container mt-4 mb-4">
        <div className="row">
        <h3 className="d-flex justify-content-center mb-5">
          Favorites
          </h3>
          

{watchlist.length > 0 ? (
  <>
  {watchlist.map((turbo) =>(
            <div className="col-4 mb-5" key={turbo.id}>
                  <div className="card h-100 shadow rounded-0">
                    <div className="inner">
                      <img
                        src={turbo.image}
                        className="card-img-top"
                        alt="turbocharger"
                      ></img>
                    </div>
                    <div className="card-body bg-light">
                      <h5 className="card-title">{turbo.title}</h5>
                      
                      <a href={"/products/" + turbo.categoryId + "/original/" + turbo.id }
                      className="btn btn-sm btn-outline-danger rounded-0">
                      More
                    </a>
                      <button 
                      className="btn btn-sm btn-outline-danger rounded-0 ms-2"
                       onClick={() => removeTurboFromWatchlist(turbo.id)} 
                      type="submit">
                        <i class="fa-solid fa-trash-can"></i>
                      </button>
                    </div>
                  </div>
                </div>

          )
          )}
  </>
) : (
  <>
  <h3 className="d-flex justify-content-center">OPS!</h3>
  <p className="d-flex justify-content-center mb-5">No products in your favorites!</p>
  </>
)}
</div>




          
           
          </div>

    </>
  );
};

export default Favorites;
