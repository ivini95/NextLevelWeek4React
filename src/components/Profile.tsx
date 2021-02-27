import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css'

export function Profile(){
    const { level} = useContext(ChallengesContext)

    return(
        <div className={styles.profileContainer}>
            <img src="https://uploads.spiritfanfiction.com/fanfics/historias/202006/zenitsu-resolveu-virar-e-boy-19637505-160620201713.jpg" alt="zenitsu"/>
            <div> 
                <strong>Zenitsu</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    {level}</p>
            </div>
        </div>
    );
}