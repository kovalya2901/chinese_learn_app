import styles from '../Styles.module.css';
import shu from '../../images/shu.jpg';
import dian from '../../images/dian.jpg';
import heng from '../../images/heng.jpg';
import pie from '../../images/pie.jpg';
import na from '../../images/na.jpg';
import ti from '../../images/ti.jpg';
import { Link } from "react-router-dom";

const HieroglyphicCharactersL1 = () => {
    return (
        <div>
            <h3>汉字的笔画 Иероглифические черты</h3>
            <p>
                На письме одному слогу, как правило, соответствует один иероглиф.
            </p>
            <p>
                Список наиболее употребительных иероглифов включает в себя всего лишь
                3,5 тысячи знаков.
            </p>
            <p>
                Любой китайский иероглиф представляет собой комбинацию иероглифических
                черт. Иероглифическая черта не имеет самостоятельного значения. Всего
                насчитывается 35 различных иероглифических черт, каждая из которых
                имеет свое название.
            </p>
            <p>
                Черты сочетаются друг с другом по определенным правилам. Правила
                комбинации черт включают в себя правила взаиморасположения черт и правила
                последовательности черт.
            </p>
            <p>
                Черты делятся на <b>основные</b> (простые) и <b>лигатуры</b> (сложные),
                являющиеся комбинацией нескольких основых. Ниже в таблице приведены шесть
                основных иероглифических черт.
            </p>
            <table>
                <colgroup>
                    <col style={{ width: '5%' }} />
                    <col style={{ width: '15%' }} />
                    <col style={{ width: '20%' }} />
                    <col style={{ width: '30%' }} />
                    <col style={{ width: '30%' }} />
                </colgroup>
                <tbody>
                    <tr>
                        <th>№</th>
                        <th>Черта</th>
                        <th>Китайское название и чтение</th>
                        <th>Русское название</th>
                        <th>Пример</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>
                            <img alt="" className={styles.hieroglyph} src={dian} />
                        </td>
                        <td>点 diǎn</td>
                        <td>Точка</td>
                        <td>
                            <div>卜 bǔ <i>гадать</i></div>
                            <div>门 mén <i>дверь</i></div>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>
                            <img alt="" className={styles.hieroglyph} src={heng} />
                        </td>
                        <td>横 héng</td>
                        <td>Горизонтальная черта</td>
                        <td>
                            <div>一 yī <i>один</i></div>
                            <div>三 sān <i>три</i></div>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>
                            <img alt="" className={styles.hieroglyph} src={shu} />
                        </td>
                        <td>竖 shù</td>
                        <td>Вертикальная черта</td>
                        <td>
                            <div>十 shí <i>десять</i></div>
                            <div>木 mù <i>дерево</i></div>
                        </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>
                            <img alt="" className={styles.hieroglyph} src={pie} />
                        </td>
                        <td>撇 piě</td>
                        <td>Откидная влево</td>
                        <td>
                            <div>人 rén <i>человек</i></div>
                            <div>大 dà <i>большой</i></div>
                        </td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>
                            <img alt="" className={styles.hieroglyph} src={na} />
                        </td>
                        <td>捺 nà</td>
                        <td>Откидная вправо</td>
                        <td>
                            <div>八 bā <i>восемь</i></div>
                            <div>天 tiān <i>небо</i></div>
                        </td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>
                            <img alt="" className={styles.hieroglyph} src={ti} />
                        </td>
                        <td>提 tí</td>
                        <td>Откидная вверх или восходящая</td>
                        <td>
                            <div>汉 hàn <i>Хань, ханьский</i></div>
                            <div>刁 diāo <i>хитрый</i></div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className={styles.next_back}>
                <Link className={styles.arrow} to='/lesson1/tones'>⟵</Link>
                <Link className={styles.arrow} to='/lesson1/writing_hcl1'>⟶</Link>
            </div>
        </div>
    );
}

export default HieroglyphicCharactersL1;