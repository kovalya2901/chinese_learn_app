import { Link } from "react-router-dom";
import styles from '../Styles.module.css';

function NavigationLesson1() {
    return (
        <nav>
            <h1>第一课</h1>
            <h1>Урок 1</h1>
            <div style={{display: 'flex', gap: '30px'}}>
                <div>
                    <h2>一，语音 Фонетика</h2>
                    <ul className={styles.nav_lesson_style}>
                        <li>
                            <Link className={styles.style_link} to='/lesson1/speech_apparatus'>
                                发音器官图 Схема строения речевого аппарата
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.style_link} to='/lesson1/chinese_language'>
                                汉语 Китайский язык
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.style_link} to='/lesson1/pinyin'>
                                汉语拼音字母 Китайский фонетический алфавит пиньинь
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.style_link} to='/lesson1/chinese_structure'>
                                音节 Структура китайского языка
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.style_link} to='/lesson1/initials_l1'>
                                声母 Инициали: b, p, d, t, g, k, h
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.style_link} to='/lesson1/finals_l1'>
                                韵母 Финали: a, o, e
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.style_link} to='/lesson1/tones_l1'>
                                声调 Тоны
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2>二，汉字 Иероглифика</h2>
                    <ul className={styles.nav_lesson_style}>
                        <li>
                            <Link className={styles.style_link} to='/lesson1/hieroglyphic_characters'>
                                汉字的笔画 Иероглифические черты
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.style_link} to='/lesson1/writing_hcl1'>
                                书写笔画注意事项 Основные принципы написания иероглифических черт
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.style_link} to='/lesson1/order_writing_hcl1'>
                                笔顺知识 Порядок написания черт
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2>
                        <Link className={styles.style_link} to='/lesson1/exercises_l1'>
                            三，练习 Упражнения
                        </Link>
                    </h2>
                </div>
            </div>
        </nav>
    );
}

export default NavigationLesson1;