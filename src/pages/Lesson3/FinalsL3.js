import styles from '../Styles.module.css';
import { Link } from 'react-router-dom';

const FinalsL3 = () => {
    return (
        <div>
            <h3>韵母 Финали: ai, ei, ao, ou, uo, an, en, in</h3>
            <div className={styles.next_back}>
                <Link className={styles.arrow} to='/lesson3/chinese_syllable_structure_l3'>⟵</Link>
                <Link className={styles.arrow} to='/lesson3/writing_syllables_in_pinyin_l3'>⟶</Link>
            </div>
        </div>
    );
}

export default FinalsL3;