import { Outlet } from 'react-router-dom';

const Courses = () => {
  return (
    <div>
     <div>
      <h2>Courses</h2>
      <Outlet />
    </div>
    </div>
  )
}

export default Courses
