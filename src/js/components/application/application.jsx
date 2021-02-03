import styles from './application.module'
import circle from '@assets/circle.svg'

export function Application() {
    return (
        <div className={styles.application}>
            <img src={circle} />
        </div>
    )
}
