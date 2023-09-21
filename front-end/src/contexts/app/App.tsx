import NavigationPannel from '@src/contexts/app/components/left-pannel/NavigationPannel.tsx'
import HomePage from '@src/contexts/app/pages/home/HomePage.tsx'

function App() {

    return (
      <section className="flex">
        <aside className=""> 
            <NavigationPannel />
        </aside>
        <article>
            <HomePage />
        </article>
      </section>
    )
  }
  
export default App
  