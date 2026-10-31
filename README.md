# Student Portal – New Generation High School

## CPRG 306 – Assignment 1

### Project Description
A Student Portal built using Next.js, React, TypeScript, and Tailwind CSS. The website allows users to view, search, add, and remove students while displaying school statistics.

### Group Members and Responsibilities

**Juan Carlo Garcia**
- Created the Next.js project and GitHub repository.
- Developed StudentPortal, StudentList, StudentCard, and SearchBox.
- Created the student data and TypeScript interface.
- Tested the website features.

**Gaurab Sapkota**
- Developed Navbar, Footer, StatsPanel, and AddStudent.
- Worked on website layout and styling.
- Handled Vercel deployment.
- Tested the website features.

### Features
- View, search, add, and remove students.
- Show/hide student details.
- Display student statistics and honour roll.
- Clear all students.
- Responsive design for mobile and desktop.

### Running the Project

```bash
npm install
npm run dev
```

Open http://localhost:3000.

### Testing Results

| Test | Result |
|---|---|
| 1. Displays 8 students and correct statistics | PASS |
| 2. Show/hide details works independently | PASS |
| 3. Removing Grade 12 student updates counts | PASS |
| 4. Uppercase search works | PASS |
| 5. Searching "zzz" shows no results without changing statistics | PASS |
| 6. Blank student names are rejected | PASS |
| 7. Adding a student updates counts and resets form | PASS |
| 8. Clear All resets students and statistics | PASS |
| 9. Mobile layout works without horizontal scrolling | PASS |
| 10. Navbar links navigate correctly | PASS |

### Project Links

**GitHub:** https://github.com/juancg15/student-portal

**Vercel:** https://student-portal-t4zc.vercel.app/
