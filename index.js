async function displayPrizes(){
    const response=await axios.get("https://ignoble-api.herokuapp.com/prizes?year=2020");
    const prizeList=document.getElementById("prize-list");
    for (const prize of response.data.prizes) {
        const listItem=document.createElement("li");
        listItem.textContent=prize.year + " - " + prize.type + " - " + prize.description;
        prizeList.appendChild(listItem);
    }
}

displayPrizes();

