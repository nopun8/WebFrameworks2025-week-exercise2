interface CourseProps {
  name: string;
  courseId: string;
  studentPositions: number;
}

function Course({ name, courseId, studentPositions }: CourseProps) {
  return (
    <div className="course">
      <h2>{name}</h2>
      <p>{courseId}</p>
      <p>Student Positions: {studentPositions}</p>
    </div>
  );
}

export default Course;