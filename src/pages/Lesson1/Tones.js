import styles from '../Styles.module.css';
import { Link } from "react-router-dom";
import image2Lesson1 from '../../images/image2_lesson1.jpg';
import image3Lesson1 from '../../images/image3_lesson1.jpg';
import image4Lesson1 from '../../images/image4_lesson1.jpg';
import image5Lesson1 from '../../images/image5_lesson1.jpg';

const Tones = () => {
    return (
        <div>
            <h3>声调 Тоны</h3>
            <p>
                <b>Тон</b> — это мелодический контур слога, выполняющий смыслоразличительную
                функцию. В общенациональном китайском языке путунхуа имеется четыре тона:
            </p>
            <div id={styles.grid4x4}>
                <div className={styles.grid4x4elem}>
                    <h4>Ровный (первый) тон</h4>
                    <p>一声 (55) ā</p>
                    <img alt="" className={styles.grid4x4img} src={image2Lesson1} />
                </div>
                <div className={styles.grid4x4elem}>
                    <h4>Восходящий (второй) тон</h4>
                    <p>二声 (35) á</p>
                    <img alt="" className={styles.grid4x4img} src={image3Lesson1} />
                </div>
                <div className={styles.grid4x4elem}>
                    <h4>Нисходяще-восходящий (третий) тон</h4>
                    <p>三声 (214) ǎ</p>
                    <img alt="" className={styles.grid4x4img} src={image4Lesson1} />
                </div>
                <div className={styles.grid4x4elem}>
                    <h4>Падающий (четвертый) тон</h4>
                    <p>四声 (51) à</p>
                    <img alt="" className={styles.grid4x4img} src={image5Lesson1} />
                </div>
            </div>
            <p>
                Смыслоразличительная функция тона заключается в том, что один и тот же
                слог, произнесенный с разными тонами, имеет разные значения:
            </p>
            <table>
                <tbody>
                    <tr>
                        <td>bā 八 'восемь'</td>
                        <td>bá 拔 'выдергивать'</td>
                    </tr>
                    <tr>
                        <td>bǎ 靶 'мишень'</td>
                        <td>bà 爸 'отец'</td>
                    </tr>
                </tbody>
            </table>
            <p>
                Обратите внимание на следующие особенности тонов в путунххуа:
            </p>
            <ol>
                <li>
                    Первый тон произносится высоко и ровно, при этом его высота определяется
                    естественным тембром голоса.
                </li>
                <li>
                    Второй тон поднимается до уровня первого и напоминает интонацию в
                    вопросительных предложениях уточняющего типа, например, таких как
                    "Да?", "Что?" и т.п. Интенсивность тона постепенно увеличивается
                    к концу слога.
                </li>
                <li>
                    При произнесении третьего тона самой важной является нижняя ровная часть
                    мелодического контура, при этом не следует подчеркивать восходящую часть
                    тона.
                </li>
                <li>
                    Четвертый тон резко падает вниз с высоты первого тона до самого
                    низкого уровня речевого голоса.
                </li>
            </ol>
            <div className={styles.next_back}>
                <Link className={styles.arrow} to='/lesson1/finals_l1'>⟵</Link>
                <Link className={styles.arrow} to='/lesson1/hieroglyphic_characters'>⟶</Link>
            </div>
        </div>
    );
}

export default Tones;