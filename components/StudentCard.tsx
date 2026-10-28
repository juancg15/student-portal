
"use client";

/*
 * File: components/StudentCard.tsx
 * Author: Juan Garcia
 * Date: October 26, 2026
 * This component displays one student.
 * It receives student information through props.
 * It uses state to show or hide details.
 * It displays an honour roll badge when applicable.
 * The remove button calls the parent's callback.
 */

import { useState } from "react";
import type { Student } from "@/data/students";

interface StudentCardProps {
  student: Student;
  onRemove: (id: number) => void;
}

const StudentCard = ({ student, onRemove }: StudentCardProps) => {
  // Track whether this student's details are visible
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="rounded-lg border bg-white p-5 shadow-sm">
      <h3 className="text-xl font-bold text-gray-900">
        {student.firstName} {student.lastName}
      </h3>

      <p className="mt-2 text-gray-600">
        Grade: {student.grade}
      </p>

      {/* Expandable student details */}
      {showDetails && (
        <div className="mt-3 text-gray-800">
          <p>Average: {student.average}%</p>

          {student.average >= 80 && (
            <span className="mt-2 inline-block rounded bg-green-100 px-2 py-1 text-sm text-green-800">
              Honour Roll
            </span>
          )}
        </div>
      )}

      {/* Student actions */}
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setShowDetails(!showDetails)}
          className="rounded bg-blue-600 px-3 py-2 text-white hover:bg-blue-700"
        >
          {showDetails ? "Hide details" : "Show details"}
        </button>

        <button
          type="button"
          onClick={() => onRemove(student.id)}
          className="rounded bg-red-600 px-3 py-2 text-white hover:bg-red-700"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default StudentCard;
