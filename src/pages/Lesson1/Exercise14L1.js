import { AudioPlayer } from "react-audio-play";
import lesson01_114 from '../../audio/lesson01_114.mp3';

const Exercise14L1 = () => {
    return (
        <div>
            <p>
                <b>
                    4. 跟读下面的音节, 注意声调的不同 Прослушайте и повторите за диктором,
                    обратите внимание на разницу в тонах:
                </b>
            </p>
            <AudioPlayer src={lesson01_114} />
            <ol>
                <li>bā — bǎ</li>
                <li>pā — pá</li>
                <li>pò — pó</li>
                <li>pǒ — pò</li>
                <li>dǎ — dà</li>
                <li>tǎ — tā</li>
                <li>kě — kè</li>
                <li>gē — gé</li>
                <li>hà — há</li>
                <li>ké — kè</li>
            </ol>
        </div>
    );
}

export default Exercise14L1;