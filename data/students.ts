
/*
 * File: data/students.ts
 * Author: Juan Garcia
 * Date: October 26, 2026
 * This file defines the Student interface.
 * It provides the structure for student information.
 * Each student has an ID, name, grade, and average.
 * It exports sample students for the portal.
 * Other components import this data when needed.
 */

// Student interface
export interface Student {
  id: number;
  firstName: string;
  lastName: string;
  grade: number;
  average: number;
}

// Initial student data
export const students: Student[] = [
  { id: 1, firstName: "Zara", lastName: "Ahmed", grade: 12, average: 92 },
  { id: 2, firstName: "Liam", lastName: "Smith", grade: 11, average: 75 },
  { id: 3, firstName: "Emma", lastName: "Wilson", grade: 10, average: 85 },
  { id: 4, firstName: "Noah", lastName: "Brown", grade: 9, average: 68 },
  { id: 5, firstName: "Olivia", lastName: "Davis", grade: 12, average: 88 },
  { id: 6, firstName: "Ethan", lastName: "Lee", grade: 11, average: 79 },
  { id: 7, firstName: "Sophia", lastName: "Martin", grade: 10, average: 94 },
  { id: 8, firstName: "Lucas", lastName: "Taylor", grade: 9, average: 72 },
];
