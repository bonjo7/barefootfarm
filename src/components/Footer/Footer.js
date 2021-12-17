import { Envelope, Phone } from "phosphor-react";
import styles from "./Footer.module.css";

const Footer = () => {
  const footerText = `© 2021 | BareFoot Farm, Ballyphilip, Dunhill , Co. Waterford, Ireland`;
  const telephone = `087 249 5554`;
  const email = `info@barefootfarm.ie`;
  return (
    <div className={styles.footer}>
      <p style={{ padding: "10px" }}>{footerText}</p>
      <div className={styles.wrapper} role='contentinfo'>
        <div className={styles.contactWrapper}>
          <div className={styles.icon}>
            <Envelope size={20} color='#fff' />
          </div>
          <div>
            <a href='mailto:info@barefootfarm.ie'>{email}</a>
          </div>
        </div>
        <div className={styles.contactWrapper}>
          <div className={styles.icon}>
            <Phone size={20} color='#fff' />
          </div>
          <div>
            <a href={telephone}>{telephone}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
