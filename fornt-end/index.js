const formA = document.getElementById('formA')
const typeWOD = document.getElementById('type-wod')
const workoutA = document.getElementById('workoutA')
const createBtn = document.getElementById('create-btn')



formA.addEventListener('submit', (event) => {
    event.preventDefault()

    // alert('test')

    if (
    typeWOD.value === null ||
    workoutA.value === '' 
) {
    alert('Some or Many inputs were not filled out correctly')
    return
    }

    formA.reset()

})



