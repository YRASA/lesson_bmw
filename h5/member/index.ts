interface MembersEntity {
    id: number;
    name: string;
    avatar: string;
    telephone: number;
    hometown: string;
}
const members: MembersEntity[] = [
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
]

const tbody = document.querySelector('#member tbody');
// 从json数组变成了html数组
tbody.innerHTML = members.map((member) => {
    return`
        <tr>
            <td>${member.id}</td>
            <td>${member.name}</td>
            <td>
                <img src="${member.avatar}" />
            </td>
            <td>${member.telephone}</td>
            <td>${member.hometown}</td>
        </tr>
    `
}).join("")
const forms = document.querySelector('form');
forms.addEventListener('submit', function(event) {
    event.preventDefault();
    const id = forms.idInput.value;
    const name = forms.nameInput.value;
    const avatar = forms.avatarInput.value;
    const telephone = forms.telephoneInput.value;
    const hometown = forms.hometownInput.value;
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <tr>
            <td>${id}</td>
            <td>${name}</td>
            <td>
                <img src="${avatar}" />
            </td>
            <td>${telephone}</td>
            <td>${hometown}</td>
        </tr>
    `
    tbody.appendChild(tr);
})