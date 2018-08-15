import Link from 'next/link'
import Head from 'next/head'
import '../.next/static/style.css'

const linkStyle = {
    marginRight: 15
    
}

export default ({ children, title = 'Batman App' }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous" />
      <link rel="stylesheet" href='_next/static/style.css' />
    </Head>
      <header>
        < nav className = "navbar navbar-expand-sm bg-dark navbar-dark" >
          <strong>
            <a className="navbar-brand" href="/">Batman TV Shows App</a>
          </strong>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    { children }
    <style jsx>{
      `.bg-primary {
        background-color: #1e2225;
      }
    `}
    </style>
  </div>
)
