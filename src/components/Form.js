import React from 'react';



function Form()  {

    function handleSubmit(event) {
        event.preventDefault()
        console.log(event.target)
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text"/>
            <button type="submit">Log me!!!</button>
            </form>
     );
}
 
export default Form;