/*
 * File: components/Navbar.tsx
 * Author: Gaurab Sapkota
 * Date: October 30, 2026
 * This component displays the navigation bar.
 * It contains links to page sections.
 * The links jump to anchors on the page.
 * It appears at the top of every page.
 * It provides quick navigation.
 */

const Navbar = () => {
  return (
    <nav className="bg-blue-900 text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <h1 className="font-bold">
          New Generation High School
        </h1>

        <div className="flex gap-4">
          <a href="#overview">Overview</a>
          <a href="#students">Students</a>
          <a href="#add-student">Add a Student</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;