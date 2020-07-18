import en from "../Locale/en/translate.json.json";
import hk from "../Locale/zh-hk/translate.json";

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
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
            <span class="navbar-text nav-title">股票交易市埸 | Stock Overflow</span>
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" href="#">股市新聞</a>
                </li>
                <li class=""nav-item>
                    <a class="nav-link" href="#">社群</a>
                </li>
            </ul>
            <ul class="navbar-nav ml-auto">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbardrop"
                    data-toggle="dropdown">
                    <i class="fas fa-language"></i>語言</a>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">中文</a>
                        <a class="dropdown-item" href="#">English</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="index.html">
                        <i class="far fa-user-circle"></i>登入/創帳號</a>
                </li>
            </ul>
          </nav>
    </div>
);

ReactDOM.render(footer, document.getElementById('footer'));
ReactDOM.render(nav, document.getElementById('navb'));