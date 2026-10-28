
"use client";

/*
 * File: components/SearchBox.tsx
 * Author: Juan Garcia
 * Date: October 26, 2026
 * This component displays a student search input.
 * It receives the current search text through props.
 * It updates the input as the user types.
 * It sends changes to the parent through a callback.
 * The parent filters the student list using the text.
 */

interface SearchBoxProps {
  searchText: string;
  onSearchChange: (text: string) => void;
}

const SearchBox = ({
  searchText,
  onSearchChange,
}: SearchBoxProps) => {
  return (
    <div className="mb-6">
      <label
        htmlFor="student-search"
        className="mb-2 block font-medium text-gray-900"
      >
        Search students
      </label>

      {/* Controlled search input */}
      <input
        id="student-search"
        type="text"
        value={searchText}
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder="Search by name..."
        className="w-full rounded-lg border border-gray-300 bg-white p-3 text-gray-900"
      />
    </div>
  );
};

export default SearchBox;
