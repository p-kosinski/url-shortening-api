import { render, screen, within } from '@testing-library/react';

import MainSection from './MainSection';

describe('MainSection component', () => {
  it('renders shorten links form', () => {
    render(<MainSection />);

    const form = screen.getByLabelText('shorten links');

    expect(form).toBeInTheDocument();
    expect(form).toBeVisible();
  });

  describe('renders section with:', () => {
    it('level 2 heading with \'Advanced Statistics\' text', () => {
      render(<MainSection />);

      const h2 = screen.getByRole('heading', { level: 2 });

      expect(h2).toBeInTheDocument();
      expect(h2).toBeVisible();
      expect(h2).toHaveTextContent('Advanced Statistics');
    });
  
    it('paragraph with expected text', () => {
      render(<MainSection />);

      const paragraph = screen.getByTestId('statistics-paragraph');

      const expectedParagraphText = 'Track how your links are performing across the web with our advanced statistics dashboard.';

      expect(paragraph).toBeInTheDocument();
      expect(paragraph).toBeVisible();
      expect(paragraph).toHaveTextContent(expectedParagraphText);
    });

    it('three articles with decorative icons & level 3 headings and paragraphs with expected texts', () => {
      render(<MainSection />);

      const allArticles = screen.getAllByRole('article');

      const expectedTexts = [
        {
          title: 'Brand Recognition',
          text: 'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.',
        },
        {
          title: 'Detailed Records',
          text: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
        },
        {
          title: 'Fully Customizable',
          text: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
        }
      ];

      allArticles.forEach((article, i) => {
        const icon = within(article).getByRole('presentation');
        const h3 = within(article).getByRole('heading', { level: 3 });
        const paragraph = within(article).getByTestId('article-paragraph');

        expect(icon).toBeInTheDocument();
        expect(icon).toBeVisible();

        expect(h3).toBeInTheDocument();
        expect(h3).toBeVisible();
        expect(h3).toHaveTextContent(expectedTexts[i].title);

        expect(paragraph).toBeInTheDocument();
        expect(paragraph).toBeVisible();
        expect(paragraph).toHaveTextContent(expectedTexts[i].text);
      });
    });
  });
});