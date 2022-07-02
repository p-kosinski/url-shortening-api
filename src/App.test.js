import { render, screen, within } from '@testing-library/react';

import App from './App';

describe('App component', () => {
  it('renders header', () => {
    render(<App />);

    const allBannerRoles = screen.getAllByRole('banner');
    const header = allBannerRoles[0];

    expect(header).toBeInTheDocument();
    expect(header).toBeVisible();
  });

  it('renders footer', () => {
    render(<App />);

    const footer = screen.getByRole('contentinfo');

    expect(footer).toBeInTheDocument();
    expect(footer).toBeVisible();
  });

  describe('renders main tag with:', () => {
    it('hero section', () => {
      render(<App />);

      const main = screen.getByRole('main');
      const heroSection = within(main).getByTestId('hero-section');

      expect(heroSection).toBeInTheDocument();
      expect(heroSection).toBeVisible();
    });

    it('main section', () => {
      render(<App />);

      const main = screen.getByRole('main');
      const mainSection = within(main).getByTestId('main-section');

      expect(mainSection).toBeInTheDocument();
      expect(mainSection).toBeVisible();
    });

    it('boost section', () => {
      render(<App />);

      const main = screen.getByRole('main');
      const boostSection = within(main).getByTestId('boost-section');

      expect(boostSection).toBeInTheDocument();
      expect(boostSection).toBeVisible();
    });
  });
});