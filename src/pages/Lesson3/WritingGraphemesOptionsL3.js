import styles from '../Styles.module.css';
import { Link } from 'react-router-dom';

const WritingGraphemesOptionsL3 = () => {
    return (
        <div>
            <h3>篇旁的变体 Варианты написания графем</h3>
            <div className={styles.next_back}>
                <Link className={styles.arrow} to='/lesson3/hieroglyphs_table_l3'>⟵</Link>
                <Link className={styles.arrow} to='/lesson3/exercises_l3'>⟶</Link>
            </div>
        </div>
    );
}

export default WritingGraphemesOptionsL3;