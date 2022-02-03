import styles from './Square.module.css';
let wordle='whack';

const Square = ( {color, place, attempt, setColor, isSubmit} ) => {
    //color="white";
    //console.log(color);
    if(isSubmit)
    {
        if (attempt.charAt(place) == wordle.charAt(place)) {
            console.log(place.toString() + ' is correct.');
            color[place] = "green";
            setColor(color);
        }
        else if (wordle.includes(attempt.charAt(place))) {
            console.log(place.toString() + ' is in a different spot')
            color[place] = "yellow";
            setColor(color);
        }
    }
    return (
        <div className={styles.square} style={{backgroundColor: color[place]}}>
            {/* {place} */}
            {/* <form>
                <input type="text" name="letter" maxLength="1"></input>
            </form> */}
        </div>
    )
}

export default Square;