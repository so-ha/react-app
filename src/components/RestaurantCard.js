

const RestaurantCard = (props) => {
    const {name, cuisines, avgRating, costForTwo} = props.resData;
    console.log(props)
    return(<div className='res-card'>
        <h3>{name}</h3>
        <img src={"https://mir-s3-cdn-cf.behance.net/projects/404/aa7d7196392551.Y3JvcCw4NTIsNjY2LDAsOTk.png"} alt="res-img"/>
        <h4>{cuisines.join(", ")}</h4>
        <h5>{avgRating}</h5>
        <h5>{costForTwo}</h5>
    </div>)
}
//Higher Order Component
//input -> Restaurant Card ==> Restaurant Card with Promoted Label

export const withPromotedLabel = (RestaurantCard) => {
    return (props) =>{
        return(<div>
            <h1>Promoted</h1>
            <RestaurantCard {...props}/>
        </div>)
    }
}
export default RestaurantCard