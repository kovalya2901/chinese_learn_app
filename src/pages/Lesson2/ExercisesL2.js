import styles from '../Styles.module.css';
import { Link } from 'react-router-dom';

const ExercisesL2 = () => {
    return (
        <div className={styles.blog}>
            <h3>Упражнения</h3>
            <div className={styles.next_back}>
                <Link className={styles.arrow} to='/lesson2/hieroglyphs_table_l2'>⟵</Link>
            </div>
        </div>
    );
}

export default ExercisesL2;