import React, { useState } from 'react'
import './Cardd.css';
import { Button } from 'react-bootstrap';


function Mycard() {
    const moi ={
        src: "https://scontent.ftun9-1.fna.fbcdn.net/v/t39.30808-1/398479796_312806784927446_6535033793703067369_n.jpg?stp=dst-jpg_p160x160&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=omRzZPz9fEoAX_C56UT&_nc_ht=scontent.ftun9-1.fna&oh=00_AfARnuUIRgmv21eXmcpo93zLEpbQuugGGIFWcokqmEYXIg&oe=655B1A40", 
        name:"iyed bensalem",
        age:21,
        From:"Metouia La capitale et aaamra city",}
        const [show, setshow] = useState(false)

  return (
    <div>
        {show? <div className='carta'>
        <img src={moi.src}/>
        <h3>{moi.name}</h3>
        <p>{moi.age}</p>
        <p>{moi.From}</p>
    </div>:null}
    <Button onClick={()=>setshow(!show)}>ShowCard</Button>
    </div>
  )
}

export default Mycard