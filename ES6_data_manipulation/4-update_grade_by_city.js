export default function updateStudentGradeByCity(students, city, newGrades) {
  const updatedStudents = students.map((student) => {
	const studentGrades = newGrades.find((grade) => grade.studentId === student.id);
	if (studentGrades) {
	  return { ...student, grade: studentGrades.grade };
	}
	return student;
  });
  return updatedStudents.filter((student) => student.location === city);
}
