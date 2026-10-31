import { useState } from 'react';
import styles from '../Styles.module.css';

const input_style = { width: '200px', margin: '0 5px' };

let question = [
    { point: '1', right_answer: 'большая лошадь', answer: '' },
    { point: '2', right_answer: 'деревянная лошадка;качалка', answer: '' },
    { point: '3', right_answer: 'большая река', answer: '' },
    { point: '4', right_answer: 'речная рыба', answer: '' },
    { point: '5', right_answer: 'большая рыба', answer: '' },
    { point: '6', right_answer: 'грамматика', answer: '' },
    { point: '7', right_answer: 'низкий человек;подлый человек', answer: '' },
    { point: '8', right_answer: 'женщина', answer: '' },
    { point: '9', right_answer: 'каждый;все', answer: '' },
    { point: '10', right_answer: 'размер', answer: '' },
];

const Exercise10L2 = () => {
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
    const [btnSAClick, setBtnSAClick] = useState(false);
    
    const list_answers = question.map((item, index) => {
        return <li key={index}>{item.right_answer}</li>
    });

    function checkExercise() {
        let wrong_answers = [];
        let wrong_answers_message = 'Неверные ответы —';
        let k = 0;
        for (let obj of question) {
            if (obj.right_answer.includes(';')) {
                let j = 0;
                let arr = obj.right_answer.split(';');
                for (let elem of arr) {
                    if (obj.answer === elem) {
                        j += 1;
                        break;
                    }
                    else {
                        continue;
                    }
                }

                if (j === 1) k += j;
                else wrong_answers.push(obj.point);
            }
            else {
                if (obj.answer === obj.right_answer) k += 1;
                else {
                    wrong_answers.push(obj.point);
                    continue;
                }
            }
        }

        if (k === 10) setResult('Всё верно!');
        else {
            for (let elem of wrong_answers) {
                wrong_answers_message += ' №' + elem;
            }

            setResult(wrong_answers_message);
        }
    }

    function showAnswers() {
        setBtnSAClick(!btnSAClick);
    }

    return (
        <div>
            <p>
                <b>
                    10. 请将不列词语译俄文 Переведите на русский нижеследующие слова и
                    словосочетания:
                </b>
            </p>
            <p>
                大 dà большой; 马 mǎ лошадь; 河 hé река; 鱼 yú рыба;
                语 yǔ язык, речь; 法 fǎ закон; 小 xiǎo маленький; 人 rén человек.
            </p>
            <ol>
                <li>
                    大马
                    <input
                        style={input_style}
                        value={value1}
                        onChange={event => {
                            setValue1(event.target.value);
                            question[0].answer = event.target.value;
                        }} />
                </li>
                <li>
                    木马
                    <input
                        style={input_style}
                        value={value2}
                        onChange={event => {
                            setValue2(event.target.value);
                            question[1].answer = event.target.value;
                        }} />
                </li>
                <li>
                    大河
                    <input
                        style={input_style}
                        value={value3}
                        onChange={event => {
                            setValue3(event.target.value);
                            question[2].answer = event.target.value;
                        }} />
                </li>
                <li>
                    河鱼
                    <input
                        style={input_style}
                        value={value4}
                        onChange={event => {
                            setValue4(event.target.value);
                            question[3].answer = event.target.value;
                        }} />
                </li>
                <li>
                    大鱼
                    <input
                        style={input_style}
                        value={value5}
                        onChange={event => {
                            setValue5(event.target.value);
                            question[4].answer = event.target.value;
                        }} />
                </li>
                <li>
                    语法
                    <input
                        style={input_style}
                        value={value6}
                        onChange={event => {
                            setValue6(event.target.value);
                            question[5].answer = event.target.value;
                        }} />
                </li>
                <li>
                    小人
                    <input
                        style={input_style}
                        value={value7}
                        onChange={event => {
                            setValue7(event.target.value);
                            question[6].answer = event.target.value;
                        }} />
                </li>
                <li>
                    女人
                    <input
                        style={input_style}
                        value={value8}
                        onChange={event => {
                            setValue8(event.target.value);
                            question[7].answer = event.target.value;
                        }} />
                </li>
                <li>
                    人人
                    <input
                        style={input_style}
                        value={value9}
                        onChange={event => {
                            setValue9(event.target.value);
                            question[8].answer = event.target.value;
                        }} />
                </li>
                <li>
                    大小
                    <input
                        style={input_style}
                        value={value10}
                        onChange={event => {
                            setValue10(event.target.value);
                            question[9].answer = event.target.value;
                        }} />
                </li>
            </ol>
            <div style={{display: 'flex', gap: '20px'}}>
                <button className={styles.btn_check} onClick={checkExercise}>Проверить</button>
                <button className={styles.btn_check} onClick={showAnswers}
                    style={result === 'Всё верно' || result === '' ?
                        { display: 'none' }
                        : { display: 'inline' }}>
                            {btnSAClick === false ? 'Показать ответы' : 'Скрыть ответы'}
                        </button>
            </div>
            <ol>
                {btnSAClick === true ? list_answers : ''}
            </ol>
            <span style={result === 'Всё верно!' ? { color: 'green' } : { color: 'red' }}> {result}</span>
        </div>
    );

}

export default Exercise10L2;