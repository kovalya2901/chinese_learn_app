import styles from '../Styles.module.css';
import { Link } from 'react-router-dom';

const CommentsL3 = () => {
    return (
        <div>
            <h3>注释 Комментарии</h3>
            <div className={styles.next_back}>
                <Link className={styles.arrow} to='/lesson3/text_l3'>⟵</Link>
                <Link className={styles.arrow} to='/lesson3/chinese_syllable_structure_l3'>⟶</Link>
            </div>
        </div>
    );
}

export default CommentsL3;