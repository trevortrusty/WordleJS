import Square from "./Square"
import styles from './Square.module.css';

const Attempt = () => {
    return(
        <div>
            <div className={styles.attempt}>
                <div className={styles.squares}>
                    <Square place="1" />
                    <Square place="2" />
                    <Square place="3" />
                    <Square place="4" />
                    <Square place="5" />
                </div>
                <div className={styles.input}>
                    <form>
                        <input className={styles.inputBox} type="text" name="letter" maxLength="5" spellCheck="false"></input>
                    </form>
                </div>
            </div>
            {/* <br /> <br /> <br /> */}
            <div className={styles.spacer}></div>
        </div>
    )
}

export default Attempt;