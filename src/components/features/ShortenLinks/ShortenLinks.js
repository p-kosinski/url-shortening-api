import { useState, useEffect } from 'react';
import clsx from 'clsx';

import ShortenedLink from '../ShortenedLink/ShortenedLink';

import styles from './ShortenLinks.module.scss';

const ShortenLinks = () => {
  const [linkToShorten, changeLinkToShorten] = useState('');
  const [shortenedLinks, changeShortenedLinks] = useState([]);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const savedShortenedLinks = JSON.parse(localStorage.getItem('shortenedLinks'));

    if(savedShortenedLinks) {
      changeShortenedLinks(savedShortenedLinks);
    }
  }, []);

  useEffect(() => {
    if(shortenedLinks.length) {
      localStorage.setItem('shortenedLinks', JSON.stringify(shortenedLinks));
    }
  }, [shortenedLinks]);

  const shortenLinkWithAPI = async (link) => {
    const url = `https://api.shrtco.de/v2/shorten?url=${link}`;

    try {
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
      } else {
        setErrorMsg(data.error);
        setError(true);
      }
    } catch(error) {
      console.error(error);
      setError(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setErrorMsg('');
    setError(false);

    if(!linkToShorten.length) {
      setErrorMsg('Please add a link');
      setError(true);
    } else {
      shortenLinkWithAPI(linkToShorten);
    }
  };

  return (
    <section className={styles.component}>
      <form className={styles.form}>
        <input
          placeholder='Shorten a link here...'
          className={clsx(styles.input, error && styles.inputError)}
          onChange={(event) => changeLinkToShorten(event.target.value)}
        />
        {error && <label className={styles.errorMsg}>{errorMsg}</label>}
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