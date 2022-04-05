import '../styles/content.scss';

interface ContentProps {
  children: JSX.Element | JSX.Element[],
  genre: {
    title: string;
  }
}

export function Content({ children, genre }: ContentProps) {
  
  return (
    <div className="container">
      <header>
        <span className="category">Categoria:
          <span> {genre.title} </span>
        </span>
      </header>

      <main>
        <div className="movies-list">
          {children}
        </div>
      </main>
    </div>
  )
}