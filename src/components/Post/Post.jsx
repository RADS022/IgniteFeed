import { Comment } from '../Comment/comment'
import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/rads022.png" alt="" />
                    <div className={styles.authorInfo}>
                        <strong>Ricardo Silva</strong>
                        <spam>Eng. de Software Jr.</spam>
                    </div>
                </div>
                <time title='' dateTime=''>
                    Públicado há 1hr
                </time>
            </header>
            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>To aqui fazendo esse site de madrugada. Morrendo de sono...mas vai sair!</p>
                <p>Quer ver mais? 👉{' '}<a href="https://github.com/RADS022/IgniteFeed.git">Projeto no Git</a></p>
                <p>
                    <a href="">#programacarai </a>{' '}
                    <a href="">#reactjs </a>{' '}
                    <a href="">#rocketseat</a>{' '}
                </p>
            </div>
            <form className={styles.commentForm}>
                <strong>Deixe seu comentário</strong>
                <textarea placeholder="Deixe seu comentário" />
                <footer className={styles.publishButton}>
                    <button type="submit">Publicar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                <Comment />
            </div>
        </article>
    )
}