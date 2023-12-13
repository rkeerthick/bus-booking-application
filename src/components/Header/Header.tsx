import './Header.scss'

const Header = () => {
    return (
        <header>
            <div className="header">
                <h1>RedBus</h1>
                <div className="header__credential-container">
                    <button>Login</button>
                    <button>Sign In</button>
                </div>
            </div>
      </header>
  )
}

export default Header