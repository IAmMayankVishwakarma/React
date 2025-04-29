function Hello(){
  let myName = "Mayank Vishwakarma";
  let myAge = 20;
  let fullName = () =>{
    return myName;
  }
  return <p>Hello this is {fullName()} /Age: {myAge}</p>
}

export default Hello;