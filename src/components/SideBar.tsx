import '../styles/sidebar.scss';

interface SideBarProps {
  children: JSX.Element[],
}

export function SideBar({ children }: SideBarProps) {
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {children}
      </div>
    </nav>
  )
}