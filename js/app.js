const searchInput = document.querySelector('.search_content input')
const searchBtn = document.querySelector('.search_content .search_button')
const graduateList = document.querySelector('.list')
const graduateCard = document.querySelectorAll('.list_item')
const graduateName = document.querySelectorAll('.name')


searchBtn.addEventListener('click', () => {
    search(graduateCard, graduateList)
})

document.onkeypress = e => {
    if (e.key === 'Enter') {
        search(graduateCard, graduateList)
    }
}

const search = (card) => {

    let currentText = searchInput.value.toLowerCase().trim().replace('ô', 'o').replace('é', 'e').replace('è', 'è')

    card.forEach(element => {
        isFind = element.innerText.toLowerCase().trim().replace('ô', 'o').replace('é', 'e').replace('è', 'e').includes(currentText);

        if (isFind) {
            element.style.display = 'flex'
        } else {
            element.style.display = 'none'
        }
        
    });
}

