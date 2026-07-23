export default function Main (){

    const results = useState(0);
    debugger
return (

    <main>
        <button onClick={handleClick}>Click counter</button>
        <p>{count}</p>
        <p>Explain stateful variables and what happens when the button is clicked</p></main>
)

}

function handleClick(){
    event.preventDefault();
    debugger 
    setCount=(count+1);
}


// 11,12