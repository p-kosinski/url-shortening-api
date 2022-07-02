import { rest } from 'msw';

export const handlers = [
  rest.get('https://api.shrtco.de/v2/shorten', (req, res, ctx) => {
    const invalidLinkExample = 'https://shrtco.de/docs/';
    const requestUrlParam = req.url.searchParams.get('url');

    if(requestUrlParam !== invalidLinkExample) {
      return res(
        ctx.status(200),
        ctx.json({
          ok: true,
          result: {
            code: 'Iz3htH',
            original_link: requestUrlParam,
            full_short_link: 'https://shrtco.de/Iz3htH',
          },
        }),
      );
    } else {
      return res(
        ctx.status(400),
        ctx.json({
          ok: false,
          error: 'You have provided invalid link',
        })
      );
    }
  })
];