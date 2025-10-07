const searchInput = document.querySelector('.search_content input')
const searchBtn = document.querySelector('.search_content .search_button')
const graduateList = document.querySelector('.list')

const displayGraduates = (graduates) => {
    graduateList.innerHTML = '';
    graduates.forEach(graduate => {
        const graduateCard = document.createElement('div');
        graduateCard.classList.add('list_item');
        graduateCard.innerHTML = `
            <div class="icon">
                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12 2 0 9 12 16 22 10.1667V17.5H24V9L12 2ZM3.99902 13.4905V18.0001C5.82344 20.429 8.72812 22.0001 11.9998 22.0001 15.2714 22.0001 18.1761 20.429 20.0005 18.0001L20.0001 13.4913 12.0003 18.1579 3.99902 13.4905Z" />
                </svg>
            </div>
            <div class="info">
                <h3 class="name">${graduate.name}</h3>
                <span>${graduate.date}</span>
            </div>
        `;
        graduateList.appendChild(graduateCard);
    });
}

const search = (graduates) => {
    let currentText = searchInput.value.toLowerCase().trim().replace('ô', 'o').replace('é', 'e').replace('è', 'e');
    const filteredGraduates = graduates.filter(graduate => {
        const graduateText = `${graduate.name} ${graduate.date}`.toLowerCase().trim().replace('ô', 'o').replace('é', 'e').replace('è', 'e');
        return graduateText.includes(currentText);
    });
    displayGraduates(filteredGraduates);
}

fetch('./js/graduates.json')
    .then(response => response.json())
    .then(graduates => {
        displayGraduates(graduates);
        searchBtn.addEventListener('click', () => {
            search(graduates)
        })

        document.onkeypress = e => {
            if (e.key === 'Enter') {
                search(graduates)
            }
        }
    });