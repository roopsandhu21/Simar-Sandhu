function Student(props){
    return(
        <div className="backred"> 
            <h1>Hello student  {props.name}</h1>
            <h1>{props.city}</h1>
            <h1>{props.addr.hno}</h1>
            <h1>{props.addr.area}</h1>
        </div>
    )
}

export default Student