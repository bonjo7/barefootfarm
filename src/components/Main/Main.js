import image from "../../images/barefootfarm.png";
import Social from "../Social/Social";
import { Envelope, Phone } from "phosphor-react";
import styles from "./Main.module.css";
const Main = () => {
  return (
    <>
      <div className={styles.wrapper} role='contentinfo'>
        <img
          className={styles.shadow}
          src={image}
          alt='bare foot farm company logo'
        />
        <div className={styles.fullWrapper}>
          <div className={styles.contactWrapper}>
            <div className={styles.icon}>
              <Envelope size={25} color='#4e3c31' />
            </div>
            <div>
              <a href='info@barefootfarm.ie'>info@barefootfarm.ie</a>
            </div>
          </div>
          <div className={styles.contactWrapper}>
            <div className={styles.icon}>
              <Phone size={25} color='#4e3c31' />
            </div>
            <div>
              <a href='tel:+353-87-249-5554'>+353-87-249-5554</a>
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
