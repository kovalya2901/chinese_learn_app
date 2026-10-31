import { AudioPlayer } from "react-audio-play";
import lesson02_13 from '../../audio/lesson02_13.mp3';

const Exercise3L2 = () => {
    return (
        <div>
            <p>
                <b>
                    3. 跟读下面的音节, 注意韵母的不同 Прослушайте и повторите за диктором,
                    обратите внимание на разницу в произношении финалей:
                </b>
            </p>
            <AudioPlayer src={lesson02_13} />
            <ol>
                <li>nī — nū</li>
                <li>mí — mú</li>
                <li>yǐ — yǔ</li>
                <li>lì — lè</li>
                <li>dū — dī</li>
                <li>yì — yù</li>
                <li>tǐ — tǔ</li>
                <li>lǘ — lú</li>
                <li>fā — fū</li>
                <li>lǘ — lí</li>
            </ol>
        </div>
    );
}

export default Exercise3L2;