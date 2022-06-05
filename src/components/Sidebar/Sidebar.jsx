import { PencilLine } from 'phosphor-react' 

import styles from './Sidebar.module.css'
         
export function Sidebar() {
    return (
    <aside className={styles.sidebar}>
        <img className={styles.cover} src="https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=50"/>
        <div className={styles.profile}>
            <img className={styles.avatar} src="https://github.com/rads022.png" alt="Imagem de perfil" />
            <strong>Nome do Usuário</strong>
            <spam>Cargo</spam>

            <footer>
                <a href='#'>
                    <PencilLine size={20}/>
                    Editar seu Perfil
                </a>
            </footer>
        </div>
    </aside>
    )
}