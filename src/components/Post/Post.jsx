import { format, formatDistanceToNow } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR'
import { useState } from 'react';
import { Avatar } from '../Avatar/Avatar'
import { Comment } from '../Comment/comment'
import styles from './Post.module.css'

export function Post({ author, publishedAt, content }) {
    const [comments, setComments] = useState([
    ])

    const [newCommentText, setNewCommentText] = useState('')

    function handleCreateNewComment() {
        event.preventDefault()
        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    function handleNewComentChange() {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    const publishedDateFormatted = format(publishedAt, "dd' de 'LLLL' às 'HH:mm'h'", { locale: ptBr })
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBr,
        addSuffix: true,
    })

    function handleNewCommentInvalid(){
        event.target.setCustomValidity('Esse campo é obrigatório')
    }


    function deleteComment(commentToDelet) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelet;
        })
        setComments(commentsWithoutDeletedOne);
    }
    const isNewCommentEmpty = newCommentText.length===0

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder={true} src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>;
                    } else if (line.type === 'link') {
                        return <p key={line.content}><a href=''>{line.content}</a></p>;
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu comentário</strong>
                <textarea
                    name='comment'
                    value={newCommentText}
                    placeholder="Deixe seu comentário"
                    onChange={handleNewComentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                <footer
                    className={styles.publishButton}>
                    <button
                        type="submit"
                        hidden={isNewCommentEmpty}
                        >
                        Publicar
                    </button>
                </footer>
            </form>
            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment key={comment} content={comment} onDeleteComment={deleteComment} />
                })}
            </div>
        </article>
    )
}