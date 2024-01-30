
import React,{useEffect} from "react";
import { useSelector, useDispatch } from "react-redux"; 
// import {postApiStarted, postDataSuccess, postDataFailure} from "../redux/actions/postActions";
import {postRequest} from "../redux/actions/postActions";
import axios from "axios";


const PostApp = () => {

    const {loading, data, error}  = useSelector(state => state)
    console.log(loading,data,error);
    // loading: false, data =[] , error = ""
    // loading: true, data =[] , error = ""
    // loading: false, data =[{},{}] , error = ""
    // loading: false, data =[] , error = "some error"

    const dispatch = useDispatch(); 

   //   useEffect(()=>{
   //      dispatch(postApiStarted());
   //      axios.get("https://gauravgitacc.github.io/postAppData/posts.json")
   //      .then(response => dispatch(postDataSuccess(response.data)))
   //      .catch(err => dispatch(postDataFailure(err.message)))
   //   },[])

   useEffect(()=>{
         dispatch(postRequest());
   },[])

     return(
        <h1>
             <h1> Post App</h1>
             {
                data.length>0 && (
                    data.map(post =>(
                        <div key={post.id}>
                             <h5>{post.title}</h5>
                             <p>{post.body}</p>
                             <hr/>
                        </div>
                    ))
                )
             }
        </h1>
     )

}

export default PostApp;