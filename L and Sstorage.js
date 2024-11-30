//local storage is parmenent.
//session storage is temporary. when we delete tab its clear all.
//it includes key and value
localStorage.setItem('id',121);
localStorage.setItem('age',29)
localStorage.removeItem('id')
//all clear
localStorage.clear()
localStorage.getItem('id');
//return no of items
localStorage.length
//all as above
sessionStorage.setItem()
var s={'name':'uday','class':21,'group':'bcom'}
localStorage.setItem('details',JSON.stringify(s))