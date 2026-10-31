import { useState } from 'react';
import styles from '../Styles.module.css';
import { AudioPlayer } from "react-audio-play";
import lesson01_117 from '../../audio/lesson01_117.mp3';

const input_style = {width: '30px', margin: '0 5px'};

let question = [
    {point: '01', right_answer: 'p', answer: ''},
    {point: '02', right_answer: 'b', answer: ''},
    {point: '03', right_answer: 'd', answer: ''},
    {point: '04', right_answer: 't', answer: ''},
    {point: '05', right_answer: 'k', answer: ''},
    {point: '06', right_answer: 'g', answer: ''},
    {point: '07', right_answer: 'h', answer: ''},
    {point: '08', right_answer: 'p', answer: ''},
    {point: '09', right_answer: 'b', answer: ''},
    {point: '10', right_answer: 'k', answer: ''},
];

const Exercise17L1 = () => {
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
                    7. 听下面的音节, 标上声母 Прослушайте звукозапись, вставьте инициали:
                </b>
            </p>
            <AudioPlayer src={lesson01_117} />
            <ol>
                <li>
                    <input
                        style={input_style}
                        maxLength={1}
                        value={value1}
                        onChange={event => {
                            setValue1(event.target.value);
                            question[0].answer = event.target.value;
                        }} />
                    ā
                </li>
                <li>
                    <input
                        style={input_style}
                        maxLength={1}
                        value={value2}
                        onChange={event => {
                            setValue2(event.target.value);
                            question[1].answer = event.target.value;
                        }} />
                    à
                </li>
                <li>
                    <input
                        style={input_style}
                        maxLength={1}
                        value={value3}
                        onChange={event => {
                            setValue3(event.target.value);
                            question[2].answer = event.target.value;
                        }} />
                    é
                </li>
                <li>
                    <input
                        style={input_style}
                        maxLength={1}
                        value={value4}
                        onChange={event => {
                            setValue4(event.target.value);
                            question[3].answer = event.target.value;
                        }} />
                    è
                </li>
                <li>
                    <input
                        style={input_style}
                        maxLength={1}
                        value={value5}
                        onChange={event => {
                            setValue5(event.target.value);
                            question[4].answer = event.target.value;
                        }} />
                    ě
                </li>
                <li>
                    <input
                        style={input_style}
                        maxLength={1}
                        value={value6}
                        onChange={event => {
                            setValue6(event.target.value);
                            question[5].answer = event.target.value;
                        }} />
                    ā
                </li>
                <li>
                    <input
                        style={input_style}
                        maxLength={1}
                        value={value7}
                        onChange={event => {
                            setValue7(event.target.value);
                            question[6].answer = event.target.value;
                        }} />
                    é
                </li>
                <li>
                    <input
                        style={input_style}
                        maxLength={1}
                        value={value8}
                        onChange={event => {
                            setValue8(event.target.value);
                            question[7].answer = event.target.value;
                        }} />
                    ó
                </li>
                <li>
                    <input
                        style={input_style}
                        maxLength={1}
                        value={value9}
                        onChange={event => {
                            setValue9(event.target.value);
                            question[8].answer = event.target.value;
                        }} />
                    ò
                </li>
                <li>
                    <input
                        style={input_style}
                        maxLength={1}
                        value={value10}
                        onChange={event => {
                            setValue10(event.target.value);
                            question[9].answer = event.target.value;
                        }} />
                    ǎ
                </li>
            </ol>
            <button className={styles.btn_check} onClick={checkExercise}>Проверить</button>
            <span style={result === 'Всё верно!' ? {color: 'green'} : {color: 'red'}}> {result}</span>
        </div>
    );
}

export default Exercise17L1;