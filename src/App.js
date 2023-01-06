import './App.css';
import Images from './Images';
import React,{useState} from 'react';

function App() {
  const[selectedImg, setSelectedImg] =useState(Images[4]);


  return (
    <div className="App">
      <div className='container'>
        <img src={selectedImg} alt='Selected' className='selected'/>
        <div className='imgContainer'>
          {Images.map((img,index)=>(
            <img style={{border:selectedImg===img?"4px solid rgb(128, 0, 126)":""}}key={index} src ={img} alt="scenery" onClick={()=>setSelectedImg(img)}/>
          )
            
            )}
        </div>
      </div>
    
    </div>
  );
}

export default App;
