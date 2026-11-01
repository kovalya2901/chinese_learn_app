import styles from '../Styles.module.css';
import { Link } from 'react-router-dom';

const ExercisesL3 = () => {
    return (
        <div>
            <h2>练习 Упражнения</h2>
            <div className={styles.next_back}>
                <Link className={styles.arrow} to='/lesson3/writing_graphemes_options_l3'>⟵</Link>
            </div>
        </div>
    );
}

export default ExercisesL3;