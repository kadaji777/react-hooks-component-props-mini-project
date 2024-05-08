import React from 'react';

const Article = ({ title, date = "January 1, 1970", preview, minutesToRead }) => {
  const getReadIndicator = (minutes) => {
    if (minutes < 30) {
      const cups = Math.ceil(minutes / 5);
      return '☕️'.repeat(cups) + ` ${minutes} min read`;
    } else {
      const bento = Math.ceil(minutes / 10);
      return '🍱'.repeat(bento) + ` ${minutes} min read`;
    }
  };

  const readIndicator = getReadIndicator(minutesToRead);

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <small>{readIndicator}</small>
    </article>
  );
};

export default Article;
