import styles from '../Styles.module.css';
import { Link } from 'react-router-dom';

const HieroglyphsTableL2 = () => {
    return (
        <div>
            <h3>汉字表 Таблица иероглифов</h3>
            <p>
                Пропишите и выучите нижеследующие иероглифы, обратите внимание на порядок черт.
            </p>
            <table>
                <colgroup>
                    <col style={{ width: '25%' }} />
                    <col style={{ width: '25%' }} />
                    <col style={{ width: '25%' }} />
                    <col style={{ width: '25%' }} />
                </colgroup>
                <tbody>
                    <tr>
                        <th>Иероглиф</th>
                        <th>Произношение</th>
                        <th>Значение</th>
                        <th>Примеры</th>
                    </tr>
                    <tr>
                        <td className={styles.hieroglyph_fs40}>一</td>
                        <td>yī</td>
                        <td>один, единица</td>
                        <td>
                            <div>二 èr <i>два</i></div>
                            <div>三 sān <i>три</i></div>
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.hieroglyph_fs40}>八</td>
                        <td>bā</td>
                        <td>восемь</td>
                        <td>
                            <div>分 fēn <i>делить</i></div>
                            <div>公 gōng <i>общий</i></div>
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.hieroglyph_fs40}>五</td>
                        <td>wǔ</td>
                        <td>пять</td>
                        <td>
                            <div>伍 wǔ <i>пять воинов</i></div>
                            <div>吾 wú <i>я</i></div>
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.hieroglyph_fs40}>土</td>
                        <td>tǔ</td>
                        <td>земля, почва</td>
                        <td>
                            <div>坐 zuò <i>сидеть</i></div>
                            <div>寺 sì <i>храм (преим. буддийский)</i></div>
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.hieroglyph_fs40}>女</td>
                        <td>nǚ</td>
                        <td>женщина</td>
                        <td>
                            <div>妈 mā <i>мама</i></div>
                            <div>好 hǎo <i>хороший</i></div>
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.hieroglyph_fs40}>木</td>
                        <td>mù</td>
                        <td>дерево</td>
                        <td>
                            <div>林 lín <i>роща</i></div>
                            <div>李 lǐ <i>слива</i></div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className={styles.next_back}>
                <Link className={styles.arrow} to='/lesson2/hieroglyph_structure'>⟵</Link>
                <Link className={styles.arrow} to='/lesson2/exercises_l2'>⟶</Link>
            </div>
        </div>
    );
}

export default HieroglyphsTableL2;