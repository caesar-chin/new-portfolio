import{R as a}from"./index.f824fa59.js";import{j as t}from"./jsx-runtime.0209ad28.js";function m({darkMode:r}){const[s,e]=a.useState(r),l=()=>{window.localStorage.getItem("color-theme")==="dark"?(document.documentElement.classList.add("dark"),e(!0)):(document.documentElement.classList.remove("dark"),e(!1))};a.useEffect(()=>l(),[]);const o=()=>{localStorage.getItem("color-theme")?localStorage.getItem("color-theme")==="light"?(document.documentElement.classList.add("dark"),localStorage.setItem("color-theme","dark"),e(!0)):(document.documentElement.classList.remove("dark"),localStorage.setItem("color-theme","light"),e(!1)):document.documentElement.classList.contains("dark")?(document.documentElement.classList.remove("dark"),localStorage.setItem("color-theme","light"),e(!1)):(document.documentElement.classList.add("dark"),localStorage.setItem("color-theme","dark"),e(!0))};return t.jsx("div",{className:"group",children:s?t.jsx("a",{className:"cursor-pointer hover:text-sea-foam-green dark:hover:text-dark-grayish-red",onClick:o,children:"Dark Mode"}):t.jsx("a",{className:"cursor-pointer hover:text-sea-foam-green dark:hover:text-dark-grayish-red",onClick:o,children:"Light Mode"})})}export{m as D};
