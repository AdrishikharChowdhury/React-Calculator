import React from 'react'
import { useState } from 'react'
import Key from './Key';
import Numkey from './Numkey';
import Operators from './Operators';
import { useEffect } from 'react';

const Panel = () => {
    const [num] = useState(['9','8','7','6','5','4','3','2','1','.','0','=']);
    const [key] = useState(['AC','DEL','%','+/-']);
    const [operators] = useState(['+','x','÷','-']);
    const [screen, setScreen] = useState('');


    const display = (value) => {
         if (value === '=') {
            if (!screen) return;
            try {
                const formattedExp = screen.replace(/x/g, '*').replace(/÷/g, '/');
                const evalResult = eval(formattedExp);
                setScreen(evalResult.toString());
                } catch (error) {
                setScreen("Error");
            }
        }
        else if(value === 'AC'){
            setScreen('');
        }
        else if(value === 'DEL'){
            setScreen((s) => s.slice(0,-1));
        }
        else if(value === '+/-'){
            if(Number(screen)<0)
            {
                setScreen(Math.abs(screen));
            }
            else{
                setScreen(0-Number(screen));
            }
        }
        else if (value === '%') {
            if(Number.isNaN(Number(screen))){
                setScreen('Math Error');
                return
            }
            try {
                setScreen((Number(screen)/100).toString());
                } catch {
                setScreen('Error');
                }
            }
        else {
            
            setScreen((s) => s + value);
        }
    }

    return (
        <div className='bg-gray-900 rounded-2xl p-5 shadow-2xl'>
            <div
            className="w-full bg-black sm:h-40 h-30 rounded-2xl border-4 border-white text-white sm:text-4xl text-3xl flex justify-end items-center pr-4 overflow-x-auto whitespace-nowrap"
            id='lcd'
            >
            {screen}
            </div>
            <div className="keys border-4 h-full border-white mt-5 rounded-2xl">
                <div className="flex sm:p-6 p-3 justify-evenly items-center keyplaceholder">
                    {key.map((element,idx)=>(
                        <Key key={idx} number={element} onClick={()=>display(element)}/>
                    ))}
                </div>
                <div className="otherkeys flex justify-between items-center sm:px-6 px-2 w-full">
                    <div className="numplaceholder gap-4 grid grid-cols-3 sm:p-5 p-3">
                        {num.map((element,idx)=>(
                        <Numkey key={idx} number={element} onClick={()=>display(element)}/>
                    ))}
                    </div>
                    <div className="numplaceholder gap-4 grid grid-cols-1 sm:p-5 p-3">
                        {operators.map((element,idx)=>(
                        <Operators key={idx} number={element} onClick={()=>display(element)}/>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Panel