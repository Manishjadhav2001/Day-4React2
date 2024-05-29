import "./style.css";
import ReactDOM from "react-dom";
import App from "./components/App";
// react routing start
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Form from "./components/Form";
import Two from "./components/Two";
import Three from "./components/Three";
import Image from "./components/Image";
import Error from "./components/Error";
import Main from "./components/Main";
  
  var projectroute = createBrowserRouter(
    [
        {
            path:"",
            element:<App></App>,
            children:[
                {
                    path:"",
                    element:<Home></Home>,
                },
                {
                    path:"aboutus",
                    element:<About></About>,
                },
                {
                    path:"cart",
                    element:<Cart></Cart>
                },
                {
                    path:"login",
                    element:<Login></Login>
                },
                {
                    path:"form",
                    element:<Form></Form>
                },
                {
                    path:"two",
                    element:<Two></Two>
                },
                {
                    path:"three",
                    element:<Three x1="100"></Three>
                },
                {
                    path:"error",
                    element:<Error></Error>
                },
                {
                    path:"main",
                    element:<Main></Main>
                },
                
            ]
        },
        
    ]
  )
// react rounting end
// // console.log(ReactDOM)
 const ans=ReactDOM.createRoot(document.getElementById("root"))
// console.log(ans);
// ans.render("Hello word!")
// var username="manish"
// ans.render(<h1>Xyz {username}</h1>);


// var product=(
// <>
//     <div className="col-3"><h2>Price 2000</h2>
//     <button>Add to cart</button>
//     </div>
//      <div className="col-3"><h2>Price 2000</h2>
//      <button>Add to cart</button>
//      </div>
// </>
// )
// ans.render(product);

ans.render(<RouterProvider router={projectroute}>

</RouterProvider>
);
