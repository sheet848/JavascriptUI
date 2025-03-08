import React from 'react'

const Header = (props) => {
  return (
    <>
    <nav className="navbar navbar-dark bg-dark">
        <div className="container">
            <div className="row m-auto">
                <i className="fa fa-hand-pointer-o fa-2x text-white mr-2">
                    <div className="h2 text-light" data-testid="title">{props.title}</div>
                </i>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Header