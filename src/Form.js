import React from 'react'

function Form() {
  
    function getMeme(){

        console.log("We will get our Meme here");
    }
  
    return (
    <div>
        <h3>Form</h3>
        <button onClick={getMeme}>Get Meme</button>
    </div>
  )
}

export default Form