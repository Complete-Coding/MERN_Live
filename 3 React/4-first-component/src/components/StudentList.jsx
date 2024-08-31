const StudentList = () => {

  const students = ['Ridoy', 'Nafees', 'Alok', 'Surya', 'Niraj', 'Ashish', 'Gurpreet', 'Yousuf']

  return <ol>
    {
      students.map((student, index) => <li key={student}>{student}</li>)
    }
  </ol>;
}

export default StudentList;