export default function updateStudentGradeByCity(students, city, newGrades) {
  if (students instanceof Array) {
    return students
      .filter((student) => student.location === city)
      .map((student) => {
        const grade = newGrades.filter(
          (grade) => grade.studentId === student.id,
        );
        if (grade.length !== 0) {
          return { ...student, grade: grade[0].grade };
        }
        return student;
      });
  }
  return [];
}
