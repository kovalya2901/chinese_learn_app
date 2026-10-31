import { AudioPlayer } from "react-audio-play";
import lesson02_12 from '../../audio/lesson02_12.mp3';

const Exercise2L2 = () => {
    return (
        <div>
            <p>
                <b>
                    2. 跟读下面的音节, 注意声母的不同 Прослушайте и повторите за диктором,
                    обратите внимание на разницу в произношении инициалей:
                </b>
            </p>
            <AudioPlayer src={lesson02_12} />
            <ol>
                <li>mī — lī</li>
                <li>ní — mí</li>
                <li>mǔ — nǔ</li>
                <li>tì — dì</li>
                <li>yù — nǜ</li>
                <li>wú — fú</li>
                <li>tī — dī</li>
                <li>yú — lǘ</li>
                <li>gū — kū</li>
                <li>lǚ — nǚ</li>
            </ol>
        </div>
    );
}

export default Exercise2L2;