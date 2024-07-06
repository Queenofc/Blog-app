import React, { useState,useRef } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from "axios";
import { useLocation, useNavigate } from 'react-router';
import moment from 'moment';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

export const Write = () => {

  const state = useLocation().state
  const [title, setTitle] = useState(state?.title || "");
  const [value, setValue] = useState(state?.desc || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || "");

  
  const navigate = useNavigate()
  const quillRef = useRef(null);

const upload = async ()=>{
  try{
    const formData = new FormData();
    formData.append("file",file)
    const res = await axios.post("http://localhost:8800/api/uploads" ,formData)
    return res.data
  }catch(err){
    console.log(err)
  }
} 

//function to save the post as a .txt file

const handleSave = (e) => {
  e.preventDefault();

  // Combine title, description, and category into a single string with clear headers
  const postContent = `Title: ${title}\n\nDescription:\n${value}\n\nCategory: ${cat}`;

  // Create a downloadable .txt file
  const element = document.createElement('a');
  const file = new Blob([postContent], { type: 'text/plain' });
  element.href = URL.createObjectURL(file);
  element.download = 'draft.txt';
  document.body.appendChild(element); // Required for this to work in FireFox
  element.click();

  // Clean up
  document.body.removeChild(element);
};

 
const handleClick = async e =>{
  e.preventDefault()
  const imgUrl = await upload();
  try{
    state
        ? await axios.put(`http://localhost:8800/api/posts/${state.id}`, {
            title,
            desc: value,
            cat,
            img: file ? imgUrl : "",
          },{withCredentials:true})
        : await axios.post('http://localhost:8800/api/posts/', {
            title,
            desc: value,
            cat,
            img: file ? imgUrl : "",
            date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
          },{withCredentials:true})
          navigate("/")
  }catch(err){
    console.log(err)
  }
}

  return (
    <div className="add">
      <div className="content">
        <input type="text" value={title} placeholder='Title' onChange={(e)=>setTitle(e.target.value)}/>
        <div className="editorContainer">
          <ReactQuill className="editor" theme="snow" value={value} onChange={setValue} ref={quillRef}/>
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input style={{ display: "none" }} type="file" id="file" name="" onChange={(e)=>setFile(e.target.files[0])}/>
          <label className="file" htmlFor="file">Upload Image</label>
          <div className="buttons">
            <button onClick={handleSave}>Save as a draft</button>
            <button onClick={handleClick}>Publish</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input type="radio" checked={cat === "art"} name="cat" value="art" id="art" onChange={(e)=>setCat(e.target.value)}/>
            <label htmlFor="art">Art</label>
          </div>
          <div className="cat">
            <input type="radio" checked={cat === "science"} name="cat" value="science" id="science" onChange={(e)=>setCat(e.target.value)}/>
            <label htmlFor="science">Science</label>
          </div>
          <div className="cat">
            <input type="radio" checked={cat === "technology"} name="cat" value="technology" id="technology" onChange={(e)=>setCat(e.target.value)}/>
            <label htmlFor="technology">Technology</label>
          </div>
          <div className="cat">
            <input type="radio" checked={cat === "cinema"} name="cat" value="cinema" id="cinema" onChange={(e)=>setCat(e.target.value)}/>
            <label htmlFor="cinema">Cinema</label>
          </div>
          <div className="cat">
            <input type="radio" checked={cat === "design"} name="cat" value="design" id="design" onChange={(e)=>setCat(e.target.value)}/>
            <label htmlFor="design">Design</label>
          </div>
          <div className="cat">
            <input type="radio" checked={cat === "food"} name="cat" value="food" id="food" onChange={(e)=>setCat(e.target.value)}/>
            <label htmlFor="food">Food</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Write