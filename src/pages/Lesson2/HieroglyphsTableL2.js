import styles from '../Styles.module.css';
import { Link } from 'react-router-dom';

const HieroglyphsTableL2 = () => {
    return (
        <div className={styles.blog}>
            <h3>汉字表 Таблица иероглифов</h3>
            <div className={styles.next_back}>
                <Link className={styles.arrow} to='/lesson2/hieroglyph_structure'>⟵</Link>
                <Link className={styles.arrow} to='/lesson2/exercises_l2'>⟶</Link>
            </div>
        </div>
    );
}

export default HieroglyphsTableL2;