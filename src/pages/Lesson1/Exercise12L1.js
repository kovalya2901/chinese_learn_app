import { AudioPlayer } from "react-audio-play";
import lesson01_112 from '../../audio/lesson01_112.mp3';

const Exercise12L1 = () => {
    return (
        <div>
            <p>
                <b>
                    2. 跟读下面的音节, 注意声母的不同 Прослушайте и повторите за диктором,
                    обратите внимание на разницу в произношении инициалей:
                </b>
            </p>
            <AudioPlayer src={lesson01_112} />
            <ol>
                <li>bá — pá</li>
                <li>gǎ — kǎ</li>
                <li>dà — tà</li>
                <li>hā — kā</li>
                <li>gē — kē</li>
                <li>gé — hé</li>
                <li>kě — gě</li>
                <li>bō — pō</li>
                <li>bó — pó</li>
                <li>kè — hè</li>
            </ol>
        </div>
    );
}

export default Exercise12L1;