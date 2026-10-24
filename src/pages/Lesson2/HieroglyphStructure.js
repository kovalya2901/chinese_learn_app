import styles from '../Styles.module.css';
import { Link } from 'react-router-dom';

const HieroglyphStructure = () => {
    return (
        <div className={styles.blog}>
            <h3>汉字结构 Структура иероглифа</h3>
            <div className={styles.next_back}>
                <Link className={styles.arrow} to='/lesson2/order_writing_hcl2'>⟵</Link>
                <Link className={styles.arrow} to='/lesson2/hieroglyphs_table_l2'>⟶</Link>
            </div>
        </div>
    );
}

export default HieroglyphStructure;