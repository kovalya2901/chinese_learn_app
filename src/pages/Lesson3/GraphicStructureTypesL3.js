import styles from '../Styles.module.css';
import { Link } from 'react-router-dom';

const GraphicStructureTypesL3 = () => {
    return (
        <div>
            <h3>汉字结构及类型 Типы графической структуры иероглифов</h3>
            <div className={styles.next_back}>
                <Link className={styles.arrow} to='/lesson3/writing_hcl3'>⟵</Link>
                <Link className={styles.arrow} to='/lesson3/hieroglyphs_table_l3'>⟶</Link>
            </div>
        </div>
    );
}

export default GraphicStructureTypesL3;