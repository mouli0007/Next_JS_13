import { NextResponse } from "next/server";

import courses from "../data.json";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");
  const filteredCourses = courses.filter((course) => {
    return course.title.toLowerCase().includes(query.toLowerCase());
  });
  return NextResponse.json(filteredCourses);
}

export async function POST(request) {
  // Getting the data what we have sent throught he body !
  const { title, description, level, link } = await request.json();

  const newCourse = {
    id: Date.now(),
    title,
    description,
    level,
    link,
  };

  courses.push(newCourse);
  return NextResponse.json(courses);
}
