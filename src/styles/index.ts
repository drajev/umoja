/**
 * Barrel export for CSS modules.
 * Import styles from '@/styles' for cleaner imports.
 *
 * @example
 * import { layoutStyles, headerStyles, authStyles } from '@/styles';
 *
 * <div className={layoutStyles.layout}>...</div>
 */

export { default as authStyles } from "./modules/auth.module.css";
export { default as headerStyles } from "./modules/header.module.css";
export { default as homeStyles } from "./modules/home.module.css";
export { default as layoutStyles } from "./modules/layout.module.css";
