function Product(props){
    function myfunction()
    {
        // alert()
        // props.price=9000
    }
    console.log(props)
    return(
        <div>
            <h2>
            ₹{props.price}
            </h2>
            <p><h3>{props.name}</h3></p>
            <p><button onClick={myfunction} style={{'background':'green'}}>Add to cart</button></p>
        </div>
    );
}
export default Product;