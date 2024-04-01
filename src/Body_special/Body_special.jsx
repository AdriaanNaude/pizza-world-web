import styles from './Body_special.module.css'

function Body_special(){
    return(
        <>
        <div className={styles.special_body}>
            <div className={styles.special_one}>
                <p>
                    Two smalls for R130
                </p>
            </div>
            <div className={styles.special_two}>
                <p>
                    Two Mediums for R210
                </p>
            </div>
        </div>
        </>
    );
}

export default Body_special

