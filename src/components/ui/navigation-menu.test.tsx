/**
 * Test file for navigation-menu component.
 * Basic rendering and interaction tests.
 */
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger } from './navigation-menu';

describe('NavigationMenu', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Item</NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
    expect(container).toBeTruthy();
  });
});
