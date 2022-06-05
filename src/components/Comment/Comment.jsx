import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://pps.whatsapp.net/v/t61.24694-24/259998599_5064052256997290_4220230623752992595_n.jpg?ccb=11-4&oh=b54506ae640ee064cba66df036343e93&oe=62AAEEAF" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Victória Iasmin</strong>
                            <time title="06 de Junho às 03:49h" dateTime="2022-06-11 03:49">Apróximadamente 1h atrás</time>
                        </div>
                        <button title="Deletar Comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>Muito bom! Parabéns</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp/>
                        Like <spam>20</spam>
                    </button>
                </footer>
            </div>
        </div>
    )
}