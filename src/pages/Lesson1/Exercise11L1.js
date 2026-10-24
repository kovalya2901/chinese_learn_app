import { AudioPlayer } from "react-audio-play";
import lesson01_111 from '../../audio/lesson01_111.mp3';

const Exercise11L1 = () => {
    return (
        <div>
            <p>
                <b>1. 跟读下面的音节 Прослушайте и повторите за диктором:</b>
            </p>
            <AudioPlayer src={lesson01_111} />
            <ol>
                <li>bā — bá — bǎ — bà</li>
                <li>pā — pá — pà</li>
                <li>dā — dá — dǎ — dà</li>
                <li>tā — tá — tà</li>
                <li>bō — bó — bǒ — bò</li>
                <li>pō — pó — pǒ — pò</li>
                <li>ē — é — ě — è</li>
                <li>gē — gé — gě — gè</li>
                <li>kē — ké — kě — kè</li>
                <li>hē — hé — hè</li>
            </ol>
        </div>
    );
}

export default Exercise11L1;