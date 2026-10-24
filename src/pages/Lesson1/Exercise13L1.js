import { AudioPlayer } from "react-audio-play";
import lesson01_113 from '../../audio/lesson01_113.mp3';

const Exercise13L1 = () => {
    return (
        <div>
            <p>
                <b>
                    3. 跟读下面的音节, 注意韵母的不同 Прослушайте и повторите за диктором,
                    обратите внимание на разницу в произношении финалей:
                </b>
            </p>
            <AudioPlayer src={lesson01_113} />
            <ol>
                <li>bā — bō</li>
                <li>pá — pó</li>
                <li>kǎ — kě</li>
                <li>hè — hà</li>
                <li>gā — gē</li>
                <li>dá — dé</li>
                <li>gǎ — gě</li>
                <li>tè — tà</li>
                <li>kā — kē</li>
                <li>pà — pò</li>
            </ol>
        </div>
    );
}

export default Exercise13L1;