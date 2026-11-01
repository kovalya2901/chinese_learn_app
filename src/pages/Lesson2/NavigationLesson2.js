import { Link } from "react-router-dom";
import styles from '../Styles.module.css';

const NavigationLesson2 = () => {
    return (
        <nav>
            <h1>第二课</h1>
            <h1>Урок 2</h1>
            <div style={{display: 'flex', gap: '30px'}}>
                <div>
                    <h2>一，语音 Фонетика</h2>
                    <ul className={styles.nav_lesson_style}>
                        <li>
                            <Link className={styles.style_link} to='/lesson2/initials_l2'>
                                声母 Инициали: m, f, n, l
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.style_link} to='/lesson2/finals_l2'>
                                韵母 Финали: i, u, ü
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.style_link} to='/lesson2/writing_syllables_in_pinyin_l2'>
                                音节的拼写规则 Правила записи слогов в пиньинь и некоторые особенности
                                их произнесения
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2>二，汉字 Иероглифика</h2>
                    <ul className={styles.nav_lesson_style}>
                        <li>
                            <Link className={styles.style_link} to='/lesson2/hieroglyphic_characters_l2'>
                                汉字的笔画 Иероглифические черты
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.style_link} to='/lesson2/writing_hcl2'>
                                书写笔画注意事项 Основные принципы написания иероглифических черт
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.style_link} to='/lesson2/order_writing_hcl2'>
                                笔顺知识 Порядок написания черт
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.style_link} to='/lesson2/hieroglyph_structure_l2'>
                                汉字结构 Структура иероглифа
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.style_link} to='/lesson2/hieroglyphs_table_l2'>
                                汉字表 Таблица иероглифов
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2>
                        <Link className={styles.style_link} to='/lesson2/exercises_l2'>
                            三，练习 Упражнения
                        </Link>
                    </h2>
                </div>
            </div>
        </nav>
    );
}

export default NavigationLesson2;