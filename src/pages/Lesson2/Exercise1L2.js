import { AudioPlayer } from "react-audio-play";
import lesson02_11 from '../../audio/lesson02_11.mp3';

const Exercise1L2 = () => {
    return (
        <div>
            <p>
                <b>1. 跟读下面的音节 Прослушайте и повторите за диктором:</b>
            </p>
            <AudioPlayer src={lesson02_11} />
            <ol>
                <li>nī — ní — nǐ — nì</li>
                <li>lī — lí — lǐ — lì</li>
                <li>yī — yí — yǐ — yì</li>
                <li>dī — dí — dǐ — dì</li>
                <li>tī — tí — tǐ — tì</li>
                <li>mú — mǔ — mù</li>
                <li>fū — fú — fǔ — fù</li>
                <li>wū — wú — wǔ — wù</li>
                <li>lǘ — lǚ — lǜ</li>
                <li>yū — yú — yǔ — yù</li>
            </ol>
        </div>
    );
}

export default Exercise1L2;