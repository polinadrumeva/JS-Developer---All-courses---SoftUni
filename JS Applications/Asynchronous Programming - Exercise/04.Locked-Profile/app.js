async function lockedProfile() {
    let mainElement = document.getElementById('main');
    mainElement.innerHTML = '';

    const url = `http://localhost:3030/jsonstore/advanced/profiles`;
    const response = await fetch(url);
    const data = await response.json();

    const profilesData = Object.values(data);
    profilesData.forEach((k,v) => {
        let user = document.createElement('div');
        user.classList.add('profile');
        let id = v + 1;
        user.innerHTML = `<img src="./iconProfile2.png" class="userIcon" />
        <label>Lock</label>
        <input type="radio" name="user${id}Locked" value="lock" checked>
        <label>Unlock</label>
        <input type="radio" name="user${id}Locked" value="unlock"><br>
        <hr>
        <label>Username</label>
        <input type="text" name="user${id}Username" value="${k.username}" disabled readonly />
        <div id="hidden" style="display:none">
            <hr>
            <label>Email:</label>
            <input type="email" name="user${id}Email" value="${k.email}" disabled readonly />
            <label>Age:</label>
            <input type="text" name="user${id}Age" value="${k.age}" disabled readonly />
        </div>
        
        <button>Show more</button>`;
        mainElement.appendChild(user);
    });

    let buttonsElements = document.querySelectorAll('div button');
    for (let i = 0; i < buttonsElements.length; i++) {
        let button = buttonsElements[i];
        let profileElement = button.parentElement;
        let lockedElement = profileElement.querySelector('input[value="lock"]');
        let hiddenInfoElement = profileElement.querySelector(`#hidden`);

        button.addEventListener('click', () => {

            if (!lockedElement.checked && button.textContent == 'Show more') {
                hiddenInfoElement.style.display = 'block';
                button.textContent = 'Hide it';
            } else if (!lockedElement.checked && button.textContent == 'Hide it') {
                hiddenInfoElement.style.display = 'none';
                button.textContent = 'Show more';
            }
        });
    }
}

