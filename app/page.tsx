/*
 * File: app/page.tsx
 * Author: Juan Garcia
 * Date: October 28, 2026
 * This file defines the homepage of the student portal.
 * It imports the StudentPortal component.
 * It renders the portal on the main page.
 * It does not receive any props.
 */

import StudentPortal from "@/components/StudentPortal";

export default function Home() {
  return <StudentPortal />;
}