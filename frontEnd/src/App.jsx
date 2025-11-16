import axios from 'axios'
import { useEffect, useState } from 'react'


function App() {
  const [data, setData] = useState([])
  
  useEffect(() => {
      const fetchData = async () => {
        try {
          const request = await axios.get('http://localhost:5000')
          const response = await request.data.blogPosts
          setData(response)
        } catch (error) {
          console.error('Error fetching data:', error)
        }
    }
      fetchData()
   },[])
  return (
    <div className="min-h-screen w-full bg-gray-100 flex items-center justify-center flex-col gap-10">
      <h1 className='text-5xl font-bold text-grey-800'>
        Backend with Node.js and Express
</h1>
        <ul className='rounded-2xl shadow-lg p-5 bg-white space-y-3'>
        {data.map((post, index) => (
  <li key={index}   className="bg-sky-100 p-4 rounded-2xl transition-transform duration-300 transform hover:scale-105">
    <h2 className='text-xl font-semibold text-gray-700'>{post.title}</h2>
    <p className='text-sm text-gray-600'>{post.content}</p>
  </li>
))}  
  </ul>

    </div>
  )
}

export default App
