var name = 'zz'
function showName() {
    var name2 = 'tt';
    console.log(name);
    function add() {
        console.log('嵌套：',name2);
    }
    add();
}
showName();
// if () {
    
// }
// else {

// }
// switch () {

// }
{
    var name1 = 'cc';
    name = 'zc';
    {

    }
}
console.log(name1);
// console.log(name2); // Error