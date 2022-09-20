// Code Keypad Component Here

const enterPassword = () => {
    console.log('Entering password...')
    
}

function Keypad (){
    return (
        <input type="password" onChange={enterPassword} />
    )
}

export default Keypad;