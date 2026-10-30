/*
 * File: components/Footer.tsx
 * Author: Gaurab Sapkota
 * Date: October 30, 2026
 * This component displays footer information.
 * It appears on every page.
 * It shows school contact information.
 * It provides address, phone and email details.
 * It remains consistent across the application.
 */

const Footer = () => {
  return (
    <footer className="mt-12 bg-gray-900 py-6 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="font-bold">
          New Generation High School
        </h2>

        <p>123 1 Avenue, Calgary, AB</p>
        <p>(403) 555-1234</p>
        <p>info@newgen.ca</p>
      </div>
    </footer>
  );
};

export default Footer;