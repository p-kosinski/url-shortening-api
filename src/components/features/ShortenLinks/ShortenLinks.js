import { useState } from 'react';

import ShortenedLink from '../ShortenedLink/ShortenedLink';

import styles from './ShortenLinks.module.scss';

const ShortenLinks = () => {
  const [linkToShorten, changeLinkToShorten] = useState('');
  const [shortenedLinks, changeShortenedLinks] = useState([]);

  const shortenLinkWithAPI = async (link) => {
    const url = `https://api.shrtco.de/v2/shorten?url=${link}`;

    const response = await fetch(url);
    const data = await response.json();

    const { ok, result } = data;

    if(ok) {
      const linkData = {
        code: result.code,
        originalLink: result.original_link,
        shortLink: result.full_short_link,
      };

      changeShortenedLinks(currentState => [...currentState, linkData]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    shortenLinkWithAPI(linkToShorten);
  };

  return (
    <section className={styles.component}>
      <form className={styles.form}>
        <input
          placeholder='Shorten a link here...'
          className={styles.input}
          onChange={(event) => changeLinkToShorten(event.target.value)}
        />
        <button
          className={styles.submitButton}
          onClick={(event) => handleSubmit(event)}
        >
          Shorten it!
        </button>
      </form>
      <div className={styles.links}>
        <ul>
          {shortenedLinks.map((shortenedLink, i) => (
            <li key={i}>
              <ShortenedLink
                originalLink={shortenedLink.originalLink}
                shortenedLink={shortenedLink.shortLink}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ShortenLinks;