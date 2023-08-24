import React, { useRef, useState } from 'react';
import default_img from "../assest/default_image.svg"
const AiImageGenerator = () => {
    const [image_url,setImage_url]=useState("/")
    let inputRef=useRef(null)
    const handelGenrate=async ()=>{
        if(inputRef.current.value===""){
            return 0;
        }
        const response=await fetch("https://api.openai.com/v1/images/generations",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                Authorization:"Bearer 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"//this is my secret key form openai.com website
            },
            body:JSON.stringify({
                prompt:`${inputRef.current.value}`,
                n:1,
                size:"512x512"
            })
        });
        let data=await response.json()
        console.log(data);
        let finalData=data.data
        setImage_url(finalData[0].url)
    }
    return (
        <div className='container'>
            <div className='p-5 text-center'>
            <img src={image_url==="/"?default_img:image_url} className='img-fluid'/>
            <div className='p-4'>
                <input ref={inputRef} type='search' placeholder='Type Here' className='form-control'/>
                <button onClick={()=>{handelGenrate()}} className='btn btn-success p-2 mt-3'>Generate</button>
            </div>
            </div>
            
        </div>
    );
};

export default AiImageGenerator;