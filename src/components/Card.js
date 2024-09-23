
 
import {image_url} from "../utils/constants.js"

const Card = (props) => {
  const {name,cloudinaryImageId,areaName,costofTwo,cuisines,avgRating}=props.item.info
  // console.log(props)
   
  return (
    <div className="h-[450px] w-[220px] rounded-2xl m-4 p-4 shadow-xl bg-gray-200 hover:bg-orange-200 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
      <img alt="food" className=" h-[180px] w-[200px] rounded-2xl " src={image_url+cloudinaryImageId} />
      <div className="flex m-2 p-2">
      <b> <h3 className="text-red-600 m-3">{name}</h3>
        <p className="m-2">{avgRating} ⭐Rating </p>
        <p>{areaName}</p>
        <p>{costofTwo}</p>
        <p>{cuisines[0]}</p>
        </b>

      </div>
    </div>

     
  )
}

export default Card