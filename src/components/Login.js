import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default function Login() {
    var [apidata,setapidata]=useState([]);
    useEffect(function(){
        console.log("call Api")
        console.log(axios);
        var ans=axios.get('https://fakestoreapi.com/products');
        console.log(ans)
        ans.then(function (response){
                //  console.log(response)
                 console.log(response.data);
                setapidata(response.data);
        })
    },[])
  return (

    <div className='container'>
        <h1>Api Data</h1>
        <div className="row">{
            apidata && apidata.length>0 && apidata.map(value =>
                <div className="col-3" text-center>
                    <img src={value.image}className="img-fluid" alt=""/>
                    <h2>{value.price}</h2>
                    <p>{value.title}</p>
                </div>
            )
           
        }</div>
    </div>
  )
}
