import React, { useState } from "react";
import Card from "./Card";

function Cards({ courses,category }) {
  const [likedcourses, setLikedCourses] = useState([]);
  
  function getCourses() {
    if(category==="All"){
        let newCourseArr = [];
        Object.values(courses).forEach((array) => {
          array.forEach((cd) => {
            newCourseArr.push(cd);
          });
        });
        return newCourseArr;
      }
      else{
        return courses[category];
      }
    }



  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {getCourses().map((course) => (
        <Card key={course.id} course={course} likedcourses={likedcourses} setLikedCourses={setLikedCourses}/>
      ))}
    </div>
  );
}

export default Cards;
