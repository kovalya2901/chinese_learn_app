import { useState } from 'react';
import styles from '../Styles.module.css';
import { AudioPlayer } from "react-audio-play";
import lesson02_18 from '../../audio/lesson02_18.mp3';

const input_style = { width: '30px', margin: '0 5px' };

let question = [
    { point: '01', right_answer: 'u3', answer: '' },
    { point: '02', right_answer: 'i3', answer: '' },
    { point: '03', right_answer: 'o2', answer: '' },
    { point: '04', right_answer: 'a4', answer: '' },
    { point: '05', right_answer: 'i2', answer: '' },
    { point: '06', right_answer: 'v3', answer: '' },
    { point: '07', right_answer: 'u4', answer: '' },
    { point: '08', right_answer: 'v4', answer: '' },
    { point: '09', right_answer: 'i3', answer: '' },
    { point: '10', right_answer: 'a1', answer: '' },
];

const Exercise8L2 = () => {
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
            if (elem.answer === elem.right_answer) k *= 1;
            else {
                k *= 0;
                break;
            }
        }

        if (k === 1) setResult('Всё верно!');
        else setResult('Не все ответы верны. Попробуйте ответить еще раз!');
    }

    return (
        <div>
            <p>
                <b>
                    8. 听下面的音节, 填上韵母和声调 Прослушайте звукозапись, вставьте финали,
                    поставьте тоны <i>(в поля ввода необходимо ввести последовательность 
                    'финаль + номер тона'. Например: e1, ong4, o3, eng2, in1, ei4. Вместо 
                    буквы Ü используйте V)</i>:
                </b>
            </p>
            <AudioPlayer src={lesson02_18} />
            <ol>
                <li>
                    m
                    <input
                        style={input_style}
                        maxLength={2}
                        value={value1}
                        onChange={event => {
                            setValue1(event.target.value);
                            question[0].answer = event.target.value;
                        }} />
                </li>
                <li>
                    m
                    <input
                        style={input_style}
                        maxLength={2}
                        value={value2}
                        onChange={event => {
                            setValue2(event.target.value);
                            question[1].answer = event.target.value;
                        }} />
                </li>
                <li>
                    f
                    <input
                        style={input_style}
                        maxLength={2}
                        value={value3}
                        onChange={event => {
                            setValue3(event.target.value);
                            question[2].answer = event.target.value;
                        }} />
                </li>
                <li>
                    p
                    <input
                        style={input_style}
                        maxLength={2}
                        value={value4}
                        onChange={event => {
                            setValue4(event.target.value);
                            question[3].answer = event.target.value;
                        }} />
                </li>
                <li>
                    n
                    <input
                        style={input_style}
                        maxLength={2}
                        value={value5}
                        onChange={event => {
                            setValue5(event.target.value);
                            question[4].answer = event.target.value;
                        }} />
                </li>
                <li>
                    n
                    <input
                        style={input_style}
                        maxLength={2}
                        value={value6}
                        onChange={event => {
                            setValue6(event.target.value);
                            question[5].answer = event.target.value;
                        }} />
                </li>
                <li>
                    l
                    <input
                        style={input_style}
                        maxLength={2}
                        value={value7}
                        onChange={event => {
                            setValue7(event.target.value);
                            question[6].answer = event.target.value;
                        }} />
                </li>
                <li>
                    l
                    <input
                        style={input_style}
                        maxLength={2}
                        value={value8}
                        onChange={event => {
                            setValue8(event.target.value);
                            question[7].answer = event.target.value;
                        }} />
                </li>
                <li>
                    b
                    <input
                        style={input_style}
                        maxLength={2}
                        value={value9}
                        onChange={event => {
                            setValue9(event.target.value);
                            question[8].answer = event.target.value;
                        }} />
                </li>
                <li>
                    t
                    <input
                        style={input_style}
                        maxLength={2}
                        value={value10}
                        onChange={event => {
                            setValue10(event.target.value);
                            question[9].answer = event.target.value;
                        }} />
                </li>
            </ol>
            <button className={styles.btn_check} onClick={checkExercise}>Проверить</button>
            <span style={result === 'Всё верно!' ? {color: 'green'} : {color: 'red'}}> {result}</span>
        </div>
    );
}

export default Exercise8L2;