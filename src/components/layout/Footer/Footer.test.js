import { render, screen, within } from '@testing-library/react';

import Footer from './Footer';

describe('Footer component', () => {
  describe('renders footer with:', () => {
    it('home page link (first in order)', () => {
      render(<Footer />);

      const footer = screen.getByRole('contentinfo');
      const allLinks = within(footer).getAllByRole('link');
      const firstLink = allLinks[0];
  
      expect(footer).toBeInTheDocument();
      expect(footer).toBeVisible();
      expect(firstLink).toBeInTheDocument();
      expect(firstLink).toBeVisible();
      expect(firstLink).toHaveAccessibleName('home page');
    });
  
    it('renders first \'Features\' list  with \'Link Shortening\', \'Branded Links\' and \'Analytics\' links', () => {
      render(<Footer />);
  
      const footer = screen.getByRole('contentinfo');
      const allLists = within(footer).getAllByRole('list');
      const allListTitles = within(footer).getAllByTestId('footer-link-list-title');
      const firstList = allLists[0];
      const firstListTitle = allListTitles[0];
      const firstListItems = within(firstList).getAllByRole('listitem');
  
      const expectedListTitle = 'Features';
      const expectedLinkTexts = ['Link Shortening', 'Branded Links', 'Analytics'];
  
      expect(firstList).toBeInTheDocument();
      expect(firstList).toBeVisible();
  
      expect(firstListTitle).toBeInTheDocument();
      expect(firstListTitle).toBeVisible();
      expect(firstListTitle).toHaveTextContent(expectedListTitle);
  
      firstListItems.forEach((item, i) => {
        const link = within(item).getByRole('link');
  
        expect(item).toBeInTheDocument();
        expect(item).toBeVisible();
        expect(link).toBeInTheDocument();
        expect(link).toBeVisible();
        expect(link).toHaveAttribute('href');
        expect(link).toHaveTextContent(expectedLinkTexts[i]);
      });
    });
  
    it('renders second \'Resources\' list  with \'Blog\', \'Developers\' and \'Support\' links', () => {
      render(<Footer />);
  
      const footer = screen.getByRole('contentinfo');
      const allLists = within(footer).getAllByRole('list');
      const allListTitles = within(footer).getAllByTestId('footer-link-list-title');
      const secondList = allLists[1];
      const secondListTitle = allListTitles[1];
      const secondListItems = within(secondList).getAllByRole('listitem');
  
      const expectedListTitle = 'Resources';
      const expectedLinkTexts = ['Blog', 'Developers', 'Support'];
  
      expect(secondList).toBeInTheDocument();
      expect(secondList).toBeVisible();
  
      expect(secondListTitle).toBeInTheDocument();
      expect(secondListTitle).toBeVisible();
      expect(secondListTitle).toHaveTextContent(expectedListTitle);
  
      secondListItems.forEach((item, i) => {
        const link = within(item).getByRole('link');
  
        expect(item).toBeInTheDocument();
        expect(item).toBeVisible();
        expect(link).toBeInTheDocument();
        expect(link).toBeVisible();
        expect(link).toHaveAttribute('href');
        expect(link).toHaveTextContent(expectedLinkTexts[i]);
      });
    });
  
    it('renders third \'Company\' list  with \'About\', \'Our Team\', \'Careers\' and \'Contact\' links', () => {
      render(<Footer />);
  
      const footer = screen.getByRole('contentinfo');
      const allLists = within(footer).getAllByRole('list');
      const allListTitles = within(footer).getAllByTestId('footer-link-list-title');
      const thirdList = allLists[2];
      const thirdListTitle = allListTitles[2];
      const thirdListItems = within(thirdList).getAllByRole('listitem');
  
      const expectedListTitle = 'Company';
      const expectedLinkTexts = ['About', 'Our Team', 'Careers', 'Contact'];
  
      expect(thirdList).toBeInTheDocument();
      expect(thirdList).toBeVisible();
  
      expect(thirdListTitle).toBeInTheDocument();
      expect(thirdListTitle).toBeVisible();
      expect(thirdListTitle).toHaveTextContent(expectedListTitle);
  
      thirdListItems.forEach((item, i) => {
        const link = within(item).getByRole('link');
  
        expect(item).toBeInTheDocument();
        expect(item).toBeVisible();
        expect(link).toBeInTheDocument();
        expect(link).toBeVisible();
        expect(link).toHaveAttribute('href');
        expect(link).toHaveTextContent(expectedLinkTexts[i]);
      });
    });
  
    it('renders facebook, twitter, pinterest and instagram external icon links', () => {
      render(<Footer />);
  
      const footer = screen.getByRole('contentinfo');
      const iconLinksWrapper = within(footer).getByTestId('icon-links');
      const iconLinks = within(iconLinksWrapper).getAllByRole('link');
  
      const expectedLabelPrefixes = ['facebook', 'twitter', 'pinterest', 'instagram'];
  
      iconLinks.forEach((link, i) => {
        const expectedLabel = `${expectedLabelPrefixes[i]} (opens in a new tab)`;
  
        expect(link).toBeInTheDocument();
        expect(link).toBeVisible();
        expect(link).toHaveAttribute('href');
        expect(link).toHaveAttribute('target', '_blank');
        expect(link).toHaveAttribute('rel', 'noreferrer');
        expect(link).toHaveAccessibleName(expectedLabel);
      });
    });
  
    it('renders attribution with links to coding challenge and author\'s github', () => {
      render(<Footer />);
  
      const footer = screen.getByRole('contentinfo');
      const attribution = within(footer).getByTestId('attribution');
      const attributionLinks = within(attribution).getAllByRole('link');
  
      const challengeLinkText = 'Frontend Mentor';
      const authorNickname = 'p-kosinski';
      const attributionText = `Challenge by ${challengeLinkText}. Coded by ${authorNickname}.`;
  
      expect(attribution).toBeInTheDocument();
      expect(attribution).toBeVisible();
      expect(attribution).toHaveTextContent(attributionText);
  
      expect(attributionLinks[0]).toHaveTextContent(challengeLinkText);
      expect(attributionLinks[1]).toHaveTextContent(authorNickname);
  
      attributionLinks.forEach(link => {
        expect(link).toBeInTheDocument();
        expect(link).toBeVisible();
        expect(link).toHaveAttribute('href');
        expect(link).toHaveAttribute('target', '_blank');
        expect(link).toHaveAttribute('rel', 'noreferrer');
      })
    });
  });
});