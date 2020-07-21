//import en from "../Locale/en/translate.json.json";
//import hk from "../Locale/zh-hk/translate.json";

const footer = (
    <div>
        <footer>
            <div className="border-line"></div>
            <h6>Created by Martin Leung & Donald Tsang (2020)</h6>
        </footer>
    </div>
);

const nav = (
    <div>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <span className="navbar-text nav-title">股票交易市埸 | Stock Overflow</span>
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <a className="nav-link" href="#">股市新聞</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">社群</a>
                </li>
            </ul>
<<<<<<< HEAD
            <ul class="navbar-nav ml-auto">
                <input type="checkbox" checked data-toggle="toggle" data-style="ios"
                data-on="Dark" data-onstyle="outline-secondary" data-off="Light"
                data-offstyle="outline-light"> 
=======
            <ul className="navbar-nav ml-auto">
                <input type="checkbox"  defaultChecked data-toggle="toggle" data-style="ios"
                data-on="Dark Mode" data-onstyle="dark" data-off="Light Mode"
                data-offstyle="light"> 
>>>>>>> 044627439e990c3781f6d93c127c0c1d3952ec62
                </input>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbardrop"
                    data-toggle="dropdown">
                    <i className="fas fa-language"></i>語言</a>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">中文</a>
                        <a className="dropdown-item" href="#">English</a>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="acc.html">
                        <i className="far fa-user-circle"></i>登入/創帳號</a>
                </li>
            </ul>
          </nav>
    </div>
);

ReactDOM.render(footer, document.getElementById('footer'));
ReactDOM.render(nav, document.getElementById('navb'));  //line 26 caused error, use defaultChecked in react instead of checked