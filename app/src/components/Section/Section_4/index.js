import FadeInSection from "@/saturn/FadeInSection";
import styles from "./Section_4.module.css";

export default function Section_4() {
  return (
    <div className={styles.container}>
      <div className={styles.container_top}>
        <div className={styles.container_top_core}>
          <div className={styles.container_top_core_header}>
            <h2>Vezi disponibilitatea</h2>
          </div>
          <div className={styles.container_top_cor_form}>
            <div className={styles.container_top_cor_form_input}></div>
            <div className={styles.container_top_cor_form_input}></div>
            <FadeInSection delay={0.3} className={styles.container_top_cor_form_submit_wrap}>
              <button className={styles.container_top_cor_form_submit}>Verifică</button>
            </FadeInSection>
          </div>
        </div>
      </div>
      <div className={styles.container_bot}>
        <FadeInSection delay={0.5} className={styles.container_bot_core}>
          <div className={styles.container_bot_core_img}>
            <img src="/icons/phone.png" alt="phone" />
          </div>
          <div className={styles.container_bot_core_text}>
            <p>Rezervare</p>
            <span>+40741092762</span>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
}