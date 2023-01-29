import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Course from "../components/Course";
import Courses from "../components/Courses";
import CoursesOptions from "../components/CoursesOptions";
import NoMatch from "../components/NoMatch";


let routes = [
   {
    path: '/',
    element: <Navbar/>,
    children: [
        { index: true, element : <Home/> },
        {
            path: "/courses",
            element: <Courses/>,
            children: [
                { index: true, element: <CoursesOptions/>},
                { path: "/courses/:id", element: <Course/>}
            ],
        },
        { path: "*", element: <NoMatch/>}
    ]
   }
];


export default routes;