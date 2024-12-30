export default function getStudentIdsSum(student) {
  if (student instanceof Array) {
    return student.reduce((sum, student) => sum + student.id, 0);
  }
}
