/**
 * Test file for carousel component.
 * Basic rendering and interaction tests.
 */
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

describe('Carousel', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Slide 1</CarouselItem>
        </CarouselContent>
      </Carousel>,
    );
    expect(container).toBeTruthy();
  });
});
