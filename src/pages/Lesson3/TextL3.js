import styles from '../Styles.module.css';
import { Link } from 'react-router-dom';
import NewWordsL3 from './NewWordsL3';

const TextL3 = () => {
    return (
        <div>
            <h3>课文 Текст</h3>
            <NewWordsL3 />
            <div className={styles.next_back}>
                <Link className={styles.arrow} to='/lesson3/comments_l3'>⟶</Link>
            </div>
        </div>
    );
}

export default TextL3;