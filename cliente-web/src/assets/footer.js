import React from 'react'

export default class Footer extends React.Component{
render(){
    return(
        <footer className="page-footer font-small bg-dark align-bottom">
        <div className="container">
            <ul className="list-unstyled list-inline text-center">
            <li className="list-inline-item">
                <a className="btn-floating btn-fb mx-1">
                <i className="fab fa-facebook-f"> </i>
                </a>
            </li>
            <li className="list-inline-item">
                <a className="btn-floating btn-tw mx-1">
                <i className="fab fa-twitter"> </i>
                </a>
            </li>
            </ul>
        </div>
        <div className="footer-copyright text-center py-3">© 2019 Copyright:
            <a href="#"> Karla Zapata</a>
        </div>
        </footer>
    )
}
}