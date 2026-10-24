import imageLesson1 from '../../images/image_lesson1.jpg';
import { Link } from 'react-router-dom';
import styles from '../Styles.module.css';

const SpeechApparatus = () => {
    return (
        <div className={styles.blog} style={{textAlign: 'center'}}>
            <h3>发音器官图 Схема строения речевого аппарата</h3>
            <img alt="" src={imageLesson1} />
            <ol style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', justifyContent: 'center' }}>
                <li>Носовая полость</li>
                <li>Ротовая полость</li>
                <li>Гортань</li>
                <li>Альвеолы</li>
                <li>Твёрдое нёбо / Среднее нёбо</li>
                <li>Мягкое нёбо / Заднее нёбо</li>
                <li>Язычок / Увула</li>
                <li>Кончик языка</li>
                <li>Средняя часть языка</li>
                <li>Задняя часть языка</li>
                <li>Верхняя губа</li>
                <li>Верхние зубы</li>
                <li>Нижняя губа</li>
                <li>Нижние зубы</li>
                <li>Глотка</li>
                <li>Голосовые связки</li>
                <li>Дыхательное горло (Трахея)</li>
            </ol>
            <div className={styles.next_back}>
                <Link className={styles.arrow} to='/lesson1/chinese_language'>⟶</Link>
            </div>
        </div>
    );
}

export default SpeechApparatus;