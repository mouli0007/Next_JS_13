import React from "react";
import Link from "next/link";

async function fetchCourses() {
  try {
    const response = await fetch("http://localhost:3000/api/courses", {
      cache: "force-cache",
    });
    const courses = await response.json();

    return courses;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch courses");
  }
}

const Courses = async () => {
  const courses = await fetchCourses();

  return (
    <div className="courses">
      {courses.map((course) => {
        return (
          <div key={course.id} className="card">
            <h2>{course.title}</h2>
            <small>Level : {course.level}</small>
            <p>{course.description}</p>
            <Link href={course.link} target="_blank" className="btn">
              Go to Course !
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Courses;
