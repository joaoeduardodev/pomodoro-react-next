import styles from '../styles/components/Profile.module.css'

export function Profile(){
    return(
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/58517031?s=460&v=4" alt="João Eduardo"/>
            <div>
                <strong>João Eduardo</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>    
                    Level 1
                </p>

            </div>
        </div>
    );
}