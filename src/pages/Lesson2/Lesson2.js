import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import styles from '../Styles.module.css';
import NavigationLesson2 from "./NavigationLesson2";
import FinalsL2 from './FinalsL2';
import HieroglyphicCharactersL2 from './HieroglyphicCharactersL2';
import HieroglyphsTableL2 from './HieroglyphsTableL2';
import HieroglyphStructure from './HieroglyphStructure';
import InitialsL2 from './InitialsL2';
import OrderWritingHCL2 from './OrderWritingHCL2';
import WritingHCL2 from './WritingHCL2';
import WritingSyllablesInPinyin from './WritingSyllablesInPinyin';
import ExercisesL2 from './ExercisesL2';

function Lesson2() {
    return (
        <div>
            <Link className={styles.style_link} to='/'>Назад</Link>
            <div>
                <h1>第二课</h1>
                <h1>Урок 2</h1>
                <NavigationLesson2 />
            </div>
            <Routes>
                <Route path='initials_l2' element={<InitialsL2 />} />
                <Route path='finals_l2' element={<FinalsL2 />} />
                <Route path='writing_syllables_in_pinyin' element={<WritingSyllablesInPinyin />} />
                <Route path='hieroglyphic_characters_l2' element={<HieroglyphicCharactersL2 />} />
                <Route path='writing_hcl2' element={<WritingHCL2 />} />
                <Route path='order_writing_hcl2' element={<OrderWritingHCL2 />} />
                <Route path='hieroglyph_structure' element={<HieroglyphStructure />} />
                <Route path='hieroglyphs_table_l2' element={<HieroglyphsTableL2 />} />
                <Route path='exercises_l2' element={<ExercisesL2 />} />
            </Routes>
        </div>
    );
}

export default Lesson2;