import React, { useState } from 'react';
import styled from 'styled-components';

const StyledBookmark = styled.button`
  /* width: 18rem; */
  padding-right: 3rem;
  background-color: var(--medium-gray);
  color: var(--dark-gray);
  font-size: 1.4rem;
  font-weight: 700;
  border-radius: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .bookmark__icon {
    transition: all 0.5s ease-in;
    color: ${({ bookmarked }) => (bookmarked ? 'var(--dark-cyan) !important' : '#2f2f2f')};
  }

  .bookmark__symbol {
    transition: all 0.5s ease-in;
    color: ${({ bookmarked }) => (bookmarked ? 'var(--white) !important' : '#b1b1b1;')};
  }

  .bookmark__text {
    transition: all 0.5s ease-in;
    padding-left: 1.5rem;
    color: ${({ bookmarked }) => (bookmarked ? 'var(--dark-cyan)' : '')};
  }

  &:hover > .bookmark__icon {
    transition: all 0.5s ease-in;
    color: var(--dark-gray);
  }

  &:hover .bookmark__symbol {
    transition: all 0.5s ease-in;
    color: var(--white);
  }
`;

const Bookmarker = ({ isBookmarked }) => {
  const [bookmarked, setBookmarked] = useState(isBookmarked);

  const toggleBookmark = () => {
    setBookmarked(!bookmarked);
    // As this simple app is ok handling this information locally, IRL you must notice parents bookmarked changed!
  };

  const buttonText = () => {
    return bookmarked ? 'Bookmarked' : 'Bookmark';
  };

  return (
    <StyledBookmark bookmarked={bookmarked} onClick={toggleBookmark}>
      <svg className="bookmark__icon" width="56" height="56" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fillRule="evenodd">
          <circle fill="currentColor" cx="28" cy="28" r="28" />
          <path className="bookmark__symbol" fill="currentColor" d="M23 19v18l5-5.058L33 37V19z" />
        </g>
      </svg>
      <span className="bookmark__text">{buttonText()}</span>
    </StyledBookmark>
  );
};

export default Bookmarker;
