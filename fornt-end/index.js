const formA = document.getElementsByClassName('formA')
const nameA = document.getElementsByClassName('nameA')
const date = document.getElementsByClassName('date')
const typeWOD = document.getElementsByClassName('type-wod')
const workoutA = document.getElementsByClassName('workoutA')
const yesBtn = document.getElementsByClassName('yes')
const noBtn = document.getElementsByClassName('no')


formA.addEventListener('submit', (event) => {
    event.preventDefault()

    if (
    nameA.value === '' ||
    isNaN(+date.value) ||
    isNaN(+typeWOD.value) ||
    workoutA.value === '' ||
    isNaN(+yesBtn.value) ||
    isNaN(+noBtn.value)
) {
    alert('Some or Many inputs were not filled out correctly')
    return
}

})

