import Course from './Course';

interface CourseData {
  name: string;
  courseId: string;
  studentPositions: number;
}

interface CourseListProps {
  courses: CourseData[];
}

function CourseList({ courses }: CourseListProps) {
  return (
    <div>
      {courses.map((course, index) => (
        <Course
          key={index}
          name={course.name}
          courseId={course.courseId}
          studentPositions={course.studentPositions}
        />
      ))}
    </div>
  );
}

export default CourseList;