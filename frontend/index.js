document.getElementById("start").addEventListener("click", async () => {
    try {
        const fetchData = await fetch("http://localhost:4000");
        const data = await fetchData.json();
        const dateTime = document.getElementById("date-time");
        dateTime.innerHTML = `These are the most happening topics as on ${new Date(data.data.endDateTime).toLocaleString()}`;
        const container = document.getElementById("container");
        container.innerHTML = ""; 
        const trends = [data.data.trend1, data.data.trend2, data.data.trend3, data.data.trend4, data.data.trend5];
        trends.forEach((trend) => {
            const listItem = document.createElement("li");
            listItem.textContent = trend;
            container.appendChild(listItem);
        });
        const ip = document.getElementById("ip");
        ip.innerHTML = `The IP address used for this query was ${data.data.ipAddress}`;
        const jsonExtract = document.getElementById("json-extract");
        const jsonData = [
            {
                _id: { $oid: data.data.uniqueId },
                nameoftrend1: data.data.trend1,
                nameoftrend2: data.data.trend2,
                nameoftrend3: data.data.trend3,
                nameoftrend4: data.data.trend4,
                nameoftrend5: data.data.trend5,
            },
        ];
        jsonExtract.textContent = JSON.stringify(jsonData, null, 2); 
    } catch (err) {
        console.error(err);
        const restart = document.getElementById("restart");
        restart.innerHTML = "An error occurred while running the script. Please try again.";
    }
});
