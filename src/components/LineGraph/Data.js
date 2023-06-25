const Data = {
    labels: [
        "June 18",
        "June 19",
        "June 20",
        "June 21",
        "June 22",
        "June 23",
        "June 24",
        "June 25",
    ],
    datasets: [{
        label: "USD Earnings",
        data: [3506, 4567, 5588, 8400, 8000, 6482, 3235, 5213],
        fill: true, // Fill the area under the line
        backgroundColor: "rgba(151, 201, 60, 0.4)", // Set the fill color
        borderColor: "#374A16", // Set the line color
        tension: 0.3, // Make the line curve smoothly
        borderWidth: 0.5, // Adjust the border width here
    }]
}

export default Data;