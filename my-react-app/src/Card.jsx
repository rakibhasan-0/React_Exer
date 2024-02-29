import profilePicture from './assets/bird.png';


function Card (){
  
  return (
    <div className = "card">
      <img src = {profilePicture} className='card--image'/>
      <h1>Bird Card</h1>
      <p>It is just a simple bird representation</p>
    </div> 
  )

}



export default Card;