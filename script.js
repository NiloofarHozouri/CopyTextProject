const copyBtn=document.querySelector('button');
const textarea=document.querySelector('textarea');

copyBtn.addEventListener("click" , ()=>{
    textarea.select();
    let textValue = textarea.value;
    navigator.clipboard.writeText(textValue);
    copyBtn.innerHTML='کپی شد'
    copyBtn.style.background='#03A9F4';
    setTimeout(() => {
        copyBtn.innerHTML='کپی شد'
        copyBtn.style.background='#B3E5FC';
    }, 1500);
});