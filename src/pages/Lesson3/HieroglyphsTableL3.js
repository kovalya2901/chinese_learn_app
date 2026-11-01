import styles from '../Styles.module.css';
import { Link } from 'react-router-dom';

const HieroglyphsTableL3 = () => {
    return (
        <div>
            <h3>汉字表 Таблица иероглифов</h3>
            <div className={styles.next_back}>
                <Link className={styles.arrow} to='/lesson3/graphic_structure_types_l3'>⟵</Link>
                <Link className={styles.arrow} to='/lesson3/writing_graphemes_options_l3'>⟶</Link>
            </div>
        </div>
    );
}

export default HieroglyphsTableL3;