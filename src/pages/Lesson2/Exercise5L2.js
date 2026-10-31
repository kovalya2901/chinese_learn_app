import { useState } from 'react';
import styles from '../Styles.module.css';
import { AudioPlayer } from "react-audio-play";
import lesson02_15 from '../../audio/lesson02_15.mp3';

let question = [
    {point: '01', right_answer: '1', answer: ''},
    {point: '02', right_answer: '1', answer: ''},
    {point: '03', right_answer: '2', answer: ''},
    {point: '04', right_answer: '2', answer: ''},
    {point: '05', right_answer: '1', answer: ''},
    {point: '06', right_answer: '1', answer: ''},
    {point: '07', right_answer: '1', answer: ''},
    {point: '08', right_answer: '1', answer: ''},
    {point: '09', right_answer: '2', answer: ''},
    {point: '10', right_answer: '1', answer: ''},
];

const Exercise5L2 = () => {
    const [value1, setValue1] = useState(1);
    const [value2, setValue2] = useState(1);
    const [value3, setValue3] = useState(1);
    const [value4, setValue4] = useState(1);
    const [value5, setValue5] = useState(1);
    const [value6, setValue6] = useState(1);
    const [value7, setValue7] = useState(1);
    const [value8, setValue8] = useState(1);
    const [value9, setValue9] = useState(1);
    const [value10, setValue10] = useState(1);
    const [result, setResult] = useState('');

    function checkExercise() {
        let k = 1;
        for (let elem of question) {
            if(elem.answer === elem.right_answer) k *= 1;
            else {
                k *= 0;
                break;
            }
        }

        if(k === 1) setResult('Всё верно!');
        else setResult('Не все ответы верны. Попробуйте ответить еще раз!');
    }

    return (
        <div>
            <p>
                <b>
                    5. 划出听到的音节 Прослушайте звукозапись, отметьте услышанные слоги:
                </b>
            </p>
            <AudioPlayer src={lesson02_15} />
            <ol>
                <li>
                    <input
                        type='radio'
                        name='radio1'
                        value='1'
                        checked={value1 === '1' ? true : false}
                        onChange={event => {
                            question[0].answer = event.target.value;
                            setValue1(event.target.value);
                        }}
                    />
                    nī —
                    <input
                        type='radio'
                        name='radio1'
                        value='2'
                        checked={value1 === '2' ? true : false}
                        onChange={event => {
                            question[0].answer = event.target.value;
                            setValue1(event.target.value);
                        }}
                    />
                    nǐ
                </li>
                <li>
                    <input
                        type='radio'
                        name='radio2'
                        value='1'
                        checked={value2 === '1' ? true : false}
                        onChange={event => {
                            question[1].answer = event.target.value;
                            setValue2(event.target.value);
                        }}
                    />
                    nì —
                    <input
                        type='radio'
                        name='radio2'
                        value='2'
                        checked={value2 === '2' ? true : false}
                        onChange={event => {
                            question[1].answer = event.target.value;
                            setValue2(event.target.value);
                        }}
                    />
                    lì
                </li>
                <li>
                    <input
                        type='radio'
                        name='radio3'
                        value='1'
                        checked={value3 === '1' ? true : false}
                        onChange={event => {
                            question[2].answer = event.target.value;
                            setValue3(event.target.value);
                        }}
                    />
                    dì —
                    <input
                        type='radio'
                        name='radio3'
                        value='2'
                        checked={value3 === '2' ? true : false}
                        onChange={event => {
                            question[2].answer = event.target.value;
                            setValue3(event.target.value);
                        }}
                    />
                    tì
                </li>
                <li>
                    <input
                        type='radio'
                        name='radio4'
                        value='1'
                        checked={value4 === '1' ? true : false}
                        onChange={event => {
                            question[3].answer = event.target.value;
                            setValue4(event.target.value);
                        }}
                    />
                    mǔ —
                    <input
                        type='radio'
                        name='radio4'
                        value='2'
                        checked={value4 === '2' ? true : false}
                        onChange={event => {
                            question[3].answer = event.target.value;
                            setValue4(event.target.value);
                        }}
                    />
                    mù
                </li>
                <li>
                    <input
                        type='radio'
                        name='radio5'
                        value='1'
                        checked={value5 === '1' ? true : false}
                        onChange={event => {
                            question[4].answer = event.target.value;
                            setValue5(event.target.value);
                        }}
                    />
                    yǔ —
                    <input
                        type='radio'
                        name='radio5'
                        value='2'
                        checked={value5 === '2' ? true : false}
                        onChange={event => {
                            question[4].answer = event.target.value;
                            setValue5(event.target.value);
                        }}
                    />
                    yǐ
                </li>
                <li>
                    <input
                        type='radio'
                        name='radio6'
                        value='1'
                        checked={value6 === '1' ? true : false}
                        onChange={event => {
                            question[5].answer = event.target.value;
                            setValue6(event.target.value);
                        }}
                    />
                    yī —
                    <input
                        type='radio'
                        name='radio6'
                        value='2'
                        checked={value6 === '2' ? true : false}
                        onChange={event => {
                            question[5].answer = event.target.value;
                            setValue6(event.target.value);
                        }}
                    />
                    yí
                </li>
                <li>
                    <input
                        type='radio'
                        name='radio7'
                        value='1'
                        checked={value7 === '1' ? true : false}
                        onChange={event => {
                            question[6].answer = event.target.value;
                            setValue7(event.target.value);
                        }}
                    />
                    lǘ —
                    <input
                        type='radio'
                        name='radio7'
                        value='2'
                        checked={value7 === '2' ? true : false}
                        onChange={event => {
                            question[6].answer = event.target.value;
                            setValue7(event.target.value);
                        }}
                    />
                    lú
                </li>
                <li>
                    <input
                        type='radio'
                        name='radio8'
                        value='1'
                        checked={value8 === '1' ? true : false}
                        onChange={event => {
                            question[7].answer = event.target.value;
                            setValue8(event.target.value);
                        }}
                    />
                    nǚ —
                    <input
                        type='radio'
                        name='radio8'
                        value='2'
                        checked={value8 === '2' ? true : false}
                        onChange={event => {
                            question[7].answer = event.target.value;
                            setValue8(event.target.value);
                        }}
                    />
                    lǔ
                </li>
                <li>
                    <input
                        type='radio'
                        name='radio9'
                        value='1'
                        checked={value9 === '1' ? true : false}
                        onChange={event => {
                            question[8].answer = event.target.value;
                            setValue9(event.target.value);
                        }}
                    />
                    bú —
                    <input
                        type='radio'
                        name='radio9'
                        value='2'
                        checked={value9 === '2' ? true : false}
                        onChange={event => {
                            question[8].answer = event.target.value;
                            setValue9(event.target.value);
                        }}
                    />
                    pú
                </li>
                <li>
                    <input
                        type='radio'
                        name='radio10'
                        value='1'
                        checked={value10 === '1' ? true : false}
                        onChange={event => {
                            question[9].answer = event.target.value;
                            setValue10(event.target.value);
                        }}
                    />
                    lǚ —
                    <input
                        type='radio'
                        name='radio10'
                        value='2'
                        checked={value10 === '2' ? true : false}
                        onChange={event => {
                            question[9].answer = event.target.value;
                            setValue10(event.target.value);
                        }}
                    />
                    nǚ
                </li>
            </ol>
            <button className={styles.btn_check} onClick={checkExercise}>Проверить</button>
            <span style={result === 'Всё верно!' ? {color: 'green'} : {color: 'red'}}> {result}</span>
        </div>
    );
}

export default Exercise5L2;