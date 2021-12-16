import React from "react";
import { FacebookLogo, TwitterLogo, InstagramLogo } from "phosphor-react";
import styles from "../Home/Home.module.css";

const Social = () => {
  const icons = [
    {
      id: 0,
      href: "https://www.facebook.com/barefootfarmdunhill",
      aria: "Barefoot farm facebook url",
      iconLogo: <FacebookLogo className={styles.iconSize} color='#4e3c31' />,
    },
    {
      id: 1,
      href: "https://twitter.com/barefootfarm_du",
      aria: "Barefoot farm twitter url",
      iconLogo: <TwitterLogo className={styles.iconSize} color='#4e3c31' />,
    },
    {
      id: 2,
      href: "https://www.instagram.com/barefoot.farm/",
      aria: "Barefoot farm instagram url",
      iconLogo: <InstagramLogo className={styles.iconSize} color='#4e3c31' />,
    },
  ];
  return (
    <div className={styles.wrapper}>
      <div className={styles.contactWrapper}>
        {icons.map((i) => {
          return (
            <div className={styles.socialIcon} key={i.id}>
              <a
                href={i.href}
                target='_blank'
                rel='noreferrer'
                aria-label={i.aria}
              >
                {i.iconLogo}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Social;
