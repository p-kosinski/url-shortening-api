import { render, screen, fireEvent } from '@testing-library/react';

import CopyButton from './CopyButton';

describe('CopyButton component', () => {
  it('renders button with \'Copy\' text when given \'onClick\' and \'ariaLabel\' required props', () => {
    const handleClick = jest.fn();
    
    render(
      <CopyButton
        onClick={handleClick}
        ariaLabel='Test Button'
      />
    );

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toBeVisible();
    expect(button).toBeEnabled();
    expect(button).toHaveAccessibleName('Test Button');
    expect(button).toHaveTextContent('Copy');
  });

  it('renders success button variant when given \'success\' prop', () => {
    const handleClick = jest.fn();
    
    render(
      <CopyButton
        onClick={handleClick}
        ariaLabel='Test Button'
        success
      />
    );

    const button = screen.getByRole('button');

    expect(button).toHaveClass('success');
    expect(button).toHaveTextContent('Copied!');
  });

  it('renders error button variant when given \'error\' prop', () => {
    const handleClick = jest.fn();
    
    render(
      <CopyButton
        onClick={handleClick}
        ariaLabel='Test Button'
        error
      />
    );

    const button = screen.getByRole('button');

    expect(button).toHaveClass('error');
    expect(button).toHaveTextContent('Copy');
  });

  it('calls function provided in onClick prop on click', () => {
    const handleClick = jest.fn();
    
    render(
      <CopyButton
        onClick={handleClick}
        ariaLabel='click test'
      />
    );

    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(handleClick).toBeCalled();
    expect(handleClick).toBeCalledTimes(1);
  });

  it('renders aria-label from ariaLabel prop', () => {
    const handleClick = jest.fn();
    const expectedAriaLabel = 'Test button';
    
    render(
      <CopyButton
        onClick={handleClick}
        ariaLabel={expectedAriaLabel}
      />
    );

    const button = screen.getByLabelText(expectedAriaLabel);
    
    expect(button).toBeInTheDocument();
    expect(button).toBeVisible();
  });
});