let studentsScore = [
    {
        name: 'Andi',
        score: 90
    },
    {
        name: 'Rudi',
        score: 80
    },
    {
        name: 'Dira',
        score: 100
    },
];

var motoGP = [
    {
        circuit: 'Losail',
        location: 'Qatar',
        winner: {
            firstName: 'Andrea',
            lastName: 'Dovizioso',
            country: 'Italy'
        }
    },
    {
        circuit: 'Autodromo',
        location: 'Argentina',
        winner: {
            firstName: 'Cal',
            lastName: 'Crutchlow',
            country: 'UK'
        }
    },
    {
        circuit: 'De Jerez',
        location: 'Spain',
        winner: {
            firstName: 'Valentino',
            lastName: 'Rossi',
            country: 'Italy'
        }
    },
    {
        circuit: 'Mugello',
        location: 'Italy',
        winner: {
            firstName: 'Andrea',
            lastName: 'Dovizioso',
            country: 'Italy'
        }
    }
];

let countries = {
    Italy: {
        winningCircuits: [
            { name: 'Andrea Dovizioso', winLocation: 'Losail, Qatar' },
            { name: 'Valentino Rossi', winLocation: 'De Jerez, Spain' },
            { name: 'Andrea Dovizioso', winLocation: 'Mugello, Italy' }
        ],
        totalWin: 3
    },
    UK: {
        winningCircuits: [
            { name: 'Cal Crutchlow', winLocation: 'Autodromo, Argentina' }
        ],
        totalWin: 1
    }
};

console.log(studentsScore);
console.log(motoGP);
console.log(countries);
