function Random(){
  let randomNumber = Math.floor(Math.random() * 100);
return <h3 style={{'background-color':'#678859','color':'white'}}>this is random number: {randomNumber}</h3>
}
export default Random;