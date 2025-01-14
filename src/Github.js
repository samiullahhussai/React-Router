import React, { useEffect } from 'react'
// import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    // const [data, setData] = useState([])
    // function FetchData() {
    //     fetch("https://api.github.com/users/samiullahhussai")
    //         .then(res => res.json())
    //         .then(data => {
    //             setData(data)
    //             console.log(data)
    //     })  
    
    // }
    // useEffect(() => {
    //     FetchData();
    // }, []);
    const data = useLoaderData()
  return (
      <>
          <div className='grid grid-cols-2 m-4 place-items-center'>
              <div>
                  <img className='h-[300px] rounded-2xl' src={data.avatar_url} />
              </div>
              <div>
                  <h1 className='text-2xl font-bold font-sans'>My Followers are :{data.followers}</h1>
              </div>
          </div>
      </>
    
  )
}

export default Github

export const GitHubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/samiullahhussai")
    return response.json()
}