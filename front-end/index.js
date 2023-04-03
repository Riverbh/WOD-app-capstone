

const formA = document.getElementById('formA')
const typeWOD = document.getElementById('type-wod')
const workoutA = document.getElementById('workoutA')
const createBtn = document.getElementById('create-btn')
const completed = document.getElementById('completed')
const programedWODList = document.getElementById('wod-list')
const deleteWODBtn = document.getElementById('delete')

getProgramedWODs()


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

    let body = {
        typeWODInput: typeWOD.value ,
        workoutInput: workoutA.value ,
        completedInput: completed.checked 
    }
    // console.log(typeWODInput, workoutInput, completedInput)

    axios.post('http://localhost:4000/wod', body)
        .then(() => {
            typeWOD.value = ''
            workoutA.value = ''
            completed.checked = false

            getProgramedWODs()
        })


})


function getProgramedWODs() {
    programedWODList.innerHTML = ''

    axios.get('http://localhost:4000/wod')
        .then(res => {
            res.data.forEach(elem => {
                console.log(elem)
                let wodCard = `<div class="country-card">
                <p>Type of workout: ${elem.wod_type}</p>
                <h4>Workout: ${elem.wod}</h4>
                <label>Click when Completed</label>
                <button wod-id="${elem.wod_id}" onclick="deleteProgramedWODs(event)" id="delete">Completed</button>
                </div>`

                programedWODList.innerHTML += wodCard
            })
        })
}




function deleteProgramedWODs(event) {
    let wodId = event.target.getAttribute('wod-id')
    let btn = event.target
    alert(wodId)

    //  axios.delete(`http://localhost:4000/wod/${wodId}`)
    // .then((result) => {
    //   alert("Workout Completed!");
    //   console.log(result.data);
    // });


    // let deleteBtn = deleteWODBtn.value


    axios.delete('/wod/' + wodId)
    .then((result) => {
        alert("Workout Completed!")
        console.log(result.data)
    })
}




