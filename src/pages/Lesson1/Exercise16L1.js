import { useState } from 'react';
import styles from '../Styles.module.css';
import { AudioPlayer } from "react-audio-play";
import lesson01_116 from '../../audio/lesson01_116.mp3';

let question = [
    {point: '01', right_answer: 'Второй тон', answer: 'Первый тон'},
    {point: '02', right_answer: 'Второй тон', answer: 'Первый тон'},
    {point: '03', right_answer: 'Четвертый тон', answer: 'Первый тон'},
    {point: '04', right_answer: 'Второй тон', answer: 'Первый тон'},
    {point: '05', right_answer: 'Четвертый тон', answer: 'Первый тон'},
    {point: '06', right_answer: 'Первый тон', answer: 'Первый тон'},
    {point: '07', right_answer: 'Четвертый тон', answer: 'Первый тон'},
    {point: '08', right_answer: 'Первый тон', answer: 'Первый тон'},
    {point: '09', right_answer: 'Первый тон', answer: 'Первый тон'},
    {point: '10', right_answer: 'Третий тон', answer: 'Первый тон'},
];

const Exercise16L1 = () => {
    const tones = ['Первый тон', 'Второй тон', 'Третий тон', 'Четвертый тон'];
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
    const [result, setResult] = useState('');

    const options = tones.map((tone, index) => {
        return <option key={index}>{tone}</option>;
    });

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
                    6. 听下面的音节, 标上声调 Прослушайте звукозапись, поставьте тоны:
                </b>
            </p>
            <AudioPlayer src={lesson01_116} />
            <ol>
                <li>
                    bo
                </li>
                <select value={value1} onChange={event => {
                    
                    setValue1(event.target.value);
                    question[0].answer = event.target.value;
                }}>
                    {options}
                </select>
                <li>ha</li>
                <select value={value2} onChange={event => {
                    question[1].answer = event.target.value;
                    setValue2(event.target.value);
                }}>
                    {options}
                </select>
                <li>po</li>
                <select value={value3} onChange={event => {
                    question[2].answer = event.target.value;
                    setValue3(event.target.value);
                }}>
                    {options}
                </select>
                <li>de</li>
                <select value={value4} onChange={event => {
                    question[3].answer = event.target.value;
                    setValue4(event.target.value);
                }}>
                    {options}
                </select>
                <li>da</li>
                <select value={value5} onChange={event => {
                    question[4].answer = event.target.value;
                    setValue5(event.target.value);
                }}>
                    {options}
                </select>
                <li>ta</li>
                <select value={value6} onChange={event => {
                    question[5].answer = event.target.value;
                    setValue6(event.target.value);
                }}>
                    {options}
                </select>
                <li>te</li>
                <select value={value7} onChange={event => {
                    question[6].answer = event.target.value;
                    setValue7(event.target.value);
                }}>
                    {options}
                </select>
                <li>bo</li>
                <select value={value8} onChange={event => {
                    question[7].answer = event.target.value;
                    setValue8(event.target.value);
                }}>
                    {options}
                </select>
                <li>ge</li>
                <select value={value9} onChange={event => {
                    question[8].answer = event.target.value;
                    setValue9(event.target.value);
                }}>
                    {options}
                </select>
                <li>ke</li>
                <select value={value10} onChange={event => {
                    question[9].answer = event.target.value;
                    setValue10(event.target.value);
                }}>
                    {options}
                </select>
            </ol>
            <button className={styles.btn_check} onClick={checkExercise}>Проверить</button>
            <span style={result === 'Всё верно!' ? {color: 'green'} : {color: 'red'}}> {result}</span>
        </div>
    );
}

export default Exercise16L1;