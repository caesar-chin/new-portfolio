import{r as e}from"./index.f824fa59.js";import{j as a}from"./jsx-runtime.0209ad28.js";function c({darkMode:s}){const t=async()=>{await fetch("http://localhost:8001/test_cookies",{method:"GET",credentials:"include",headers:{"Content-Type":"application/json"}}).then(o=>{o.status>=400?(console.log("Log in to GitHub again"),window.location.href=`${{}.HOMEPAGE_URL}/dashboard`):console.log("Authenticated")}).catch(o=>{console.log(o),window.location.href=`${{}.HOMEPAGE_URL}/dashboard`})};return e.useEffect(()=>{t()},[]),a.jsx("div",{children:"Edit"})}export{c as default};
