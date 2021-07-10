document.querySelectorAll('.accordion__question').forEach(item => {
    item.addEventListener('click', () => {
        console.log('click');
        if(!item.classList.contains('collapsing')) {
            if (!item.classList.contains('open')) {
                console.log('button toggled');
                item.nextElementSibling.style.display = "block";
    
                let height = item.nextElementSibling.clientHeight;
                console.log(" acc_collapse height: " + height)
    
                setTimeout(()=> {
                    item.nextElementSibling.style.height = height + "px";
                    item.nextElementSibling.style.display = "";
                },1);
           
                item.nextElementSibling.classList = "accordion__collapse collapsing";
                setTimeout(() => {
                    console.log('content opened');
                    item.nextElementSibling.classList = "accordion__collapse collapse open";
                }, 250);
            } else {
                item.nextElementSibling.classList = "accordion__collapse collapsing";
    
                setTimeout(()=> {
                item.nextElementSibling.style.height = "0px";
                },1) ;
                setTimeout(() => {
                    console.log('close content');
                    item.nextElementSibling.classList = "accordion__collapse collapse";
                    item.nextElementSibling.style.height = "";
                }, 250);
    
            }
            item.classList.toggle('open');
        }
        else {
            setTimeout(1);
        }
       

    });
});