const navbarMenu = document.getElementById("navbar-menu"),
  btnMenu = document.getElementById("btn-menu"),
  btnClose = document.getElementById("btn-close");

/*   show menu  */
btnMenu.addEventListener("click", () => {
  navbarMenu.classList.add("show-menu");
});
/*   hide menu  */
btnClose.addEventListener("click", () => {
  navbarMenu.classList.remove("show-menu");
});

/*   search */
const search = document.getElementById("search"),
  btnSearch = document.getElementById("btn-search"),
  btnSearchCls = document.getElementById("btn-search-close");

/*   show search */
btnSearch.addEventListener("click", () => {
  search.classList.add("show-search");
});
/*   hide search */
btnSearchCls.addEventListener("click", () => {
  search.classList.remove("show-search");
});

/*   login */
const login = document.getElementById("login"),
  btnLogin = document.getElementById("btn-login"),
  btnLoginCls = document.getElementById("btn-login-close");

/*   show login */
btnLogin.addEventListener("click", () => {
  login.classList.add("show-login");
});
/*   show login */
btnLoginCls.addEventListener("click", () => {
  login.classList.remove("show-login");
});
