/*eslint-disable*/
export default function getStudentsByLocation(students, city) {
	return students.filter((student, index) => student.location === city);
}
