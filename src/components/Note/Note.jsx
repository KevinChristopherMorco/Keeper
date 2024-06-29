import React from 'react'
import styles from './Note.module.css'

const Note = () => {
    return (
        <div className={styles.card}>
            <div className={styles.headingContainer}>
                <p className={styles.heading}>Heading</p>
            </div>
            <div className={styles.contentContainer}>
                <p className={styles.content}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis delectus cumque animi corrupti consequuntur nisi totam sequi expedita nihil quaerat? Ut aspernatur harum sit cumque quo? Praesentium aspernatur adipisci necessitatibus.</p>
            </div>
        </div>
    )
}

export default Note;
