import{R as o}from"./index.f824fa59.js";import{j as e}from"./jsx-runtime.0209ad28.js";function m(){const[n,r]=o.useState(!1),[l,s]=o.useState(!1),d=async t=>{t.preventDefault(),await fetch("https://portfolio-website-api-production.up.railway.app/send_email",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t.target.name.value,email:t.target.email.value,message:t.target.message.value})}).then(a=>a.json()).then(a=>{a.success===!0?(s(!0),r(!0)):(s(!0),r(!1))}).catch(a=>{s(!0),r(!1)})};return e.jsxs("div",{children:[e.jsx("div",{className:"my-7 text-4xl",children:"Contact me if you have any questions or want to collaborate on a project!"}),e.jsxs("form",{className:"flex flex-col",onSubmit:d,children:[e.jsxs("label",{className:"mt-4 mb-2 flex flex-row font-murecho",children:["Your Name",e.jsx("p",{className:"text-red",children:"*"})]}),e.jsx("input",{className:"text:black mb-4 border-b-half border-faded-grey bg-white text-3xl dark:bg-darkish-cyan dark:text-white",type:"text",name:"name",required:!0,placeholder:"John Doe"}),e.jsxs("label",{className:"mt-4 mb-2 flex flex-row font-murecho",children:["Your Email",e.jsx("p",{className:"text-red",children:"*"})]}),e.jsx("input",{className:"text:black mb-4 border-b-half border-faded-grey bg-white text-3xl dark:bg-darkish-cyan dark:text-white",type:"email",name:"email",required:!0,placeholder:"johndoe@gmail.com"}),e.jsxs("label",{className:"mt-4 mb-2  flex flex-row font-murecho",children:["Message",e.jsx("p",{className:"text-red",children:"*"})]}),e.jsx("textarea",{className:"text:black mb-4 border-b-half border-faded-grey bg-white text-3xl dark:bg-darkish-cyan dark:text-white",name:"message",required:!0,placeholder:"Hi! I'm interested in working with you on a project."}),e.jsx("button",{className:"mt-4 w-28 rounded-full border-[2px] border-sea-foam-green text-center text-2xl leading-10 hover:bg-sea-foam-green dark:border-dark-grayish-red dark:hover:bg-dark-grayish-red",type:"submit",children:"Send"}),l?n&&l?e.jsx("div",{className:"mt-4 text-xl text-actual-green",children:"Email has been sent!"}):e.jsx("div",{className:"mt-4 text-xl text-actual-red",children:"There has been an error"}):""]})]})}export{m as default};
