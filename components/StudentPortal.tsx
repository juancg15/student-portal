
"use client";

/*
 * File: components/StudentPortal.tsx
 * Author: Juan Garcia
 * Date: October 28, 2026
 * This component manages the student portal.
 * It stores students and search text in state.
 * It handles adding, removing, and clearing students.
 * It filters students based on their names.
 * It displays the overview, students, and add sections.
 */

import { useRef, useState } from "react";
import type { Student } from "@/data/students";
import { students as initialStudents } from "@/data/students";
import StudentList from "./StudentList";
import SearchBox from "./SearchBox";
import StatsPanel from "./StatsPanel";
import AddStudent from "./AddStudent";

const StudentPortal = () => {
  // Student and search state
  const [students, setStudents] = useState<Student[]>(initialStudents);
  const [searchText, setSearchText] = useState("");

  // Keep track of the next unique student ID
  const nextId = useRef(
    Math.max(0, ...initialStudents.map((student) => student.id)) + 1
  );

  // Remove a student by ID
  const handleRemove = (id: number) => {
    setStudents((current) =>
      current.filter((student) => student.id !== id)
    );
  };

  // Remove all students
  const handleClearAll = () => {
    setStudents([]);
  };

  // Add a student with a unique ID
  const handleAdd = (newStudent: Omit<Student, "id">) => {
    const student: Student = {
      ...newStudent,
      id: nextId.current++,
    };

    setStudents((current) => [...current, student]);
  };

  // Filter students by name (case-insensitive)
  const filteredStudents = students.filter((student) => {
    const fullName =
      `${student.firstName} ${student.lastName}`.toLowerCase();

    return fullName.includes(searchText.toLowerCase());
  });

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      {/* Overview section */}
      <section id="overview" className="mb-12">
        <h1 className="mb-6 text-3xl font-bold">
          New Generation High School
        </h1>

        <StatsPanel students={students} />
      </section>

      {/* Students section */}
      <section id="students" className="mb-12">
        <h2 className="mb-4 text-2xl font-bold">
          Students
        </h2>

        <SearchBox
          searchText={searchText}
          onSearchChange={setSearchText}
        />

        <StudentList
          students={filteredStudents}
          onRemove={handleRemove}
        />

        <button
          type="button"
          onClick={handleClearAll}
          className="mt-6 rounded bg-red-700 px-4 py-2 text-white hover:bg-red-800"
        >
          Clear all
        </button>
      </section>

      {/* Add student section */}
      <section id="add-student">
        <h2 className="mb-4 text-2xl font-bold">
          Add a Student
        </h2>

        <AddStudent onAdd={handleAdd} />
      </section>
    </main>
  );
};

export default StudentPortal;
