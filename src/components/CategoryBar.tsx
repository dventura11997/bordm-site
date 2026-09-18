import { categoryPills } from '../data/articles';
import styles from './CategoryBar.module.css';

export default function CategoryBar() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.track}>
          {categoryPills.map((pill) => (
            <a key={pill.label} href="#" className={styles.pill}>
              <span className={styles.icon}>{pill.icon}</span>
              <span className={styles.label}>{pill.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
