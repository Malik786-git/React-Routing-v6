import { Link, useParams } from "react-router-dom"


const Course = () => {
  
    let { id } = useParams();


  return (
    <div>
      <h2>
      CourseName:  {id}
      </h2> 
       <br />
      <Link to='/courses'>See all courses</Link>
    </div>
  )
}

export default Course
