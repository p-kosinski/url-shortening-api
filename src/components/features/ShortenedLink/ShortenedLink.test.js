import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import ShortenedLink from './ShortenedLink';

describe('ShortenedLink component', () => {
  it('renders \'Copy\' button and visible links from originalLink and shortenedLink props', () => {
    const mockOriginalLink = 'https://testing-library.com/docs/react-testing-library/example-intro';
    const mockShortenedLink = 'https://shrtco.de/3E4Qna';
    
    render(
      <ShortenedLink
        originalLink={mockOriginalLink}
        shortenedLink={mockShortenedLink}
      />
    );

    const copyButton = screen.getByRole('button');
    const originalLinkElement = screen.getByTestId('original-link');
    const shortenedLinkElement = screen.getByTestId('shortened-link');
  
    expect(copyButton).toHaveAccessibleName('Copy shortened link');
    expect(copyButton).toHaveTextContent('Copy');
    expect(copyButton).toBeVisible();
    expect(copyButton).toBeEnabled();
    expect(originalLinkElement).toHaveTextContent(mockOriginalLink);
    expect(originalLinkElement).toBeVisible();
    expect(shortenedLinkElement).toHaveTextContent(mockShortenedLink);
    expect(shortenedLinkElement).toBeVisible();
  });

  it('copies shortened link after clicking \'Copy\' button', async () => {
    const mockOriginalLink = 'https://testing-library.com/docs/react-testing-library/example-intro';
    const mockShortenedLink = 'https://shrtco.de/3E4Qna';
    
    render(
      <ShortenedLink
        originalLink={mockOriginalLink}
        shortenedLink={mockShortenedLink}
      />
    );

    const copyButton = screen.getByRole('button');
    
    fireEvent.click(copyButton);

    await waitFor(() => {
      expect(copyButton).toHaveTextContent('Copied!');
    });

    expect(navigator.clipboard.writeText).toBeCalledTimes(1);
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(mockShortenedLink)
    expect(navigator.clipboard.readText()).toBe(mockShortenedLink);
  });

  it('temporary renders \'Copied!\' button text when link has been copied', async () => {
    const mockOriginalLink = 'https://testing-library.com/docs/react-testing-library/example-intro';
    const mockShortenedLink = 'https://shrtco.de/3E4Qna';
    
    render(
      <ShortenedLink
        originalLink={mockOriginalLink}
        shortenedLink={mockShortenedLink}
      />
    );

    const copyButton = screen.getByRole('button');
    
    fireEvent.click(copyButton);

    await waitFor(() => {
      expect(copyButton).toHaveTextContent('Copied!');
    });
  });
});