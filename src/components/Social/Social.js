import React from "react";
import { FacebookLogo, TwitterLogo, InstagramLogo } from "phosphor-react";
import styles from "../Main/Main.module.css";

const Social = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contactWrapper}>
        <div className={styles.socialIcon}>
          <a
            href='https://www.facebook.com/barefootfarmdunhill'
            target='_blank'
            rel='noreferrer'
            aria-label='Barefoot farm facebook url'
          >
            <FacebookLogo className={styles.iconSize} color='#4e3c31' />
          </a>
        </div>
        <div className={styles.socialIcon}>
          <a
            href='https://twitter.com/barefootfarm_du'
            target='_blank'
            rel='noreferrer'
            aria-label='Barefoot farm twitter url'
          >
            <TwitterLogo className={styles.iconSize} color='#4e3c31' />
          </a>
        </div>
        <div className={styles.socialIcon}>
          <a
            href='https://www.instagram.com/barefoot.farm/'
            target='_blank'
            rel='noreferrer'
            aria-label='Barefoot farm instagram url'
          >
            <InstagramLogo className={styles.iconSize} color='#4e3c31' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Social;
