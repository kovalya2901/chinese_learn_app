import styles from '../Styles.module.css';
import { Link } from 'react-router-dom';
import horizontal_polyline from '../../images/horizontal_polyline.jpg';
import vertical_polyline from '../../images/vertical_polyline.jpg';
import horizontal_hook_facing_down from '../../images/horizontal_hook_facing_down.jpg';
import vertical_hook_facing_left from '../../images/vertical_hook_facing_left.jpg';
import curved_hook_left from '../../images/curved_hook_left.jpg';
import hinged_right_upward_hook from '../../images/hinged_right_upward_hook.jpg';
import recumbent_hook from '../../images/recumbent_hook.jpg';
import flip_left_dot from '../../images/flip_left_dot.jpg';

const HieroglyphicCharactersL2 = () => {
    return (
        <div>
            <h3>汉字的笔画 Иероглифические черты</h3>
            <h4>Сложные иероглифические черты (лигатуры)</h4>
            <p>
                Из комбинации <i>основных иероглифических 
                черт</i> образуются <i>сложные иероглифические черты</i>, 
                или <i>лигатуры</i>. В таблице ниже даны восемь лигатур.
            </p>
            <table>
                <colgroup>
                    <col style={{ width: '5%' }} />
                    <col style={{ width: '15%' }} />
                    <col style={{ width: '40%' }} />
                    <col style={{ width: '40%' }} />
                </colgroup>
                <tbody>
                    <tr>
                        <th>№</th>
                        <th>Черта</th>
                        <th>Русское название</th>
                        <th>Пример</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>
                            <img alt="" className={styles.hieroglyph} src={horizontal_polyline} />
                        </td>
                        <td>Горизонтальная с ломаной</td>
                        <td>
                            <div>口 kǒu <i>рот</i></div>
                            <div>五 wǔ <i>пять</i></div>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>
                            <img alt="" className={styles.hieroglyph} src={vertical_polyline} />
                        </td>
                        <td>Вертикальная с ломаной</td>
                        <td>
                            <div>山 shān <i>гора</i></div>
                            <div>画 huà <i>рисовать</i></div>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>
                            <img alt="" className={styles.hieroglyph} src={horizontal_hook_facing_down} />
                        </td>
                        <td>Горизонтальная с крюком вниз</td>
                        <td>
                            <div>尔 ěr <i>ты</i></div>
                            <div>皮 pí <i>кожа</i></div>
                        </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>
                            <img alt="" className={styles.hieroglyph} src={vertical_hook_facing_left} />
                        </td>
                        <td>Вертикальная с крюком влево</td>
                        <td>
                            <div>小 xiǎo <i>маленький</i></div>
                            <div>可 kě <i>можно</i></div>
                        </td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>
                            <img alt="" className={styles.hieroglyph} src={curved_hook_left} />
                        </td>
                        <td>Изогнутая с крюком влево</td>
                        <td>
                            <div>狗 gǒu <i>собака</i></div>
                            <div>猫 māo <i>кошка</i></div>
                        </td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>
                            <img alt="" className={styles.hieroglyph} src={hinged_right_upward_hook} />
                        </td>
                        <td>Откидная вправо с крюком вверх</td>
                        <td>
                            <div>戈 gē <i>алебарда</i></div>
                            <div>我 wǒ <i>я</i></div>
                        </td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>
                            <img alt="" className={styles.hieroglyph} src={recumbent_hook} />
                        </td>
                        <td>Лежачий крюк</td>
                        <td>
                            <div>心 xīn <i>сердце</i></div>
                            <div>必 bì <i>нужно</i></div>
                        </td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>
                            <img alt="" className={styles.hieroglyph} src={flip_left_dot} />
                        </td>
                        <td>Откидная влево с точкой</td>
                        <td>
                            <div>女 nǚ <i>женщина</i></div>
                            <div>巡 xún <i>патрулировать</i></div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className={styles.next_back}>
                <Link className={styles.arrow} to='/lesson2/writing_syllables_in_pinyin_l2'>⟵</Link>
                <Link className={styles.arrow} to='/lesson2/writing_hcl2'>⟶</Link>
            </div>
        </div>
    );
}

export default HieroglyphicCharactersL2;