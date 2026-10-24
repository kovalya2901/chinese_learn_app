import { Link } from "react-router-dom";
import styles from '../Styles.module.css';

const FinalsL1 = () => {
    return (
        <div className={styles.blog}>
            <h3>韵母 Финали: a, o, e</h3>
            <h4>a</h4>
            <p>
                Гласный <b>a</b> напоминает русский звук <b>а</b>, но при его произнесении
                язык больше сдвинут назад. Китайский <b>a</b> является более открытым и
                для его правильной артикуляции необходимо шире открывать рот.
            </p>
            <h4>o</h4>
            <p>
                Огубленный гласный <b>o</b> больше сдвинут назад, чем русский <b>о</b>.
            </p>
            <h4>e</h4>
            <p>
                Это неогубленный гласный. Он совпадает с китайским <b>o</b> по месту
                образования, отличаясь от последнего работой губ:
                гласный <b>o</b> произносится с округленными губами, а <b>e</b> — со
                слегка растянутыми.
            </p>
            <p>
                Китайский гласный <b>e</b> значительно отличается от любого варианта
                русских гласных <b>э</b> и <b>о</b>: язык должен быть с усилием
                оттянут назад.
            </p>
            <div className={styles.next_back}>
                <Link className={styles.arrow} to='/lesson1/initials_l1'>⟵</Link>
                <Link className={styles.arrow} to='/lesson1/tones'>⟶</Link>
            </div>
        </div>
    );
}

export default FinalsL1;