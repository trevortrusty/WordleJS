import Square from "./Square"
import styles from './Square.module.css';
import { useState } from "react";
import guesses from '../globals/guesses'
let wordle='whack';
const Attempt = () => {

    let squareColors = ["red", "white", "white", "white", "white"];

    const [attempt, setAttempt] = useState('');
    const [color, setColor] = useState(squareColors);
    const handleAttemptSubmit = (event) => {
        console.log(attempt);
        for(let i = 0; i < 5; i++) {
            if (attempt.charAt(i) == wordle.charAt(i)) {
                console.log(i.toString() + 'is correct.');
                color[i] = "green";
                setColor(color);
            }
        }
        event.preventDefault();
    }
    const handleChange = (event) => {
        setAttempt(event.target.value);
    }
    return(
        <div>
            <div className={styles.attempt}>
                <div className={styles.squares}>
                    <Square color={color[0]} place="1" />
                    <Square color={color[1]} place="2" />
                    <Square color={color[2]} place="3" />
                    <Square color={color[3]} place="4" />
                    <Square color={color[4]} place="5" />
                </div>
                <div className={styles.input}>
                    <form onSubmit={handleAttemptSubmit}>
                        <input className={styles.inputBox} type="text" name="letter" maxLength="5" spellCheck="false" onChange={handleChange}></input>
                        <input className={styles.submitBtn} type="submit"></input>
                    </form>
                </div>
            </div>
            <div className={styles.spacer}></div>
        </div>
    )
}

export default Attempt;