import { Routes, Route } from "react-router-dom";
import NavigationLesson3 from './NavigationLesson3';
import TextL3 from './TextL3';
import NewWordsL3 from './NewWordsL3';
import CommentsL3 from './CommentsL3';
import ChineseSyllableStructureL3 from './ChineseSyllableStructureL3';
import FinalsL3 from './FinalsL3';
import WritingSyllablesInPinyinL3 from './WritingSyllablesInPinyinL3';
import TonesL3 from './TonesL3';
import HieroglyphicCharactersL3 from './HieroglyphicCharactersL3';
import WaysOfCombiningTraitsL3 from './WaysOfCombiningTraitsL3';
import WritingHCL3 from './WritingHCL3';
import GraphicStructureTypesL3 from './GraphicStructureTypesL3';
import HieroglyphsTableL3 from './HieroglyphsTableL3';
import WritingGraphemesOptionsL3 from './WritingGraphemesOptionsL3';
import ExercisesL3 from './ExercisesL3';


const Lesson3 = () => {
    return (
        <div>
            <Routes>
                <Route index element={<NavigationLesson3 />}/>
                <Route path='text_l3' element={<TextL3 />}/>
                <Route path='new_words_l3' element={<NewWordsL3 />}/>
                <Route path='comments_l3' element={<CommentsL3 />}/>
                <Route path='chinese_syllable_structure_l3' element={<ChineseSyllableStructureL3 />}/>
                <Route path='finals_l3' element={<FinalsL3 />}/>
                <Route path='writing_syllables_in_pinyin_l3' element={<WritingSyllablesInPinyinL3 />}/>
                <Route path='tones_l3' element={<TonesL3 />}/>
                <Route path='hieroglyphic_characters_l3' element={<HieroglyphicCharactersL3 />}/>
                <Route path='ways_of_combining_traits_l3' element={<WaysOfCombiningTraitsL3 />}/>
                <Route path='writing_hcl3' element={<WritingHCL3 />}/>
                <Route path='graphic_structure_types_l3' element={<GraphicStructureTypesL3 />}/>
                <Route path='hieroglyphs_table_l3' element={<HieroglyphsTableL3 />}/>
                <Route path='writing_graphemes_options_l3' element={<WritingGraphemesOptionsL3 />}/>
                <Route path='exercises_l3' element={<ExercisesL3 />}/>
            </Routes>
        </div>
    );
}

export default Lesson3;