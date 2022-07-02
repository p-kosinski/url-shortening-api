import { render, screen } from '@testing-library/react';

import Hero from './Hero';

describe('Hero component', () => {
  it('renders level 1 heading with \'More than just shorter links\' text', () => {
    render(<Hero />);

    const h1 = screen.getByRole('heading', { level: 1 });

    expect(h1).toBeInTheDocument();
    expect(h1).toBeVisible();
    expect(h1).toHaveTextContent('More than just shorter links');
  });

  it('renders paragraph with expected text', () => {
    render(<Hero />);

    const paragraph = screen.getByTestId('hero-paragraph');
    const expectedTextContent = 'Build your brand’s recognition and get detailed insights on how your links are performing.';

    expect(paragraph).toBeInTheDocument();
    expect(paragraph).toBeVisible();
    expect(paragraph).toHaveTextContent(expectedTextContent);
  });

  it('renders \'Get Started\' link', () => {
    render(<Hero />);

    const link = screen.getByRole('link');

    expect(link).toBeInTheDocument();
    expect(link).toBeVisible();
    expect(link).toHaveAttribute('href');
    expect(link).toHaveTextContent('Get Started');
  });

  it('renders hero image with alt description', () => {
    render(<Hero />);

    const image = screen.getByRole('img');

    expect(image).toBeInTheDocument();
    expect(image).toBeVisible();
    expect(image).toHaveAttribute('alt', 'person working on a computer');
  });
});