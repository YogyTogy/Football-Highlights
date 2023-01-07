import React, {useState, useEffect} from 'react'
import '../App.css';
import axios from 'axios';

const Content = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
      axios({
        method:"GET",
        url: `https://www.scorebat.com/video-api/v3/feed/?token=NDc0NTlfMTY3MzAyMDQ0Nl9lMjgyMWU2OWY4MmU5ZGZiMzQzYTk5YTRiYmIyNDYzZTVkZjExNjEy`
      })
      .then(res=>{
        setData(res.data.response)
      }).catch(e=>console.log(e))
    }, [])
    


    return (
    <div className='content-container'>
        {data.map((item)=>(
            <div className='itemDiv' key={item.title} onClick={()=>window.open(item.matchviewUrl)}>
                <div className='itemHeading'><h4>{item.title}</h4></div>
                <div className='itemImage'>
                    <img src={item.thumbnail} alt={item.title} />
                </div>
            </div>
        ))}
    </div>
  )
}

export default Content