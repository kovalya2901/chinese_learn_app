import { AudioPlayer } from "react-audio-play";
import lesson02_14 from '../../audio/lesson02_14.mp3';

const Exercise4L2 = () => {
    return (
        <div>
            <p>
                <b>
                    4. 跟读下面的音节, 注意声调的不同 Прослушайте и повторите за диктором,
                    обратите внимание на разницу в тонах:
                </b>
            </p>
            <AudioPlayer src={lesson02_14} />
            <ol>
                <li>yǐ — yì</li>
                <li>wù — wǔ</li>
                <li>lī — lì</li>
                <li>tǐ — tí</li>
                <li>lǚ — lǘ</li>
                <li>yù — yū</li>
                <li>mǔ — mú</li>
                <li>bú — bù</li>
                <li>fú — fū</li>
                <li>dì — dǐ</li>
            </ol>
        </div>
    );
}

export default Exercise4L2;