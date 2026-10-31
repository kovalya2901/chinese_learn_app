import { Link } from 'react-router-dom';
import styles from '../Styles.module.css';

const ChineseLanguage = () => {
    return (
        <div>
            <h3>汉语 Китайский язык</h3>
            <p>
                Под "китайским языком" обычно понимают современный китайский литературный язык <b>путунхуа</b>, 
                основанный на произносительной и грамматической норме северных
                диалектов.
            </p>
            <div className={styles.next_back}>
                <Link className={styles.arrow} to='/lesson1/speech_apparatus'>⟵</Link>
                <Link className={styles.arrow} to='/lesson1/pinyin'>⟶</Link>
            </div>
        </div>
    );

}

export default ChineseLanguage;