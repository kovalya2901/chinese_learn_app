import styles from '../Styles.module.css';
import { Link } from 'react-router-dom';

const WritingHCL2 = () => {
    return (
        <div>
            <h3>书写笔画注意事项 Основные принципы написания иероглифических черт</h3>
            <p>
                При написании и чтении иероглифов следует обращать внимание на количество 
                черт. Например, иероглифы 日 rì 'солнце' и 目 mù 'глаз' отличаются тем, что 
                у первого в замкнутый контур вписана одна горизонтальная черта (всего 4 черты), 
                а у второго — две (всего 5 черт). Графема 王 wáng 'князь, правитель' пишется 
                без точки, в графеме 主 zhǔ 'главный, господин' точка пишется сверху, а в 
                графеме 玉 yù 'яшма, нефрит' — справа снизу. Умение правильно определять 
                количество черт необходимо для поиска иероглифа в словаре.
            </p>
            <div className={styles.next_back}>
                <Link className={styles.arrow} to='/lesson2/hieroglyphic_characters_l2'>⟵</Link>
                <Link className={styles.arrow} to='/lesson2/order_writing_hcl2'>⟶</Link>
            </div>
        </div>
    );
}

export default WritingHCL2;