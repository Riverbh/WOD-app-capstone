const formA = document.getElementById('formA')
const typeWOD = document.getElementById('type-wod')
const workoutA = document.getElementById('workoutA')




formA.addEventListener('submit', (event) => {
    event.preventDefault()

    // alert('test')

    if (
    isNaN(+typeWOD.value) ||
    workoutA.value === '' 
) {
    alert('Some or Many inputs were not filled out correctly')
    return
    }
})

