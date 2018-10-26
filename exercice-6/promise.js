let getStudents = new Promise(function(resolve, reject) {
    setTimeout(function() { 
        resolve([
            {
                'name': 'Charle',
                'cours': [1,2,3],
            },
            {
                'name': 'Jean',
                'cours': [1,3],
            },
            {
                'name': 'Lea',
                'cours': [2],
            }
        ]);
    }, 1500);
});

let getCourses = new Promise(function(resolve, reject) {
    setTimeout(function() { 
        resolve([
            {
                'id': 1,
                'name': 'JS',
            },
            {
                'id': 2,
                'name': 'PHP',
            },
            {
                'id': 3,
                'name': 'C#',
            }
        ]);
    }, 2500);
});

let mapping = Promise.all([getStudents, getCourses]).then(function (values) {
    let students = values[0]
    let courses  = values[1]

    for (let i = 0; i < students.length; i++) {
        for (let j = 0; j < students[i]['cours'].length; j++) {
            
        }
    }
})