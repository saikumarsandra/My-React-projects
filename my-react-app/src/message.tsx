import "./App.css"

function Message(){ // start the function name with  pascal cased( capital letter )
   const name = "saikumar"
    //jsx 
    return (<div className="text"> <h1>this is {name} react practice</h1>
             <button className= "btn btn-success" >Follow Me</button>
             </div>
    )

}
export default Message;