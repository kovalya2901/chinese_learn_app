import styles from '../Styles.module.css';
import { Link } from 'react-router-dom';

const WritingHCL3 = () => {
    return (
        <div>
            <h3>书写笔画注意事项 Основные принципы написания иероглифических черт</h3>
            <div className={styles.next_back}>
                <Link className={styles.arrow} to='/lesson3/ways_of_combining_traits_l3'>⟵</Link>
                <Link className={styles.arrow} to='/lesson3/graphic_structure_types_l3'>⟶</Link>
            </div>
        </div>
    );
}

export default WritingHCL3;