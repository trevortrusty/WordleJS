import styles from './Square.module.css';


const Square = ( {color, place} ) => {
    //color="white";
    console.log(color);
    return (
        <div className={styles.square} style={{backgroundColor: {color}}}>
            {/* {place} */}
            {/* <form>
                <input type="text" name="letter" maxLength="1"></input>
            </form> */}
            
        </div>
    )
}

export default Square;