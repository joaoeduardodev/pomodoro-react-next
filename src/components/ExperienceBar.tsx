import styles from '../styles/components/ExperienceBar.module.css';


export function ExperienceBar(){
 
    return(
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{width: '60%'}}>
                <span className={styles.currentExperience} style={{left: '60%' }}>600 xp</span>
                </div>
            </div>
            <span>1000 xp</span>
        </header>
    );
}