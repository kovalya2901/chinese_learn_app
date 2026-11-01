import { Link } from "react-router-dom";
import styles from './Navigation.module.css';

function Navigation() {
    return(
        <nav>
            <ul id={styles.settings_ul}>
                <li>
                    <Link className={styles.style_link} to='/lesson1'>第一课 Урок 1</Link>
                </li>
                <li>
                    <Link className={styles.style_link} to='/lesson2'>第二课 Урок 2</Link>
                </li>
                <li>
                    <Link className={styles.style_link} to='/lesson3'>第三课 Урок 3</Link>
                </li>
                <li>
                    <Link className={styles.style_link} to='/lesson2'>第四课 Урок 4</Link>
                </li>
                <li>
                    <Link className={styles.style_link} to='/lesson2'>第五课 Урок 5</Link>
                </li>
                <li>
                    <Link className={styles.style_link} to='/lesson2'>第六课 Урок 6</Link>
                </li>
                <li>
                    <Link className={styles.style_link} to='/lesson2'>第七课 Урок 7</Link>
                </li>
                <li>
                    <Link className={styles.style_link} to='/lesson2'>第八课 Урок 8</Link>
                </li>
                <li>
                    <Link className={styles.style_link} to='/lesson2'>第九课 Урок 9</Link>
                </li>
                <li>
                    <Link className={styles.style_link} to='/lesson2'>第十课 Урок 10</Link>
                </li>
                <li>
                    <Link className={styles.style_link} to='/lesson2'>第十一课 Урок 11</Link>
                </li>
                <li>
                    <Link className={styles.style_link} to='/lesson2'>第十二课 Урок 12</Link>
                </li>
                <li>
                    <Link className={styles.style_link} to='/lesson2'>第十三课 Урок 13</Link>
                </li>
                <li>
                    <Link className={styles.style_link} to='/lesson2'>第十四课 Урок 14</Link>
                </li>
                <li>
                    <Link className={styles.style_link} to='/lesson2'>第十五课 Урок 15</Link>
                </li>
            </ul>
        </nav>
    );

}

export default Navigation;