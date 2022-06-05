import { Header } from '../Header/Header';
import { Sidebar } from '../Sidebar/Sidebar';
import { Post } from '../Post/Post'

import '../../global.css';
import styles from "./App.module.css"

const post = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/Rads022.png',
      name: 'Ricardo Silva',
      role: 'Eng. de Software Jr.',
    },
    content: [
      { type: 'paragraph', content: "Falae putada!" },
      { type: 'paragraph', content: "To aqui fazendo esse site de madrugada. Morrendo de sono...mas vai sair!" },
      { type: 'paragraph', content: "Projeto no git:" },
      { type: 'link', content: "https://github.com/RADS022/IgniteFeed" },
    ],
    publishedAt: new Date('2022-06-04 01:40:13'),

  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://pps.whatsapp.net/v/t61.24694-24/259998599_5064052256997290_4220230623752992595_n.jpg?ccb=11-4&oh=b54506ae640ee064cba66df036343e93&oe=62AAEEAF',
      name: 'Victoria Iasmin',
      role: 'Galactic Milady',
    },
    content: [
      { type: 'paragraph', content: "Ahoy!!!" },
      { type: 'paragraph', content: "Hoje é o melhor dia da semana! Dia de malhar perna" },
    ],
    publishedAt: new Date('2022-06-05 00:30:23'),
  },
]



export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
          {post.map(post => {
            return (
              <Post
              key={post.publishedAt+post.author}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
              />
            )
          })}

        </main>

      </div>
    </div>

  )
}


