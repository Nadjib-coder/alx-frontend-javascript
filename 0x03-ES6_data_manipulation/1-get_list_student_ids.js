export default function getListStudentIds(students) {
  if (students !== Array) {
    return [];
  }
  students.map((student) => {
    if (student.id !== Number) {
      return [];
    } else {
      return student.id;
    }
  });
}
