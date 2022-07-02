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

  it('temporary renders success button variant when link has been copied', async () => {
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

    expect(copyButton).toHaveClass('success');
  });

  it('renders error button variant and throws error when clipboard API isn\'t available', async () => {
    global.navigator.clipboard = undefined;
    global.console = {
      error: jest.fn(),
    };
    
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
      expect(copyButton).toHaveClass('error');
    });

    expect(console.error).toBeCalledTimes(1);
  });
});