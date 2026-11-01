import styles from '../Styles.module.css';
import { Link } from "react-router-dom";
import Exercise11L1 from "./Exercise11L1";
import Exercise12L1 from "./Exercise12L1";
import Exercise13L1 from "./Exercise13L1";
import Exercise14L1 from "./Exercise14L1";
import Exercise15L1 from "./Exercise15L1";
import Exercise16L1 from "./Exercise16L1";
import Exercise17L1 from "./Exercise17L1";
import Exercise18L1 from "./Exercise18L1";
import Exercise19L1 from "./Exercise19L1";

const ExercisesL1 = () => {
    return (
        <div>
            <h2>练习 Упражнения</h2>
            <Exercise11L1 />
            <Exercise12L1 />
            <Exercise13L1 />
            <Exercise14L1 />
            <Exercise15L1 />
            <Exercise16L1 />
            <Exercise17L1 />
            <Exercise18L1 />
            <Exercise19L1 />
            <div className={styles.next_back}>
                <Link className={styles.arrow} to='/lesson1/order_writing_hcl1'>⟵</Link>
            </div>
        </div>
    );
}

export default ExercisesL1;