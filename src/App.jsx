import { useState } from 'react'

const url ='https://course-api.com/react-tabs-project'
function App() {
    const [loading,setLoading]=useState(true)
    const [jobs,setJobs] = useState([])
    const [value,setValue]=useState(0)

    const fetchJobs = async () =>{
        const response = await fetch(url)
        const newJobs = await response.json()
        setJobs(newJobs)
        setLoading(false)
    }
  return (
   <section className="section">
       <div className="title">
           <h2>experience</h2>
           <div className="underline"></div>
       </div>
       <div className="jobs-center">
           <div className="btn-container">
               <button></button>
           </div>

           <article className="job-info">
               <h3></h3>
               <h4></h4>
               <p></p>
               <div>
                   FaA
               </div>
           </article>
       </div>
       <button type="button" className="btn">
           more info
       </button>

   </section>
  )
}

export default App
