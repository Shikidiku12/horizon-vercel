const Data = {
    labels: [2016, 2017, 2018, 2019, 2020],
    datasets: [{
        label: "Users Gained",
        data: [8000, 45677, 78888, 9000, 8000],
        fill: true, // Fill the area under the line
        backgroundColor: "rgba(151, 201, 60, 0.4)", // Set the fill color
    }],
    options: {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    },
    userData: [
        {
            id: 1,
            year: 2016,
            userGain: 8000,
            userLost: 823,
        },
        {
            id: 2,
            year: 2017,
            userGain: 45677,
            userLost: 345,
        },
        {
            id: 3,
            year: 2018,
            userGain: 78888,
            userLost: 555,
        },
        {
            id: 4,
            year: 2019,
            userGain: 9000,
            userLost: 653,
        },
        {
            id: 5,
            year: 2020,
            userGain: 8000,
            userLost: 823,
        },
    ]
}

export default Data;