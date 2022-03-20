const dhaka = document.getElementById("dhaka");
const chittagong = document.getElementById("chittagong");
const rajshahi = document.getElementById("rajshahi");
const khulna = document.getElementById("khulna");
const sylhet = document.getElementById("sylhet");
const barisal = document.getElementById("barisal");
const rangpur = document.getElementById("rangpur");
const mymensingh = document.getElementById("mymensingh");

const ui = (id) => {
    if (id === "dhaka") {
        dhaka.style.display = "block";
        chittagong.style.display = "none";
        rajshahi.style.display = "none";
        khulna.style.display = "none";
        sylhet.style.display = "none";
        barisal.style.display = "none";
        rangpur.style.display = "none";
        mymensingh.style.display = "none";
    }
    else if (id === "chittagong") {
        dhaka.style.display = "none";
        chittagong.style.display = "block";
        rajshahi.style.display = "none";
        khulna.style.display = "none";
        sylhet.style.display = "none";
        barisal.style.display = "none";
        rangpur.style.display = "none";
        mymensingh.style.display = "none";
    }
    else if (id === "rajshahi") {
        dhaka.style.display = "none";
        chittagong.style.display = "none";
        rajshahi.style.display = "block";
        khulna.style.display = "none";
        sylhet.style.display = "none";
        barisal.style.display = "none";
        rangpur.style.display = "none";
        mymensingh.style.display = "none";
    }
    else if (id === "khulna") {
        dhaka.style.display = "none";
        chittagong.style.display = "none";
        rajshahi.style.display = "none";
        khulna.style.display = "block";
        sylhet.style.display = "none";
        barisal.style.display = "none";
        rangpur.style.display = "none";
        mymensingh.style.display = "none";
    }
    else if (id === "sylhet") {
        dhaka.style.display = "none";
        chittagong.style.display = "none";
        rajshahi.style.display = "none";
        khulna.style.display = "none";
        sylhet.style.display = "block";
        barisal.style.display = "none";
        rangpur.style.display = "none";
        mymensingh.style.display = "none";
    }
    else if (id === "barisal") {
        dhaka.style.display = "none";
        chittagong.style.display = "none";
        rajshahi.style.display = "none";
        khulna.style.display = "none";
        sylhet.style.display = "none";
        barisal.style.display = "block";
        rangpur.style.display = "none";
        mymensingh.style.display = "none";
    }
    else if (id === "rangpur") {
        dhaka.style.display = "none";
        chittagong.style.display = "none";
        rajshahi.style.display = "none";
        khulna.style.display = "none";
        sylhet.style.display = "none";
        barisal.style.display = "none";
        rangpur.style.display = "block";
        mymensingh.style.display = "none";
    }
    else if (id === "mymensingh") {
        dhaka.style.display = "none";
        chittagong.style.display = "none";
        rajshahi.style.display = "none";
        khulna.style.display = "none";
        sylhet.style.display = "none";
        barisal.style.display = "none";
        rangpur.style.display = "none";
        mymensingh.style.display = "block";
    }

}

const division = (mainId) => {
    const id = mainId.toLowerCase();
    fetch(`https://api.pray.zone/v2/times/today.json?city=${id}&timeformat=1`)
        .then(res => res.json())
        .then(data => {
            const { date, times } = data.results.datetime[0];
            document.getElementById(id).innerHTML = `
            <div class="border border-3 p-3">
            <div class="bg-danger p-3 fw-bold text-white rounded-3 my-3">
            <h6>Division : ${mainId}</h6>
            <h6>Date : ${date.gregorian ? date.gregorian : ""}</h6>
             </div>
            <div class="d-lg-flex justify-conter-center align-items-center ">
            <div class="card text-white bg-primary mb-3 me-2" style="max-width: 18rem;">
            <div class="card-header">Imsak</div>
            <div class="card-body">
                <h5 class="card-title">${times.Imsak ? times.Imsak : ""}</h5>
            </div>
            </div>
            <div class="card text-white bg-secondary mb-3 me-2" style="max-width: 18rem;">
            <div class="card-header">Fajr</div>
            <div class="card-body">
                <h5 class="card-title">${times.Fajr ? times.Fajr : ""}</h5>
            </div>
            </div>
            <div class="card text-white bg-success mb-3 me-2" style="max-width: 18rem;">
            <div class="card-header">Sunrise</div>
            <div class="card-body">
                <h5 class="card-title">${times.Sunrise ? times.Sunrise : ""}</h5>
                
            </div>
            </div>
            <div class="card text-white bg-danger mb-3 me-2" style="max-width: 18rem;">
            <div class="card-header">Dhuhr</div>
            <div class="card-body">
                <h5 class="card-title">${times.Dhuhr ? times.Dhuhr : ""}</h5>
                
            </div>
            </div>
            <div class="card text-dark bg-warning mb-3 me-2" style="max-width: 18rem;">
            <div class="card-header">Asr</div>
            <div class="card-body">
                <h5 class="card-title">${times.Asr ? times.Asr : ""}</h5>
                
            </div>
            </div>
            <div class="card text-dark bg-info mb-3 me-2" style="max-width: 18rem;">
            <div class="card-header">Sunset</div>
            <div class="card-body">
                <h5 class="card-title">${times.Sunset ? times.Sunset : ""}</h5>
                
            </div>
            </div>
            <div class="card text-dark bg-light mb-3 me-2" style="max-width: 18rem;">
            <div class="card-header">Maghrib</div>
            <div class="card-body">
                <h5 class="card-title">${times.Maghrib ? times.Maghrib : ""}</h5>
                
            </div>
            </div>
            <div class="card text-white bg-dark mb-3 me-2" style="max-width: 18rem;">
            <div class="card-header">Isha</div>
            <div class="card-body">
                <h5 class="card-title">${times.Isha ? times.Isha : ""}</h5>
                
            </div>
            </div> </div>
            </div>
    `
        });

}

division("Dhaka");
division("Chittagong");
division("Rajshahi");
division("Khulna");
division("Sylhet");
division("Barisal");
division("Rangpur");
division("Mymensingh");