import styles from '../Styles.module.css';
import { Link } from 'react-router-dom';

const WritingSyllablesInPinyinL3 = () => {
    return (
        <div>
            <h3>音节的拼写规则 Правила записи слогов в пиньинь</h3>
            <div className={styles.next_back}>
                <Link className={styles.arrow} to='/lesson3/finals_l3'>⟵</Link>
                <Link className={styles.arrow} to='/lesson3/tones_l3'>⟶</Link>
            </div>
        </div>
    );
}

export default WritingSyllablesInPinyinL3;