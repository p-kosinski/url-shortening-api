import { useState } from 'react';

import { useLocalStorage } from '../../../hooks/useLocalStorage';

import ShortenInput from '../../common/ShortenInput/ShortenInput';
import ShortenSubmitButton from '../../common/ShortenSubmitButton/ShortenSubmitButton';
import ShortenedLink from '../ShortenedLink/ShortenedLink';

import styles from './ShortenLinks.module.scss';

const ShortenLinks = () => {
  const [linkToShorten, changeLinkToShorten] = useState('');
  const [shortenedLinks, changeShortenedLinks] = useLocalStorage(
    'shortenedLinks', []
  );
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const shortenLinkWithAPI = async (link) => {
    const url = `https://api.shrtco.de/v2/shorten?url=${link}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      const { ok, result } = data;

      if (ok) {
        const linkData = {
          code: result.code,
          originalLink: result.original_link,
          shortLink: result.full_short_link,
        };

        changeShortenedLinks((currentState) => [...currentState, linkData]);
      } else {
        setErrorMsg(data.error);
        setError(true);
      }
    } catch (error) {
      setError(true);
      console.error(error);
    }
  };

  const handleInputChange = (event) => {
    changeLinkToShorten(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setErrorMsg('');
    setError(false);

    if (!linkToShorten.length) {
      setErrorMsg('Please add a link');
      setError(true);
    } else {
      shortenLinkWithAPI(linkToShorten);
    }
  };

  return (
    <>
      <form aria-label='shorten links' className={styles.form}>
        <ShortenInput
          error={error}
          errorMsg={errorMsg}
          onChange={handleInputChange}
        />
        <ShortenSubmitButton onClick={handleSubmit} />
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
    </>
  );
};

export default ShortenLinks;
