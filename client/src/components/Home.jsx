import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import image from '../cool-background.png'

const Home = () => {

  const [datas, setData] = useState([])
  const getData = async () => {
    // const { data } = await axios('https://randomuser.me/api/?results=50');

    // const res = await axios.post('http://localhost:2500/create', { data: data.results });

    const alldata = await axios('http://localhost:2500/get',);

    setData(alldata.data.data);

  }

  return (
    <div className='main' style={{ 'display': 'flex',  "display":" flex",
    /* margin: 15rem auto; */
    "justifyContent": "center",
    "alignItems": "center",
    "flexDirection":"column",
    'padding':'6rem 0 1rem  1rem'
  }}>
     <div>
        Home
        <button style={{'border':'0','fontWeight':'bolder','cursor':'pointer','borderRadius':'5px','MozAnimation':"backwards","background-color":"green",'margin':'10px 15px','padding':'10px 15px'}} onClick={() => { getData(); }}> fetch data </button>
      </div>
      <div style={{ "maxHeight": "500px", "overflow": 'scroll' ,'height':'500px','width':'200px'}}>
        {datas.length == 0 ? 'No data' :
          datas.map(ele => <li> {ele._id} {console.log(ele)} </li>)
        }
      </div>

    </div>
  )
}

export default Home