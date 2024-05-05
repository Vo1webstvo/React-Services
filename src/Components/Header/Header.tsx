import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.scss';

type HeaderProps = {
  children?: React.ReactNode;
  link: string;
};

const Header = (props: HeaderProps) => {
  const { children, link } = props;
  return (
    <header className={styles.header}>
      <Link to={link}>{children}</Link>
    </header>
  );
};

export default Header;
