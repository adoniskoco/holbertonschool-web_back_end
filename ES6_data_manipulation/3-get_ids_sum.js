export default function getStudentIdsSum(students) {
  return students.reduce(function (acc, student) {
	console.log("acc", acc);
	console.log("student.id", student.id);
 	return acc + student.id
}, 0);
}
