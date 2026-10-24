import styles from '../Styles.module.css';
import { Link } from 'react-router-dom';
import kou_mouth from '../../images/kou_mouth.jpg';
import ji_how_much from '../../images/ji_how_much.jpg';
import tu_ground from '../../images/tu_ground.jpg';
import wang_prince from '../../images/wang_prince.jpg';
import yu_jasper from '../../images/yu_jasper.jpg';
import ge_halberd from '../../images/ge_halberd.jpg';

const OrderWritingHCL2 = () => {
    return (
        <div className={styles.blog}>
            <h3>笔顺知识 Порядок написания черт</h3>
            <p>
                При написании сложных иероглифов приходится руководствоваться сразу 
                несколькими правилами порядка черт. Поэтому существуют принципы комбинации 
                разных правил друг с другом.
            </p>
            <p>
                <b>
                    1. Сначала вертикальная, потом примыкающие горизонтальные или лигатура:
                </b>
            </p>
            <table>
                <colgroup>
                    <col style={{ width: '50%' }} />
                    <col style={{ width: '50%' }} />
                </colgroup>
                <tbody>
                    <tr>
                        <td>口 kǒu <i>рот</i></td>
                        <td>
                            <img alt="" style={{ width: '400px' }} src={kou_mouth} />
                        </td>
                    </tr>
                    <tr>
                        <td>几 jǐ <i>сколько</i></td>
                        <td>
                            <img alt="" style={{ width: '400px' }} src={ji_how_much} />
                        </td>
                    </tr>
                </tbody>
            </table>
            <p>
                <b>
                    2. Приоритет правила "сначала верхние черты, затем нижние".
                </b>
            </p>
            <p>
                Если горизонтальная черта находится ниже вертикальной и при этом вертикальная 
                не пересекает горизонтальную, то сначала пишется вертикальная, а только потом 
                горизонтальная:
            </p>
            <table>
                <colgroup>
                    <col style={{ width: '50%' }} />
                    <col style={{ width: '50%' }} />
                </colgroup>
                <tbody>
                    <tr>
                        <td>土 tǔ <i>земля, почва</i></td>
                        <td>
                            <img alt="" style={{ width: '400px' }} src={tu_ground} />
                        </td>
                    </tr>
                    <tr>
                        <td>王 wáng <i>князь, правитель</i></td>
                        <td>
                            <img alt="" style={{ width: '400px' }} src={wang_prince} />
                        </td>
                    </tr>
                </tbody>
            </table>
            <p>
                <b>3. Точка в правом верхнем и правом нижнем углах пишется последней:</b>
            </p>
            <table>
                <colgroup>
                    <col style={{ width: '50%' }} />
                    <col style={{ width: '50%' }} />
                </colgroup>
                <tbody>
                    <tr>
                        <td>玉 yù <i>яшма</i></td>
                        <td>
                            <img alt="" style={{ width: '400px' }} src={yu_jasper} />
                        </td>
                    </tr>
                    <tr>
                        <td>戈 gē <i>алебарда</i></td>
                        <td>
                            <img alt="" style={{ width: '400px' }} src={ge_halberd} />
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className={styles.next_back}>
                <Link className={styles.arrow} to='/lesson2/writing_hcl2'>⟵</Link>
                <Link className={styles.arrow} to='/lesson2/hieroglyph_structure'>⟶</Link>
            </div>
        </div>
    );
}

export default OrderWritingHCL2;