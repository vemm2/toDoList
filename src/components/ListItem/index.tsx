import React, {useState} from "react";
import * as C from './styles'
import { Props } from "./types";


export const ListItem = ({item, handleChangeListStatus}:Props)=>{
    const [isChecked, setIsChecked] = useState(item.done);
    return (
        <C.Container done={isChecked}>
            <input 
                type="checkbox" 
                checked={isChecked}
                onChange={(e)=> {handleChangeListStatus(e.target.checked, item.id); setIsChecked(e.target.checked)}}/>
            <label>{item.name} - {item.done.toString()}</label>
        </C.Container>
    )
}