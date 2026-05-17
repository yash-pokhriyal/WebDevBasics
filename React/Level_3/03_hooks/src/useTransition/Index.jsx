// import React from 'react'
// import { useState } from 'react'

// const Index = () => {
//     const [text,settext] = useState("");
//     const [list,setlist] = useState([]);

//     const handleChange =(e)=>{
//        const value = e.target.value;
//        settext(value);
//     //    assume db
//        const newList =[];
//        for(let i=0;i<50000;i++){
//         newList.push(`${value}=>${i}`)
//        }
//        setlist(newList);
//     }
//   return (
//     <div>
//         <input type="text" value={text} placeholder='type here' onChange={handleChange} />
//         <ul>
//             {list.map((item,idx)=><li key ={idx}>
//                 {item}
//             </li>)}
//         </ul>
//     </div>
//   )
// }

// export default Index



// deal with input 

// ye purpose kya jab koi type kar rha uska user experience acha ho lamba text likhe to freeze na ho

//   ab jab tak wo 50 k baar print ni hora tab tak next text type ni hora input mai means flipkart pe kuch search kia wo jab tak poora search ni krlega mai aage type ni kr paunga


// ek ek type pe 50k baar chlra ye problem hai without useTransition

import React from 'react'
import { useState,useTransition } from 'react'

const Index = () => {
    const [text,settext] = useState("");
    const [list,setlist] = useState([]);
    const [isPending,startTransition] = useTransition();

    const handleChange =(e)=>{
       const value = e.target.value;
       settext(value);
       
       startTransition(()=>{
       const newList =[];
       for(let i=0;i<50000;i++){
        newList.push(`${value}=>${i}`)
       }
       setlist(newList);
      })
    }
  return (
    <div>
        <input type="text" value={text} placeholder='type here' onChange={handleChange} />
        {isPending && <p>Loading list</p>}
        <ul>
            {list.map((item,idx)=><li key ={idx}>
                {item}
            </li>)}
        </ul>
    </div>
  )
}

export default Index

// ab type krne me smooth hoga 
// ab data aane me jo time lgega 
// usme kuch dikha denge
// result aane me delay hai to loader ajaega par ab likhne me delay ni hoga

// typing freeze ni hona chahiye