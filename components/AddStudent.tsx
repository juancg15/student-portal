"use client";

/*
 * File: components/AddStudent.tsx
 * Author: Gaurab Sapkota
 * Date: October 30, 2026
 * This component allows users to add students.
 * It stores input values in state.
 * It validates names before adding a student.
 * It sends the new student data to StudentPortal.
 * It resets all inputs after a successful add.
 */

import { useState } from "react";
import type { Student } from "@/data/students";

interface AddStudentProps {
  onAdd: (student: Omit<Student, "id">) => void;
}

const AddStudent = ({ onAdd }: AddStudentProps) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [grade, setGrade] = useState(9);
  const [average, setAverage] = useState(70);

  const handleAddStudent = () => {
    if (!firstName.trim() || !lastName.trim()) {
      return;
    }

    onAdd({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      grade,
      average,
    });

    setFirstName("");
    setLastName("");
    setGrade(9);
    setAverage(70);
  };

  return (
    <div className="rounded-lg border bg-white p-6 shadow-sm">
      <div className="grid gap-4 md:grid-cols-2">
        <input
          type="text"
          placeholder="First name"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          className="rounded border p-3"
        />

        <input
          type="text"
          placeholder="Last name"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
          className="rounded border p-3"
        />

        <input
          type="number"
          value={grade}
          min={9}
          max={12}
          onChange={(event) =>
            setGrade(Number(event.target.value))
          }
          className="rounded border p-3"
        />

        <input
          type="number"
          value={average}
          min={0}
          max={100}
          onChange={(event) =>
            setAverage(Number(event.target.value))
          }
          className="rounded border p-3"
        />
      </div>

      <button
        type="button"
        onClick={handleAddStudent}
        className="mt-4 rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700"
      >
        Add Student
      </button>
    </div>
  );
};

export default AddStudent;