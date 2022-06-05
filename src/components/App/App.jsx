import { Header } from '../Header/Header';
import { Sidebar } from '../Sidebar/Sidebar';
import { Post } from '../Post/Post'

import '../../global.css';
import styles from "./App.module.css"

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
          <Post/>
          <Post/>
        </main>

      </div>
    </div>

  )
}


