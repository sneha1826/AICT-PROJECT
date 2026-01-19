function Check(event) {
    event.preventDefault();
    let weight = Number(document.getElementById("weight").value);
    let fats = Number(document.getElementById("fats").value);
    let carbs = Number(document.getElementById("carbs").value);
    let proteins = Number(document.getElementById("proteins").value);

    
    if (weight > 0 && fats > 0 && carbs > 0 && proteins > 0) {
        // conditions for fats
        if (fats >= weight * 0.5 && fats <= weight * 1.2) {
            document.getElementById("fat-status").innerText = "Balanced";
            document.getElementById("fat-status").style.color = "#00bfff";
        }
        else if (fats > weight * 1.2) {
            document.getElementById("fat-status").innerText = "Too high"
            document.getElementById("fat-status").style.color = "red";

        }
        else {
            document.getElementById("fat-status").innerText = "Too low"
            document.getElementById("fat-status").style.color = "orange";
        }
        // for carbs
        if (carbs >= weight * 3 && carbs <= weight * 5) {
            document.getElementById("carb-status").innerText = "Balanced";
            document.getElementById("carb-status").style.color = "#00bfff";
        }
        else if (carbs > weight * 5) {
            document.getElementById("carb-status").innerText = "Too high"
            document.getElementById("carb-status").style.color = "red";
        }
        else {
            document.getElementById("carb-status").innerText = "Too low"
            document.getElementById("carb-status").style.color = "orange";
        }
        // for proteins
        if (proteins >= weight * .8 && proteins <= weight * 1.2) {
            document.getElementById("protein-status").innerText = "Balanced";
            document.getElementById("protein-status").style.color = "#00bfff";
        }
        else if (proteins > weight * 1.2) {
            document.getElementById("protein-status").innerText = "Too high"
            document.getElementById("protein-status").style.color = "red";
        }
        else {
            document.getElementById("protein-status").innerText = "Too low"
            document.getElementById("protein-status").style.color = "orange";
        }


        document.getElementById("fat-in").innerHTML = fats + "g";
        document.getElementById("carb-in").innerHTML = carbs + "g";
        document.getElementById("protein-in").innerHTML = proteins + "g";

        document.getElementById("fat-required").innerHTML = (weight * 0.5) + "g - " + (weight * 1.2) + "g";
        document.getElementById("carb-required").innerHTML = (weight * 3) + "g - " + (weight * 5) + "g";
        document.getElementById("protein-required").innerHTML = (weight * .8) + "g - " + (weight * 1.2) + "g";

        document.getElementById("result").style.display = "block";
    }
    else {
        alert("Only positive numbers are allowed");
    }
}