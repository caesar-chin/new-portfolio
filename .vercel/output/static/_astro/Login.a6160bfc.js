import{r as n}from"./index.f824fa59.js";import{D as l}from"./DarkModeButton.08f577fa.js";import{j as e}from"./jsx-runtime.0209ad28.js";function x({darkMode:t}){const[a,s]=n.useState(!1),o=async()=>{console.log("https://portfolio-website-api-production.up.railway.app/auth/github"),window.location.href="https://portfolio-website-api-production.up.railway.app/auth/github",s(!0)},i=async()=>{await fetch("https://portfolio-website-api-production.up.railway.app/test_cookies",{method:"GET",credentials:"include",headers:{"Content-Type":"application/json"}}).then(r=>r.json()).then(r=>console.log(r)).catch(r=>console.log(r))};return e.jsxs("div",{children:[e.jsxs("div",{className:"flex flex-row justify-between",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("a",{href:"/photography",className:"text-3xl hover:text-sea-foam-green dark:hover:text-dark-grayish-red",children:"Caesar Chin"}),e.jsxs("div",{className:"",children:[e.jsx("a",{href:"/",className:"underline underline-offset-8 hover:text-sea-foam-green dark:hover:text-dark-grayish-red",children:"full-stack developer"})," ","&"," ",e.jsx("a",{href:"/photography",className:"dark text-sea-foam-green underline underline-offset-8 hover:text-sea-foam-green dark:text-dark-grayish-red dark:hover:text-dark-grayish-red",children:"photographer"})]})]}),e.jsx("div",{children:e.jsx(l,{darkMode:t})})]}),e.jsx("div",{className:"flex justify-center ",children:e.jsxs("div",{className:"mt-16 ",children:[e.jsx("div",{className:"text-md text-center",children:"Login for Dashboard"}),e.jsx("div",{className:"mt-8",children:a?e.jsx("div",{className:"text-center",children:"Authorizing..."}):e.jsx("div",{className:"text-center underline hover:cursor-pointer hover:!text-sea-foam-green dark:hover:!text-dark-grayish-red",onClick:o,children:"Log in with GitHub"})}),e.jsx("div",{className:"text-center underline hover:cursor-pointer hover:!text-sea-foam-green dark:hover:!text-dark-grayish-red",onClick:i,children:"Test"})]})})]})}export{x as default};
