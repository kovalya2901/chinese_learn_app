import { useState } from 'react';
import styles from '../Styles.module.css';
import { AudioPlayer } from "react-audio-play";
import lesson02_19 from '../../audio/lesson02_19.mp3';

const input_style = { width: '50px', margin: '0 5px' };

let question = [
    { point: '01', right_answer: 'yi4', answer: '' },
    { point: '02', right_answer: 'lu1', answer: '' },
    { point: '03', right_answer: 'mi3', answer: '' },
    { point: '04', right_answer: 'nu2', answer: '' },
    { point: '05', right_answer: 'fu1', answer: '' },
    { point: '06', right_answer: 'wu2', answer: '' },
    { point: '07', right_answer: 'yu4', answer: '' },
    { point: '08', right_answer: 'nv2', answer: '' },
    { point: '09', right_answer: 'li4', answer: '' },
    { point: '10', right_answer: 'fo2', answer: '' },
];

const Exercise9L2 = () => {
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
                    9. 听写音节 Напишите диктант <i>(в поля ввода необходимо ввести 
                    последовательность 'слог + номер тона'. Например: ke3, sheng2, shi4, 
                    hao1, miao2. Вместо буквы Ü используйте V)</i>:
                </b>
            </p>
            <AudioPlayer src={lesson02_19} />
            <ol>
                <li>
                    <input
                        style={input_style}
                        maxLength={3}
                        value={value1}
                        onChange={event => {
                            setValue1(event.target.value);
                            question[0].answer = event.target.value;
                        }} />
                </li>
                <li>
                    <input
                        style={input_style}
                        maxLength={3}
                        value={value2}
                        onChange={event => {
                            setValue2(event.target.value);
                            question[1].answer = event.target.value;
                        }} />
                </li>
                <li>
                    <input
                        style={input_style}
                        maxLength={3}
                        value={value3}
                        onChange={event => {
                            setValue3(event.target.value);
                            question[2].answer = event.target.value;
                        }} />
                </li>
                <li>
                    <input
                        style={input_style}
                        maxLength={3}
                        value={value4}
                        onChange={event => {
                            setValue4(event.target.value);
                            question[3].answer = event.target.value;
                        }} />
                </li>
                <li>
                    <input
                        style={input_style}
                        maxLength={3}
                        value={value5}
                        onChange={event => {
                            setValue5(event.target.value);
                            question[4].answer = event.target.value;
                        }} />
                </li>
                <li>
                    <input
                        style={input_style}
                        maxLength={3}
                        value={value6}
                        onChange={event => {
                            setValue6(event.target.value);
                            question[5].answer = event.target.value;
                        }} />
                </li>
                <li>
                    <input
                        style={input_style}
                        maxLength={3}
                        value={value7}
                        onChange={event => {
                            setValue7(event.target.value);
                            question[6].answer = event.target.value;
                        }} />
                </li>
                <li>
                    <input
                        style={input_style}
                        maxLength={3}
                        value={value8}
                        onChange={event => {
                            setValue8(event.target.value);
                            question[7].answer = event.target.value;
                        }} />
                </li>
                <li>
                    <input
                        style={input_style}
                        maxLength={3}
                        value={value9}
                        onChange={event => {
                            setValue9(event.target.value);
                            question[8].answer = event.target.value;
                        }} />
                </li>
                <li>
                    <input
                        style={input_style}
                        maxLength={3}
                        value={value10}
                        onChange={event => {
                            setValue10(event.target.value);
                            question[9].answer = event.target.value;
                        }} />
                </li>
            </ol>
            <button className={styles.btn_check} onClick={checkExercise}>Проверить</button>
            <span style={result === 'Всё верно!' ? { color: 'green' } : { color: 'red' }}> {result}</span>
        </div>
    );
}

export default Exercise9L2;