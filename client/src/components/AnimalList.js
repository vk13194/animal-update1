import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Animal from './Animal'
import SimpleReactLightbox from 'simple-react-lightbox'

const AnimalList = () => {
    const [animals, setAnimals]= useState([])
    useEffect(()=>{
        const fetchData = async () =>{
          const res= await axios.get('http://localhost:5000/api/posts')
   //console.log(res.data)
   setAnimals(res.data)
        }
        fetchData()
    },[])
    console.log(animals)
    return (
        <div>
           {animals.map((item)=>
        <SimpleReactLightbox>

           <Animal  animal={item} key={item._id} />
           </SimpleReactLightbox>
           )} 
        </div>
    )
}

export default AnimalList
