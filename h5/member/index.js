var members = [
    {
        id: 57238,
        name: 'Tom',
        avatar: "http://p1.music.126.net/slpd09Tf5Ju82Mv-h8MP4w==/3440371884651965.jpg?param=40y40",
        telephone: 18357475934,
        hometown: 'shanghai'
    },
    {
        id: 12589,
        name: 'John',
        avatar: "http://p2.music.126.net/y5-sM7tjnxnu_V9LWKgZlw==/7942872001461517.jpg?param=40y40",
        telephone: 19423547658,
        hometown: 'hangzhou'
    },
    {
        id: 69342,
        name: 'Bob',
        avatar: "http://p2.music.126.net/xa1Uxrrn4J0pm_PJwkGYvw==/3130309604335651.jpg?param=40y40",
        telephone: 18423583948,
        hometown: 'xiameng'
    }
];
var tbody = document.querySelector('#member tbody');
// 从json数组变成了html数组
tbody.innerHTML = members.map(function (member) {
    return "\n        <tr>\n            <td>" + member.id + "</td>\n            <td>" + member.name + "</td>\n            <td>\n                <img src=\"" + member.avatar + "\" />\n            </td>\n            <td>" + member.telephone + "</td>\n            <td>" + member.hometown + "</td>\n        </tr>\n    ";
}).join("");
