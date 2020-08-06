let btns = document.getElementsByClassName('btn');
for(let i=0; i < btns.length; i++) {
  let btn = btns[i];
  btn.addEventListener('click', (e) => {
    let span = document.createElement("span");
    span.style.top = e.clientY - e.currentTarget.offsetTop + 'px';
    span.style.left = e.clientX - e.currentTarget.offsetLeft + 'px';
    e.currentTarget.appendChild(span);
    setTimeout(() => {
      span.remove();
    }, 1000);
  })
}
