import { useState } from "react";

export default function Blog(){
    const [title,setTitle] = useState("");
    const [content,setContent] = useState("");
    const [blogs, setBlogs] =  useState([]);

    function handleSubmit(e){
        e.preventDefault();

        setBlogs([{title,content},...blogs]);
        // console.log(blogs);
    }
    return(
        <>
        <h1>Write a Blog!</h1>
        <div className="section">
            <form onSubmit={handleSubmit}>
                <Row label="Title">
                <input className="input" placeholder="Enter the Title" onChange = {(e) => setTitle(e.target.value)}/>
                </Row >
                <Row label="Content">
              <textarea className="input content" placeholder="Content of the Blog" onChange = {(e) => setContent(e.target.value)}/>
                </Row >
                <button className = "btn">ADD</button>
            </form>
        </div>
        <hr/>
        <h2> Blogs </h2>
        {
     blogs.map((result,i)=>(
    <div className="blog" key={i}>
    <h3>{result.title}</h3>
    <h3>{result.content}</h3>
</div>
            ))
        }
        </>
        )
    }
//Row component to introduce a new row section in the form
function Row(props){
    const{label} = props;
    return(
        <>
        <label>{label}<br/></label>
        {props.children}
        <hr />
        </>
    )
}
