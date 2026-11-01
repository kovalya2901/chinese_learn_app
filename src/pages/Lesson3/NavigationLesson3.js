import { Link } from "react-router-dom";
import styles from '../Styles.module.css';

const NavigationLesson3 = () => {
    return (
        <nav>
            <h1>第三课</h1>
            <h1>Урок 3</h1>
            <div style={{ display: 'flex', gap: '30px' }}>
                <div>
                    <h2>一，课文 Текст</h2>
                    <ul className={styles.nav_lesson_style}>
                        <li>
                            <Link className={styles.style_link} to='/lesson3/text_l3'>
                                课文 Текст
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.style_link} to='/lesson3/new_words_l3'>
                                新词语 Новые слова
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.style_link} to='/lesson3/comments_l3'>
                                注释 Комментарии
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2>二， 语音 Фонетика</h2>
                    <ul className={styles.nav_lesson_style}>
                        <li>
                            <Link className={styles.style_link} to='/lesson3/chinese_syllable_structure_l3'>
                                音节 Структура китайского слога
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.style_link} to='/lesson3/finals_l3'>
                                韵母 Финали: ai, ei, ao, ou, uo, an, en, in
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.style_link} to='/lesson3/writing_syllables_in_pinyin_l3'>
                                音节的拼写规则 Правила записи слогов в пиньинь
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.style_link} to='/lesson3/tones_l3'>
                                声调 Тоны
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2>三，汉字 Иероглифика</h2>
                    <ul className={styles.nav_lesson_style}>
                        <li>
                            <Link className={styles.style_link} to='/lesson3/hieroglyphic_characters_l3'>
                                汉字的笔画 Иероглифические черты
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.style_link} to='/lesson3/ways_of_combining_traits_l3'>
                                笔画组合关系 Способы комбинации черт в иероглифе
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.style_link} to='/lesson3/writing_hcl3'>
                                书写笔画注意事项 Основные принципы написания иероглифических черт
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.style_link} to='/lesson3/graphic_structure_types_l3'>
                                汉字结构及类型 Типы графической структуры иероглифов
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.style_link} to='/lesson3/hieroglyphs_table_l3'>
                                汉字表 Таблица иероглифов
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.style_link} to='/lesson3/writing_graphemes_options_l3'>
                                篇旁的变体 Варианты написания графем
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2>
                        <Link className={styles.style_link} to='/lesson3/exercises_l3'>
                            四，练习 Упражнения
                        </Link>
                    </h2>
                </div>
            </div>
        </nav>
    );
}

export default NavigationLesson3;