import styles from '../Styles.module.css';
import { Link } from 'react-router-dom';

const TonesL3 = () => {
    return (
        <div>
            <h3>声调 Тоны</h3>
            <div className={styles.next_back}>
                <Link className={styles.arrow} to='/lesson3/writing_syllables_in_pinyin_l3'>⟵</Link>
                <Link className={styles.arrow} to='/lesson3/hieroglyphic_characters_l3'>⟶</Link>
            </div>
        </div>
    );
}

export default TonesL3;