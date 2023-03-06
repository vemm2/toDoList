import React, {useState, KeyboardEvent} from "react";
import * as C from './styles'
import { Props } from "./types";

export const AddArea = ({handleAddTask}: Props)=>{
    const [inputText, setInputText] = useState('');
    const handleKeyUp = (e: KeyboardEvent)=>{
        if(e.code === 'Enter' && inputText !== ''){
            handleAddTask(inputText);
            setInputText('')
        }
    }

    return (
        <C.Container>
            <div className="image">➕</div>
            <input 
                type="text"
                placeholder= 'Adicione uma tarefa'
                value={inputText}
                onChange={(e)=>setInputText(e.target.value)}
                onKeyUp={handleKeyUp}
            />
        </C.Container>
    )
}