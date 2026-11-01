import { Routes, Route } from "react-router-dom";
import NavigationLesson1 from "./NavigationLesson1";
import SpeechApparatus from './SpeechApparatus';
import ChineseLanguage from './ChineseLanguage';
import Pinyin from './Pinyin';
import ChineseStructure from './ChineseStructure';
import InitialsL1 from './InitialsL1';
import FinalsL1 from './FinalsL1';
import TonesL1 from "./TonesL1";
import HieroglyphicCharactersL1 from './HieroglyphicCharactersL1';
import WritingHCL1 from "./WritingHCL1";
import OrderWritingHCL1 from "./OrderWritingHCL1";
import ExercisesL1 from './ExercisesL1';

function Lesson1() {
    return (
        <div>
            <div>
                <Routes>
                    <Route index element={<NavigationLesson1 />} />
                    <Route path='speech_apparatus' element={<SpeechApparatus />} />
                    <Route path='chinese_language' element={<ChineseLanguage />} />
                    <Route path='pinyin' element={<Pinyin />} />
                    <Route path='chinese_structure' element={<ChineseStructure />} />
                    <Route path='initials_l1' element={<InitialsL1 />} />
                    <Route path='finals_l1' element={<FinalsL1 />} />
                    <Route path='tones_l1' element={<TonesL1 />} />
                    <Route path='hieroglyphic_characters' element={<HieroglyphicCharactersL1 />} />
                    <Route path='writing_hcl1' element={<WritingHCL1 />} />
                    <Route path='order_writing_hcl1' element={<OrderWritingHCL1 />} />
                    <Route path='exercises_l1' element={<ExercisesL1 />} />
                </Routes>
            </div>
        </div>
    );
}

export default Lesson1;