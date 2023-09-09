const NavBar = () => {
  return (
    <div className='top-nav'>
      <div className='nav-text-large'>My App</div>
      <div className='nav-list'>
        <a href='/posts'>Posts</a>
        <a href='/users'>Users</a>
        <a href='/todos'>Todos</a>
      </div>
    </div>
  )
}

export default NavBar
