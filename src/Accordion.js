
import React ,{useState} from 'react';
import {AiOutlineClose,AiOutlinePlus} from 'react-icons/ai';


const Accordion=({title,info,random})=>{
    const [showinfo,setShowInfo]=useState(false);
    
    return(
      
                <div className="item" >
                   
                    <div className="single-item" style={{backgroundColor:`hsl(${random} , 100%, 97%)`, borderLeftColor:`hsl(${random} , 100%, 80%)`}}>
                        
                        <button className='btn' onClick={()=>setShowInfo(!showinfo)}>
                             {showinfo ? <AiOutlineClose size="2em"/> : <AiOutlinePlus size="2em"/>}
                        </button>
                        <div className="text-box">
                          <h4 className="title-text">{title}</h4>
                          {showinfo && <p className="info-text">{info}</p> }
                        </div>

                    </div>

                </div>
  
    )
}

export default Accordion;