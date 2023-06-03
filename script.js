    // Exercise 1: Convert data format to series and labels
    const data1 = [];
    const series1 = [
    { name: "women", data: [] },
    { name: "men", data: [] },
    { name: "children", data: [] }
    ];
    const labels1 = [];

    for (let week = 1; week <= 1000; week++) {
    const weekData = {
        week: week,
        women: Math.floor(Math.random() * 1000),
        men: Math.floor(Math.random() * 1000),
        children: Math.floor(Math.random() * 1000)
    };

    data1.push(weekData);
    }

    data1.forEach((weekData, index) => {
    series1[0].data.push(weekData.women);
    series1[1].data.push(weekData.men);
    series1[2].data.push(weekData.children);
    labels1.push("W" + weekData.week);
    });

    console.log("Exercise 1:");
    console.log(series1);
    console.log(labels1);


    // Exercise 2: Convert data format to series and labels
    const data2 = [
    { week: 1, visits: 125, sex: "women" },
    { week: 1, visits: 200, sex: "men" },
    { week: 2, visits: 150, sex: "men" }
    ];

    const series2 = [];
    const labels2 = [];

    data2.forEach((weekData) => {
    const { week, visits, sex } = weekData;

    if (!series2.some((item) => item.name === sex)) {
        series2.push({ name: sex, data: [] });
    }

    const seriesIndex = series2.findIndex((item) => item.name === sex);
    series2[seriesIndex].data.push(visits);

    if (!labels2.includes("W" + week)) {
        labels2.push("W" + week);
    }
    });

    console.log("Exercise 2:");
    console.log(series2);
    console.log(labels2);
