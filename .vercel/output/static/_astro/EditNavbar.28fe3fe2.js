import{r as n,R as r}from"./index.f824fa59.js";import{j as e}from"./jsx-runtime.0209ad28.js";function m({darkMode:s}){const l=async()=>{await fetch("https://portfolio-website-api-production.up.railway.app/test_cookies",{method:"GET",credentials:"include",headers:{"Content-Type":"application/json"}}).then(a=>{a.status>=400?(console.log("Log in to GitHub again"),window.location.href="https://caesarchin.com//dashboard"):console.log("Authenticated")}).catch(a=>{console.log(a),window.location.href="https://caesarchin.com//dashboard"})};n.useEffect(()=>{l()},[]);const[c,t]=r.useState(s),d=()=>{window.localStorage.getItem("color-theme")==="dark"?(document.documentElement.classList.add("dark"),t(!0)):(document.documentElement.classList.remove("dark"),t(!1))};r.useEffect(()=>d(),[]);const o=()=>{localStorage.getItem("color-theme")?localStorage.getItem("color-theme")==="light"?(document.documentElement.classList.add("dark"),localStorage.setItem("color-theme","dark"),t(!0)):(document.documentElement.classList.remove("dark"),localStorage.setItem("color-theme","light"),t(!1)):document.documentElement.classList.contains("dark")?(document.documentElement.classList.remove("dark"),localStorage.setItem("color-theme","light"),t(!1)):(document.documentElement.classList.add("dark"),localStorage.setItem("color-theme","dark"),t(!0))};return e.jsxs("header",{className:"mb-4 flex flex-row justify-between ",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("a",{href:"/photography",className:"text-3xl hover:text-sea-foam-green dark:hover:text-dark-grayish-red",children:"Caesar Chin"}),e.jsxs("div",{className:"",children:[e.jsx("a",{href:"/",className:"underline underline-offset-8 hover:text-sea-foam-green dark:hover:text-dark-grayish-red",children:"full-stack developer"})," ","&"," ",e.jsx("a",{href:"/photography",className:"dark text-sea-foam-green underline underline-offset-8 hover:text-sea-foam-green dark:text-dark-grayish-red dark:hover:text-dark-grayish-red",children:"photographer"})]})]}),e.jsx("div",{className:"flex flex-col text-right",children:c?e.jsx("a",{className:"cursor-pointer hover:text-sea-foam-green dark:hover:text-dark-grayish-red",onClick:o,children:"Dark Mode"}):e.jsx("a",{className:"cursor-pointer hover:text-sea-foam-green dark:hover:text-dark-grayish-red",onClick:o,children:"Light Mode"})})]})}export{m as default};
