
/*
 * File: components/StudentList.tsx
 * Author: Juan Garcia
 * Date: October 26, 2026
 * This component receives an array of students.
 * It displays a StudentCard for each student.
 * It uses map to create the student cards.
 * It passes the remove callback to each card.
 * It shows a message when the list is empty.
 */

import type { Student } from "@/data/students";
import StudentCard from "./StudentCard";

interface StudentListProps {
  students: Student[];
  onRemove: (id: number) => void;
}

const StudentList = ({ students, onRemove }: StudentListProps) => {
  // Display a message when no students match
  if (students.length === 0) {
    return (
      <p className="py-8 text-center text-gray-600">
        No students to display.
      </p>
    );
  }

  // Display students in a responsive grid
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {students.map((student) => (
        <StudentCard
          key={student.id}
          student={student}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};

export default StudentList;
