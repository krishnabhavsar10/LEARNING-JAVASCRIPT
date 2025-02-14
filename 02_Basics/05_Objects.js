const course = {
    coursename: "Python Programming",
    price: 200,
    courseInstructor: "John Doe",
}

console.log(course.courseInstructor);
// console.log(courseInstructor); // Error

const {courseInstructor} = course // This is called destructuring 
console.log(courseInstructor);

const {courseInstructor: instructor} = course // This is called destructuring with alias
console.log(instructor);


