
import React ,{useState} from 'react';
import {AiOutlineClose,AiOutlinePlus} from 'react-icons';
import data from "./data";

const Accordion=()=>{
    const [items,setItems] =useState(data);

    return(
        <div>
            <h2>Accordion Componenent</h2>
        </div>
    )
}

export default Accordion;