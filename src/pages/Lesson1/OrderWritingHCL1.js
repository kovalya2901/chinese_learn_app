import styles from '../Styles.module.css';
import { Link } from "react-router-dom";
import erTwo from '../../images/er_two.jpg';
import sanThree from '../../images/san_three.jpg';
import renHumanity from '../../images/ren_humanity.jpg';
import shiTen from '../../images/shi_ten.jpg';
import daBig from '../../images/da_big.jpg';
import baEight from '../../images/ba_eight.jpg';
import renHuman from '../../images/ren_human.jpg';

const OrderWritingHCL1 = () => {
    return (
        <div className={styles.blog}>
            <h3>笔顺知识 Порядок написания черт</h3>
            <p>
                Черты в иероглифе пишутся в строго заданной последовательности. Ниже
                приведены <b>4 основных правила порядка черт.</b>
            </p>
            <p>
                <b>1. Сначала пишутся верхние черты, а затем нижние:</b>
            </p>
            <table>
                <colgroup>
                    <col style={{ width: '50%' }} />
                    <col style={{ width: '50%' }} />
                </colgroup>
                <tbody>
                    <tr>
                        <td>二 èr <i>два</i></td>
                        <td>
                            <img alt="" style={{ width: '400px' }} src={erTwo} />
                        </td>
                    </tr>
                    <tr>
                        <td>三 sān <i>три</i></td>
                        <td>
                            <img alt="" style={{ width: '400px' }} src={sanThree} />
                        </td>
                    </tr>
                </tbody>
            </table>
            <p>
                <b>2. Сначала пишутся черты слева, а затем справа:</b>
            </p>
            <table>
                <colgroup>
                    <col style={{ width: '50%' }} />
                    <col style={{ width: '50%' }} />
                </colgroup>
                <tbody>
                    <tr>
                        <td>仁 rén <i>гуманность</i></td>
                        <td>
                            <img alt="" style={{ width: '400px' }} src={renHumanity} />
                        </td>
                    </tr>
                </tbody>
            </table>
            <p>
                <b>3.</b> Если горизонтальная черта <b>пересекается</b> с вертикальной или
                откидной влево, то <b>сначала пишется горизонтальная, а затем
                    — другая черта:</b>
            </p>
            <table>
                <colgroup>
                    <col style={{ width: '50%' }} />
                    <col style={{ width: '50%' }} />
                </colgroup>
                <tbody>
                    <tr>
                        <td>十 shí <i>десять</i></td>
                        <td>
                            <img alt="" style={{ width: '400px' }} src={shiTen} />
                        </td>
                    </tr>
                    <tr>
                        <td>大 dà <i>большой</i></td>
                        <td>
                            <img alt="" style={{ width: '400px' }} src={daBig} />
                        </td>
                    </tr>
                </tbody>
            </table>
            <p>
                <b>4. Сначала пишется откидная влево, а затем откидная вправо:</b>
            </p>
            <table>
                <colgroup>
                    <col style={{ width: '50%' }} />
                    <col style={{ width: '50%' }} />
                </colgroup>
                <tbody>
                    <tr>
                        <td>八 bā <i>восемь</i></td>
                        <td>
                            <img alt="" style={{ width: '400px' }} src={baEight} />
                        </td>
                    </tr>
                    <tr>
                        <td>人 rén <i>человек</i></td>
                        <td>
                            <img alt="" style={{ width: '400px' }} src={renHuman} />
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className={styles.next_back}>
                <Link className={styles.arrow} to='/lesson1/writing_hcl1'>⟵</Link>
                <Link className={styles.arrow} to='/lesson1/exercises_l1'>⟶</Link>
            </div>
        </div>
    );
}

export default OrderWritingHCL1;