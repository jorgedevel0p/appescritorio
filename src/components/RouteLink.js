import { Link, useLocation } from 'react-router-dom'

export const RouteLink = ({ route, title, icon }) => {
  const location = useLocation()

  let styles = { textDecoration: 'none' }
  if(location.pathname === route){
    styles = {}
  }

  return (
    <li className="nav-item">
      <Link to={route} style={styles}>
        <a href="#" className="nav-link text-white">
          <i className={`${icon} m-2`} style={{ color: '#ffffff' }}></i>
          {title}
        </a>
      </Link>
    </li>
  )
}