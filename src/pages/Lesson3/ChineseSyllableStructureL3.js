import styles from '../Styles.module.css';
import { Link } from 'react-router-dom';

const ChineseSyllableStructureL3 = () => {
    return (
        <div>
            <h3>音节 Структура китайского слога</h3>
            <div className={styles.next_back}>
                <Link className={styles.arrow} to='/lesson3/comments_l3'>⟵</Link>
                <Link className={styles.arrow} to='/lesson3/finals_l3'>⟶</Link>
            </div>
        </div>
    );
}

export default ChineseSyllableStructureL3;