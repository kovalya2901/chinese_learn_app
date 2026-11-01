import styles from '../Styles.module.css';
import { Link } from 'react-router-dom';
import Exercise1L2 from './Exercise1L2';
import Exercise2L2 from './Exercise2L2';
import Exercise3L2 from './Exercise3L2';
import Exercise4L2 from './Exercise4L2';
import Exercise5L2 from './Exercise5L2';
import Exercise6L2 from './Exercise6L2';
import Exercise7L2 from './Exercise7L2';
import Exercise8L2 from './Exercise8L2';
import Exercise9L2 from './Exercise9L2';
import Exercise10L2 from './Exercise10L2';

const ExercisesL2 = () => {
    return (
        <div>
            <h2>练习 Упражнения</h2>
            <Exercise1L2 />
            <Exercise2L2 />
            <Exercise3L2 />
            <Exercise4L2 />
            <Exercise5L2 />
            <Exercise6L2 />
            <Exercise7L2 />
            <Exercise8L2 />
            <Exercise9L2 />
            <Exercise10L2 />
            <div className={styles.next_back}>
                <Link className={styles.arrow} to='/lesson2/hieroglyphs_table_l2'>⟵</Link>
            </div>
        </div>
    );
}

export default ExercisesL2;