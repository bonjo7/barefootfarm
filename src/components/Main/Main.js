import image from "../../images/barefootfarm.png";
import Social from "../Social/Social";
import { Envelope, Phone } from "phosphor-react";
import styles from "./Main.module.css";
const Main = () => {
  const email = "info@barefootfarm.ie";
  const tel = "+353-87-249-5554";
  return (
    <>
      <div className={styles.wrapper} role='contentinfo'>
        <div>
          <img
            className={styles.shadow}
            src={image}
            alt='bare foot farm company logo'
          />
        </div>
        <div className={styles.fullWrapper}>
          <div className={styles.contactWrapper}>
            <div className={styles.icon}>
              <Envelope size={25} color='#4e3c31' />
            </div>
            <div>
              <a href={email}>{email}</a>
            </div>
          </div>
          <div className={styles.contactWrapper}>
            <div className={styles.icon}>
              <Phone size={25} color='#4e3c31' />
            </div>
            <div>
              <a href={tel}>{tel}</a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.socialComponent}>
        <Social />
      </div>
    </>
  );
};

export default Main;
