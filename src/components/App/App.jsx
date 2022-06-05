import { Header } from '../Header/Header';
import { Post } from '../Post/Post';
import { Sidebar } from '../Sidebar/Sidebar';

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
          <Post
            author="Ricardo Silva"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
        </main>

      </div>
    </div>

  )
}


