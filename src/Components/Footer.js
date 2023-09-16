import React from 'react';
import { useSelector } from 'react-redux';

export default function Footer() {
  const theme = useSelector(state => state.todo.theme);

  return (
    <div className={`footer ${theme === true ? 'day-footer' : 'dark-footer'}`}>
      &copy; {new Date().getFullYear()} Copyright:{' '}
      <b><i className="fab fa-linkedin"></i>:<a className={theme ? 'text-dark':'text-white'}    href='https://www.linkedin.com/in/mohammed-muneesh-e-k-942671274/' target='_blank' rel='noopener noreferrer'>
        Mohammed Muneesh E K
      </a></b>
    </div>
  );
}