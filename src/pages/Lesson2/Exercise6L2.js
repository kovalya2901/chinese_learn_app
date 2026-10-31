import { useState } from 'react';
import styles from '../Styles.module.css';
import { AudioPlayer } from "react-audio-play";
import lesson02_16 from '../../audio/lesson02_16.mp3';

let question = [
    { point: '01', right_answer: '4 тон', answer: '1 тон' },
    { point: '02', right_answer: '1 тон', answer: '1 тон' },
    { point: '03', right_answer: '2 тон', answer: '1 тон' },
    { point: '04', right_answer: '4 тон', answer: '1 тон' },
    { point: '05', right_answer: '1 тон', answer: '1 тон' },
    { point: '06', right_answer: '2 тон', answer: '1 тон' },
    { point: '07', right_answer: '4 тон', answer: '1 тон' },
    { point: '08', right_answer: '2 тон', answer: '1 тон' },
    { point: '09', right_answer: '4 тон', answer: '1 тон' },
    { point: '10', right_answer: '3 тон', answer: '1 тон' },

    { point: '11', right_answer: '2 тон', answer: '1 тон' },
    { point: '12', right_answer: '1 тон', answer: '1 тон' },
    
    { point: '21', right_answer: '3 тон', answer: '1 тон' },
    { point: '22', right_answer: '1 тон', answer: '1 тон' },
    
    { point: '31', right_answer: '2 тон', answer: '1 тон' },
    { point: '32', right_answer: '3 тон', answer: '1 тон' },
    
    { point: '41', right_answer: '3 тон', answer: '1 тон' },
    { point: '42', right_answer: '4 тон', answer: '1 тон' },
    
    { point: '51', right_answer: '1 тон', answer: '1 тон' },
    { point: '52', right_answer: '3 тон', answer: '1 тон' },
    
    { point: '61', right_answer: '3 тон', answer: '1 тон' },
    { point: '62', right_answer: '2 тон', answer: '1 тон' },
    
    { point: '71', right_answer: '2 тон', answer: '1 тон' },
    { point: '72', right_answer: '4 тон', answer: '1 тон' },
    
    { point: '81', right_answer: '2 тон', answer: '1 тон' },
    { point: '82', right_answer: '3 тон', answer: '1 тон' },
    
    { point: '91', right_answer: '2 тон', answer: '1 тон' },
    { point: '92', right_answer: '4 тон', answer: '1 тон' },
    
    { point: '101', right_answer: '4 тон', answer: '1 тон' },
    { point: '102', right_answer: '1 тон', answer: '1 тон' },
];

const Exercise6L2 = () => {
    const tones = ['1 тон', '2 тон', '3 тон', '4 тон'];
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');
    const [value4, setValue4] = useState('');
    const [value5, setValue5] = useState('');
    const [value6, setValue6] = useState('');
    const [value7, setValue7] = useState('');
    const [value8, setValue8] = useState('');
    const [value9, setValue9] = useState('');
    const [value10, setValue10] = useState('');
    const [value11, setValue11] = useState('');
    const [value12, setValue12] = useState('');
    const [value13, setValue13] = useState('');
    const [value14, setValue14] = useState('');
    const [value15, setValue15] = useState('');
    const [value16, setValue16] = useState('');
    const [value17, setValue17] = useState('');
    const [value18, setValue18] = useState('');
    const [value19, setValue19] = useState('');
    const [value20, setValue20] = useState('');
    const [value21, setValue21] = useState('');
    const [value22, setValue22] = useState('');
    const [value23, setValue23] = useState('');
    const [value24, setValue24] = useState('');
    const [value25, setValue25] = useState('');
    const [value26, setValue26] = useState('');
    const [value27, setValue27] = useState('');
    const [value28, setValue28] = useState('');
    const [value29, setValue29] = useState('');
    const [value30, setValue30] = useState('');
    const [result, setResult] = useState('');

    const options = tones.map((tone, index) => {
        return <option key={index}>{tone}</option>;
    });

    function checkExercise() {
        let k = 1;
        for (let elem of question) {
            if (elem.answer === elem.right_answer) k *= 1;
            else {
                k *= 0;
                break;
            }
        }

        if (k === 1) setResult('Всё верно!');
        else setResult('Не все ответы верны. Попробуйте ответить еще раз!');
    }

    function test() {
        for(let elem of question) {
            console.log(elem.point + ": " + elem.answer + ". " + elem.right_answer);
        }
    }

    return (
        <div>
            <p>
                <b>
                    6. 听下面的音节, 标上声调 Прослушайте звукозапись, поставьте тоны:
                </b>
            </p>
            <AudioPlayer src={lesson02_16} />
            <h4>A</h4>
            <ol>
                <li>
                    mi
                    <select className={styles.style_for_select} value={value1} onChange={event => {
                        question[0].answer = event.target.value;
                        setValue1(event.target.value);
                    }}>
                        {options}
                    </select>
                </li>
                <li>
                    la
                    <select className={styles.style_for_select} value={value2} onChange={event => {
                        question[1].answer = event.target.value;
                        setValue2(event.target.value);
                    }}>
                        {options}
                    </select>
                </li>
                <li>
                    ni
                    <select className={styles.style_for_select} value={value3} onChange={event => {
                        question[2].answer = event.target.value;
                        setValue3(event.target.value);
                    }}>
                        {options}
                    </select>
                </li>
                <li>
                    mu
                    <select className={styles.style_for_select} value={value4} onChange={event => {
                        question[3].answer = event.target.value;
                        setValue4(event.target.value);
                    }}>
                        {options}
                    </select>
                </li>
                <li>
                    fu
                    <select className={styles.style_for_select} value={value5} onChange={event => {
                        question[4].answer = event.target.value;
                        setValue5(event.target.value);
                    }}>
                        {options}
                    </select>
                </li>
                <li>
                    nu
                    <select className={styles.style_for_select} value={value6} onChange={event => {
                        question[5].answer = event.target.value;
                        setValue6(event.target.value);
                    }}>
                        {options}
                    </select>
                </li>
                <li>
                    le
                    <select className={styles.style_for_select} value={value7} onChange={event => {
                        question[6].answer = event.target.value;
                        setValue7(event.target.value);
                    }}>
                        {options}
                    </select>
                </li>
                <li>
                    lü
                    <select className={styles.style_for_select} value={value8} onChange={event => {
                        question[7].answer = event.target.value;
                        setValue8(event.target.value);
                    }}>
                        {options}
                    </select>
                </li>
                <li>
                    te
                    <select className={styles.style_for_select} value={value9} onChange={event => {
                        question[8].answer = event.target.value;
                        setValue9(event.target.value);
                    }}>
                        {options}
                    </select>
                </li>
                <li>
                    ka
                    <select className={styles.style_for_select} value={value10} onChange={event => {
                        question[9].answer = event.target.value;
                        setValue10(event.target.value);
                    }}>
                        {options}
                    </select>
                </li>
            </ol>
            <h4>B</h4>
            <ol>
                <li>
                    fa
                    <select className={styles.style_for_select} value={value11} onChange={event => {
                        question[10].answer = event.target.value;
                        setValue11(event.target.value);
                    }}>
                        {options}
                    </select>
                    — fa
                    <select className={styles.style_for_select} value={value12} onChange={event => {
                        question[11].answer = event.target.value;
                        setValue12(event.target.value);
                    }}>
                        {options}
                    </select>
                </li>
                <li>
                    li
                    <select className={styles.style_for_select} value={value13} onChange={event => {
                        question[12].answer = event.target.value;
                        setValue13(event.target.value);
                    }}>
                        {options}
                    </select>
                    — li
                    <select className={styles.style_for_select} value={value14} onChange={event => {
                        question[13].answer = event.target.value;
                        setValue14(event.target.value);
                    }}>
                        {options}
                    </select>
                </li>
                <li>
                    ni
                    <select className={styles.style_for_select} value={value15} onChange={event => {
                        question[14].answer = event.target.value;
                        setValue15(event.target.value);
                    }}>
                        {options}
                    </select>
                    — ni
                    <select className={styles.style_for_select} value={value16} onChange={event => {
                        question[15].answer = event.target.value;
                        setValue16(event.target.value);
                    }}>
                        {options}
                    </select>
                </li>
                <li>
                    wu
                    <select className={styles.style_for_select} value={value17} onChange={event => {
                        question[16].answer = event.target.value;
                        setValue17(event.target.value);
                    }}>
                        {options}
                    </select>
                    — wu
                    <select className={styles.style_for_select} value={value18} onChange={event => {
                        question[17].answer = event.target.value;
                        setValue18(event.target.value);
                    }}>
                        {options}
                    </select>
                </li>
                <li>
                    fu
                    <select className={styles.style_for_select} value={value19} onChange={event => {
                        question[18].answer = event.target.value;
                        setValue19(event.target.value);
                    }}>
                        {options}
                    </select>
                    — fu
                    <select className={styles.style_for_select} value={value20} onChange={event => {
                        question[19].answer = event.target.value;
                        setValue20(event.target.value);
                    }}>
                        {options}
                    </select>
                </li>
                <li>
                    yu
                    <select className={styles.style_for_select} value={value21} onChange={event => {
                        question[20].answer = event.target.value;
                        setValue21(event.target.value);
                    }}>
                        {options}
                    </select>
                    — yu
                    <select className={styles.style_for_select} value={value22} onChange={event => {
                        question[21].answer = event.target.value;
                        setValue22(event.target.value);
                    }}>
                        {options}
                    </select>
                </li>
                <li>
                    lu
                    <select className={styles.style_for_select} value={value23} onChange={event => {
                        question[22].answer = event.target.value;
                        setValue23(event.target.value);
                    }}>
                        {options}
                    </select>
                    — lu
                    <select className={styles.style_for_select} value={value24} onChange={event => {
                        question[23].answer = event.target.value;
                        setValue24(event.target.value);
                    }}>
                        {options}
                    </select>
                </li>
                <li>
                    lü
                    <select className={styles.style_for_select} value={value25} onChange={event => {
                        question[24].answer = event.target.value;
                        setValue25(event.target.value);
                    }}>
                        {options}
                    </select>
                    — lü
                    <select className={styles.style_for_select} value={value26} onChange={event => {
                        question[25].answer = event.target.value;
                        setValue26(event.target.value);
                    }}>
                        {options}
                    </select>
                </li>
                <li>
                    de
                    <select className={styles.style_for_select} value={value27} onChange={event => {
                        question[26].answer = event.target.value;
                        setValue27(event.target.value);
                    }}>
                        {options}
                    </select>
                    — te
                    <select className={styles.style_for_select} value={value28} onChange={event => {
                        question[27].answer = event.target.value;
                        setValue28(event.target.value);
                    }}>
                        {options}
                    </select>
                </li>
                <li>
                    yi
                    <select className={styles.style_for_select} value={value29} onChange={event => {
                        question[28].answer = event.target.value;
                        setValue29(event.target.value);
                    }}>
                        {options}
                    </select>
                    — yi
                    <select className={styles.style_for_select} value={value30} onChange={event => {
                        question[29].answer = event.target.value;
                        setValue30(event.target.value);
                    }}>
                        {options}
                    </select>
                </li>
            </ol>
            <button className={styles.btn_check} onClick={checkExercise}>Проверить</button>
            <span style={result === 'Всё верно!' ? { color: 'green' } : { color: 'red' }}> {result}</span>
        </div>
    );
}

export default Exercise6L2;