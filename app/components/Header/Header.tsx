'use client';

import { AnimatePresence } from 'framer-motion';

import styles from './style.module.scss';

import { useState } from 'react';
import Nav from '../Nav';

export default function Home() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div
        onClick={() => {
          setIsActive(!isActive);
        }}
        className={styles.button}
      >
        <div
          className={`${styles.burger} ${isActive ? styles.burgerActive : ''}`}
        ></div>
        <AnimatePresence>{isActive && <Nav />}</AnimatePresence>
      </div>
    </>
  );
}
