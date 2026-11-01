import { Routes, Route } from "react-router-dom";
import NavigationLesson2 from "./NavigationLesson2";
import FinalsL2 from './FinalsL2';
import HieroglyphicCharactersL2 from './HieroglyphicCharactersL2';
import HieroglyphsTableL2 from './HieroglyphsTableL2';
import HieroglyphStructureL2 from './HieroglyphStructureL2';
import InitialsL2 from './InitialsL2';
import OrderWritingHCL2 from './OrderWritingHCL2';
import WritingHCL2 from './WritingHCL2';
import WritingSyllablesInPinyinL2 from './WritingSyllablesInPinyinL2';
import ExercisesL2 from './ExercisesL2';

function Lesson2() {
    return (
        <div>
            <Routes>
                <Route index element={<NavigationLesson2 />}/>
                <Route path='initials_l2' element={<InitialsL2 />} />
                <Route path='finals_l2' element={<FinalsL2 />} />
                <Route path='writing_syllables_in_pinyin_l2' element={<WritingSyllablesInPinyinL2 />} />
                <Route path='hieroglyphic_characters_l2' element={<HieroglyphicCharactersL2 />} />
                <Route path='writing_hcl2' element={<WritingHCL2 />} />
                <Route path='order_writing_hcl2' element={<OrderWritingHCL2 />} />
                <Route path='hieroglyph_structure_L2' element={<HieroglyphStructureL2 />} />
                <Route path='hieroglyphs_table_l2' element={<HieroglyphsTableL2 />} />
                <Route path='exercises_l2' element={<ExercisesL2 />} />
            </Routes>
        </div>
    );
}

export default Lesson2;