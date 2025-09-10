import CourseList from './CourseList';
import './App.css';

interface CourseData {
  name: string;
  courseId: string;
  studentPositions: number;
}

interface AppProps {
  courses: CourseData[];
}

function App({ courses }: AppProps) {
  return (
    <div className="App">
      <CourseList courses={courses} />
    </div>
  );
}

export default App;