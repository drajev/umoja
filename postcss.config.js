/**
 * PostCSS configuration for Tailwind CSS and Autoprefixer.
 * Processes Tailwind directives and adds vendor prefixes.
 */
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [tailwindcss, autoprefixer],
};
