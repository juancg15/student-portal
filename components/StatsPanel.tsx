/*
 * File: components/StatsPanel.tsx
 * Author: Gaurab Sapkota
 * Date: October 30, 2026
 * This component displays summary statistics.
 * It receives the student list through props.
 * It calculates derived values from the list.
 * It shows totals for students, honour roll students,
 * and grade 12 students.
 */

import type { Student } from "@/data/students";

interface StatsPanelProps {
  students: Student[];
}

const StatsPanel = ({ students }: StatsPanelProps) => {
  const totalStudents = students.length;

  const honourRollStudents = students.filter(
    (student) => student.average >= 80
  ).length;

  const gradeTwelveStudents = students.filter(
    (student) => student.grade === 12
  ).length;

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <div className="rounded-lg border bg-white p-4 text-center shadow-sm">
        <h3 className="text-lg font-bold">Students</h3>
        <p className="text-3xl font-bold text-blue-600">
          {totalStudents}
        </p>
      </div>

      <div className="rounded-lg border bg-white p-4 text-center shadow-sm">
        <h3 className="text-lg font-bold">Honour Roll</h3>
        <p className="text-3xl font-bold text-green-600">
          {honourRollStudents}
        </p>
      </div>

      <div className="rounded-lg border bg-white p-4 text-center shadow-sm">
        <h3 className="text-lg font-bold">Grade 12</h3>
        <p className="text-3xl font-bold text-purple-600">
          {gradeTwelveStudents}
        </p>
      </div>
    </div>
  );
};

export default StatsPanel;