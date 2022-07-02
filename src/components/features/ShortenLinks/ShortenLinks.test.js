import { render, screen, within, fireEvent, waitFor } from '@testing-library/react';

import ShortenLinks from './ShortenLinks';

describe('ShortenLinks component', () => {
  it('renders form (with input and button) and an empty list', () => {
    render(<ShortenLinks />);

    const form = screen.getByLabelText('shorten links');
    const emptyList = screen.getByRole('list');
    const input = within(form).getByRole('textbox');
    const submitButton = within(form).getByRole('button');

    expect(form).toBeInTheDocument();
    expect(form).toBeVisible();
    expect(emptyList).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(input).toBeVisible();
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toBeVisible();
  });

  it('displays error and invalid input after submitting empty form', () => {
    render(<ShortenLinks />);

    const form = screen.getByLabelText('shorten links');
    const submitButton = within(form).getByRole('button');
    const alert = within(form).getByRole('alert');
    const input = within(form).getByRole('textbox');

    fireEvent.click(submitButton);

    const errorMessage = within(alert).getByTestId('error-message');

    expect(input).toBeInvalid();
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toBeVisible();
    expect(errorMessage).toHaveTextContent('Please add a link');
  });

  it('displays shortened links in a list after entering and submitting valid links', async () => {
    render(<ShortenLinks />);

    const form = screen.getByLabelText('shorten links');
    const linksList = screen.getByRole('list');
    const input = within(form).getByRole('textbox');
    const submitButton = within(form).getByRole('button');

    const linksToShorten = [
      'https://www.frontendmentor.io/home',
      'https://www.frontendmentor.io/challenges'
    ];

    linksToShorten.forEach(linkToShorten => {
      fireEvent.change(input, {target: {value: linkToShorten}});
      fireEvent.click(submitButton);
    });

    const shortenedLinks = await within(linksList).findAllByRole('listitem');

    shortenedLinks.forEach((link, i) => {
      const originalLink = within(link).getByTestId('original-link');
      const shortenedLink = within(link).getByTestId('shortened-link');
      const copyButton = within(link).getByLabelText('Copy shortened link');

      expect(originalLink).toHaveTextContent(linksToShorten[i]);
      expect(shortenedLink).toBeInTheDocument();
      expect(shortenedLink).toBeVisible();
      expect(copyButton).toBeInTheDocument();
      expect(copyButton).toBeVisible();
      expect(copyButton).toBeEnabled();
    });

    expect(shortenedLinks.length).toBe(linksToShorten.length);
  });

  it('displays error and invalid input after entering invalid link and submitting', async () => {
    render(<ShortenLinks />);

    const form = screen.getByLabelText('shorten links');
    const input = within(form).getByRole('textbox');
    const submitButton = within(form).getByRole('button');

    const invalidLink = 'https://shrtco.de/docs/';
    
    fireEvent.change(input, {target: {value: invalidLink}});
    fireEvent.click(submitButton);

    const alert = within(form).getByRole('alert');
    const errorMessage = within(alert).getByTestId('error-message');

    await waitFor(() => expect(input).toBeInvalid());

    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toBeVisible();
    expect(errorMessage).toHaveTextContent('You have provided invalid link');
  });

  it('copies shortened link after clicking \'Copy\' button', async () => {
    render(<ShortenLinks />);

    const form = screen.getByLabelText('shorten links');
    const linksList = screen.getByRole('list');
    const input = within(form).getByRole('textbox');
    const submitButton = within(form).getByRole('button');

    const linkToShorten = 'https://www.frontendmentor.io/home';

    fireEvent.change(input, {target: {value: linkToShorten}});
    fireEvent.click(submitButton);

    const shortenedLinkElement = await within(linksList).findByRole('listitem');

    const mockedShortenedUrl = 'https://shrtco.de/Iz3htH';
    const copyButton = within(shortenedLinkElement).getByLabelText('Copy shortened link');

    fireEvent.click(copyButton);

    await waitFor(() => {
      expect(copyButton).toHaveTextContent('Copied!');
    });

    expect(navigator.clipboard.writeText).toBeCalledTimes(1);
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(mockedShortenedUrl)
    expect(navigator.clipboard.readText()).toBe(mockedShortenedUrl);
  });

  it('loads shortened links from localStorage on mount', async () => {
    const mockLinksData = [
      {
        code: '3E4Qna',
        originalLink: 'https://testing-library.com/docs/react-testing-library/example-intro',
        shortLink: 'https://shrtco.de/3E4Qna'
      },
      {
        code: 'lKS5VG',
        originalLink: 'https://css-tricks.com/snippets/css/complete-guide-grid/',
        shortLink: 'https://shrtco.de/lKS5VG'
      }
    ];

    localStorage.setItem('shortenedLinks', JSON.stringify(mockLinksData));

    expect(localStorage.__STORE__['shortenedLinks']).toBe(JSON.stringify(mockLinksData));

    render(<ShortenLinks />);
    
    const linksList = screen.getByRole('list');

    const shortenedLinks = await within(linksList).findAllByRole('listitem');

    shortenedLinks.forEach((link, i) => {
      const originalLink = within(link).getByTestId('original-link');
      const shortenedLink = within(link).getByTestId('shortened-link');

      expect(originalLink).toHaveTextContent(mockLinksData[i].originalLink);
      expect(shortenedLink).toHaveTextContent(mockLinksData[i].shortLink);
    });

    expect(localStorage.getItem).toHaveBeenLastCalledWith('shortenedLinks');
    expect(shortenedLinks.length).toBe(mockLinksData.length);
  });

  it('saves successfully shortened link to localStorage', async () => {
    render(<ShortenLinks />);

    const form = screen.getByLabelText('shorten links');
    const linksList = screen.getByRole('list');
    const input = within(form).getByRole('textbox');
    const submitButton = within(form).getByRole('button');

    const linkToShorten = 'https://www.frontendmentor.io/home';

    fireEvent.change(input, {target: {value: linkToShorten}});
    fireEvent.click(submitButton);

    await within(linksList).findByRole('listitem');

    const expectedStorageValueObject = [
      {
        code: 'Iz3htH',
        originalLink: linkToShorten,
        shortLink: 'https://shrtco.de/Iz3htH',
      }
    ];

    const expectedStorageValue = JSON.stringify(expectedStorageValueObject);

    expect(localStorage.setItem).toHaveBeenLastCalledWith('shortenedLinks', expectedStorageValue);
    expect(localStorage.__STORE__['shortenedLinks']).toBe(expectedStorageValue);
  });
});