import React, { useState } from 'react';
import './Footer.css';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  return (
    <footer>
      <small>&copy; Copyright {currentYear}, Albert Ornelas</small>
    </footer>
  );
}
