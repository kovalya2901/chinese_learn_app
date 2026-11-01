import styles from '../Styles.module.css';
import { Link } from 'react-router-dom';

const WaysOfCombiningTraitsL3 = () => {
    return (
        <div>
            <h3>笔画组合关系 Способы комбинации черт в иероглифе</h3>
            <div className={styles.next_back}>
                <Link className={styles.arrow} to='/lesson3/hieroglyphic_characters_l3'>⟵</Link>
                <Link className={styles.arrow} to='/lesson3/writing_hcl3'>⟶</Link>
            </div>
        </div>
    );
}

export default WaysOfCombiningTraitsL3;