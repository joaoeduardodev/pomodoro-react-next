import { useContext, useState } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/CompletedChalleges.module.css'

export function CompletedChalleges(){

    const { challengesCompleted } = useContext(ChallengesContext);

    return(
        <div className={styles.completedChallegesContainer}>
            <span>Desafios completos</span>
            <span>{challengesCompleted}</span>
        </div>
    );
}