import styles from '../styles/components/CompletedChalleges.module.css'

export function CompletedChalleges(){
    return(
        <div className={styles.completedChallegesContainer}>
            <span>Desafios completos</span>
            <span>6</span>
        </div>
    );
}