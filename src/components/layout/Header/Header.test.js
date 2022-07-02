import { render, screen, within, fireEvent } from '@testing-library/react';

import Header from './Header';

describe('Header component', () => {
  it('renders header with navigation', () => {
    render(<Header />);

    const header = screen.getByRole('banner');
    const navigation = within(header).getByRole('navigation');

    expect(header).toBeInTheDocument();
    expect(header).toBeVisible();
    expect(navigation).toBeInTheDocument();
    expect(navigation).toBeVisible();
  });
  
  it('renders home page link', () => {
    render(<Header />);

    const header = screen.getByRole('banner');
    const navigation = within(header).getByRole('navigation');
    const allLinks = within(navigation).getAllByRole('link');
    const homePageLink = allLinks[0];

    expect(homePageLink).toBeInTheDocument();
    expect(homePageLink).toBeVisible();
    expect(homePageLink).toHaveAccessibleName('home page');
  });

  it('renders navigation menu button', () => {
    render(<Header />);

    const header = screen.getByRole('banner');
    const navigation = within(header).getByRole('navigation');
    const menuButton = within(navigation).getByRole('button');

    expect(menuButton).toBeInTheDocument();
    expect(menuButton).toBeVisible();
    expect(menuButton).toBeEnabled();
    expect(menuButton).toHaveAccessibleName('open navigation menu');
  });

  it('renders navigation menu', () => {
    render(<Header />);

    const header = screen.getByRole('banner');
    const navMenu = within(header).getByTestId('nav-menu');

    expect(navMenu).toBeInTheDocument();
    expect(navMenu).toBeVisible();
  });

  it('renders first list with \'Features\', \'Pricing\' and \'Resources\' links', () => {
    render(<Header />);

    const header = screen.getByRole('banner');
    const navigation = within(header).getByRole('navigation');
    const allLists = within(navigation).getAllByRole('list');
    const firstList = allLists[0];
    const firstListItems = within(allLists[0]).getAllByRole('listitem');

    const expectedLinkTexts = ['Features', 'Pricing', 'Resources'];

    expect(firstList).toBeInTheDocument();
    expect(firstList).toBeVisible();
    
    firstListItems.forEach((item, i) => {
      const link = within(item).getByRole('link');
      
      expect(item).toBeInTheDocument();
      expect(item).toBeVisible();
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href');
      expect(link).toHaveTextContent(expectedLinkTexts[i]);
    });
  });

  it('renders second list with \'Login\' and \'Sign Up\' links', () => {
    render(<Header />);

    const header = screen.getByRole('banner');
    const navigation = within(header).getByRole('navigation');
    const allLists = within(navigation).getAllByRole('list');
    const secondList = allLists[1];
    const secondListItems = within(allLists[1]).getAllByRole('listitem');

    const expectedLinkTexts = ['Login', 'Sign Up'];

    expect(secondList).toBeInTheDocument();
    expect(secondList).toBeVisible();
    
    secondListItems.forEach((item, i) => {
      const link = within(item).getByRole('link');
      
      expect(item).toBeInTheDocument();
      expect(item).toBeVisible();
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href');
      expect(link).toHaveTextContent(expectedLinkTexts[i]);
    });
  });

  it('renders navigation menu with \'opened\' class and active state menu button after clicking that button', () => {
    render(<Header />);

    const header = screen.getByRole('banner');
    const navigation = within(header).getByRole('navigation');
    const menuButton = within(navigation).getByRole('button');
    const navMenu = within(header).getByTestId('nav-menu');

    expect(menuButton).toHaveAccessibleName('open navigation menu');

    fireEvent.click(menuButton);

    expect(navMenu).toHaveClass('opened');
    expect(menuButton).toHaveClass('active');
    expect(menuButton).toHaveAccessibleName('close navigation menu');
  });
});