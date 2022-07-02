import { render, screen } from '@testing-library/react';

import BoostSection from './BoostSection';

describe('BoostSection component', () => {
  it('renders level 2 heading with \'Boost your links today\' text', () => {
    render(<BoostSection />);

    const h2 = screen.getByRole('heading', { level: 2 });

    expect(h2).toBeInTheDocument();
    expect(h2).toBeVisible();
    expect(h2).toHaveTextContent('Boost your links today');
  });

  it('renders link with \'Get Started\' text', () => {
    render(<BoostSection />);

    const link = screen.getByRole('link');

    expect(link).toBeInTheDocument();
    expect(link).toBeVisible();
    expect(link).toHaveAttribute('href');
    expect(link).toHaveTextContent('Get Started');
  });
});