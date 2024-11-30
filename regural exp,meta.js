//regural expression is to check given characters or string has or not.
//syntax: /pattern/[flags] or  new RegExp('pattern',[flags])
//ans=new RegExp()
//console.log(ans);

re=/[aZ]/
result=re.test("Ais the first Charactet")
console.log(result);

// /hello/->string has any whare in the passed string return true.
// /^hello/ -hello is placed first it return true,
// after any charcters no issue .except first place false .
// /hello/i - it check lower case or upper case not characters.
// /h$/ - the charecter or string of first and last same it return true.
// [....] -any one charecter 
// [^....] - any one charecter not between backtes.
// [0-9] -any number 0to 9.
// [a-z]- any lower case and [A-Z] -any upper case [a-Z]-any lower or upper
// /ab*/- only a and b give zero to infinite times not include other alphbets.
// /a+/ -match one or more times.
// /as?/-march zero or one time
// /ac{3}/ -match exactly 3 times c.
// /ac{3,}/ -match atleast 3 times .
// /ac{1,4}/ -match exactly 1 to 4 times.
// /he.llo/ -in the dot place we can use any charcter or symbol.
