import styles from '../Styles.module.css';
import { Link } from 'react-router-dom';

const HieroglyphicCharactersL3 = () => {
    return (
        <div>
            <h3>汉字的笔画 Иероглифические черты</h3>
            <div className={styles.next_back}>
                <Link className={styles.arrow} to='/lesson3/tones_l3'>⟵</Link>
                <Link className={styles.arrow} to='/lesson3/ways_of_combining_traits_l3'>⟶</Link>
            </div>
        </div>
    );
}

export default HieroglyphicCharactersL3;