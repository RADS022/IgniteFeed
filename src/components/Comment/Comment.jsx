import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from '../Avatar/Avatar'
import styles from './Comment.module.css'
export function Comment({content}) {
    return (
        <div className={styles.comment}>
            <Avatar src="https://github.com/Rads022.png"/>
            
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Ricardo Silva</strong>
                            <time title="06 de Junho às 03:49h" dateTime="2022-06-11 03:49">Apróximadamente 1h atrás</time>
                        </div>
                        <button title="Deletar Comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp/>
                        Like <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}