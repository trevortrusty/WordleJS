import styles from './Square.module.css';


const Square = ( {color, place} ) => {
    return (
        <div className={styles.square}>
            {/* {place} */}
            {/* <form>
                <input type="text" name="letter" maxLength="1"></input>
            </form> */}
        </div>
    )
}

export default Square;