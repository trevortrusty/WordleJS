import Square from "./Square"
import styles from './Square.module.css';
import { useState } from "react";
import guesses from '../globals/guesses'
let wordle='whack';
const Attempt = () => {

    let squareColors = ["white", "white", "white", "white", "white"];

    const [attempt, setAttempt] = useState('');
    const [color, setColor] = useState(squareColors);
    const [isSubmit, setIsSubmit] = useState(false);
    const handleAttemptSubmit = (event) => {
        setIsSubmit(true);
        console.log(attempt);
        // for(let i = 0; i < 5; i++) {
        //     if (attempt.charAt(i) == wordle.charAt(i)) {
        //         console.log(i.toString() + 'is correct.');
        //         color[i] = "green";
        //         setColor(color);
        //     }
        // }
        event.preventDefault();
    }
    const handleChange = (event) => {
        setAttempt(event.target.value);
    }

    const testClick = () => {
        console.log("Submit button pressed, test.")
    }

    return(
        <div>
            <div className={styles.attempt}>
                <div className={styles.input}>
                    <form>
                        <input className={styles.inputBox} type="text" name="letter" maxLength="5" spellCheck="false" onChange={handleChange}></input>
                        <input className={styles.submitBtn} type="submit" onClick={handleAttemptSubmit}></input>
                    </form>
                </div>
                <div className={styles.squares}>
                    <Square color={color} setColor={setColor} place="0" attempt={attempt} isSubmit={isSubmit} />
                    <Square color={color} setColor={setColor} place="1" attempt={attempt} isSubmit={isSubmit} />
                    <Square color={color} setColor={setColor} place="2" attempt={attempt} isSubmit={isSubmit} />
                    <Square color={color} setColor={setColor} place="3" attempt={attempt} isSubmit={isSubmit} />
                    <Square color={color} setColor={setColor} place="4" attempt={attempt} isSubmit={isSubmit} />
                </div>
                
            </div>
            <div className={styles.spacer}></div>
        </div>
    )
}

export default Attempt;