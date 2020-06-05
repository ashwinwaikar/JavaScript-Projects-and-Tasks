console.log("this is cv screener project");

// data is the array of objects which contains information about the candidates
const data = [
    {
        name: "Ashwin Waikar",
        age: 23,
        city: "Nagpur",
        language: "Javascript",
        framework: "Django",
        image: "https://randomuser.me/api/portraits/men/75.jpg"
    },
    {
        name: "Himanshu Raulkar",
        age: 26,
        city: "Bhandara",
        language: "Core Java",
        framework: "Angular",
        image: "https://randomuser.me/api/portraits/men/15.jpg"
    },
    {
        name: "Aryaneel Deshpande",
        city: "Amravati",
        age: 29,
        language: "Python",
        framework: "Flask",
        image: "https://randomuser.me/api/portraits/men/23.jpg"
    },
    {
        name: "Akhilesh Deshmukh",
        city: "Hinganghat",
        age: 32,
        language: "Ruby",
        framework: "Django",
        image: "https://randomuser.me/api/portraits/men/35.jpg"
    },
    {
        name: "Trunal Dhandale",
        city: "Sakoli",
        age: 20,
        language: "Advance Java",
        framework: "Angular",
        image: "https://randomuser.me/api/portraits/men/56.jpg"
    }
]

//CV ITERATOR
function cvIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < profiles.length ? { value: profiles[nextIndex++], done: false } : { done: true }
        }
    }
}
const candidates = cvIterator(data);

//to load atleast 1st Cv when we load page for the first time
nextCV();
//Button listener for next button

let next = document.getElementById("next");
next.addEventListener("click", nextCV);

function nextCV() {
    const currentCandidate = candidates.next().value;
    if (currentCandidate != undefined) {
        let image = document.getElementById("image");
        image.innerHTML = `<img src="${currentCandidate.image}">`;

        let profile = document.getElementById("profile");
        profile.innerHTML = `<ul class="list-group">
                                <li class="list-grpop-item">Name: ${currentCandidate.name}</li>
                                <li class="list-grpop-item">${currentCandidate.age} Years Old</li>
                                <li class="list-grpop-item">Lives in ${currentCandidate.city}</li>
                                <li class="list-grpop-item">Primarily works on ${currentCandidate.language}</li>
                                <li class="list-grpop-item">Uses ${currentCandidate.framework} Framework</li>
                            </ul>`;
    }
    else {
        alert("End of candidate applications");
        window.location.reload();
    }
}