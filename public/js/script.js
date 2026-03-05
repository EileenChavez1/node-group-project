fetch("/api/visits")
.then(response => response.json())
.then(data => {

    const visitorElement = document.getElementById("visitCount");

    if (visitorElement) {

        const page = visitorElement.dataset.page;

        visitorElement.textContent =
            "This page has been visited " + data[page] + " times.";

    }

});