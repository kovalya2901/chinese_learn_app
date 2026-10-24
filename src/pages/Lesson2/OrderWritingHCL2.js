import styles from '../Styles.module.css';
import { Link } from 'react-router-dom';

const OrderWritingHCL2 = () => {
    return (
        <div className={styles.blog}>
            <h3>笔顺知识 Порядок написания черт</h3>
            <div className={styles.next_back}>
                <Link className={styles.arrow} to='/lesson2/writing_hcl2'>⟵</Link>
                <Link className={styles.arrow} to='/lesson2/hieroglyph_structure'>⟶</Link>
            </div>
        </div>
    );
}

export default OrderWritingHCL2;