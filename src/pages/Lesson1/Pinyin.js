import { Link } from "react-router-dom";
import styles from '../Styles.module.css';

const Pinyin = () => {
    return (
        <div>
            <h3>汉语拼音字母 Китайский фонетический алфавит пиньинь</h3>
            <p>
                 В настоящее время в китайском языке для записи произношения используется 
                фонетический алфавит <b>пиньинь цзыму</b> (拼音字母 pīn yīn zìmǔ), сокращенно <b>пиньинь</b>. 
                Пиньинь  (дословно 'составленные вместе звуки') основан на 
                латинской графике. Он не является фонетической транскрипцией, это условная 
                запись произношения со своими правилами чтения.
            </p>
            <div className={styles.next_back}>
                <Link className={styles.arrow} to='/lesson1/chinese_language'>⟵</Link>
                <Link className={styles.arrow} to='/lesson1/chinese_structure'>⟶</Link>
            </div>
        </div>
    );
}

export default Pinyin;