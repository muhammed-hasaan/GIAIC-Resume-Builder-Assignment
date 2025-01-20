// Step 1: Personal Details
document.getElementById("next-1").addEventListener("click", function () {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    if (name && email) {
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        document.getElementById("step-1").style.display = "none";
        document.getElementById("step-2").style.display = "block";
        document.getElementById("step-3").style.display = "none";
        document.getElementById("step-4").style.display = "none";
        document.getElementById("step-5").style.display = "none";
    }
    else {
        alert("Please fill out all fields.");
    }
});
// Step 2: Contact Details
document.getElementById("next-2").addEventListener("click", function () {
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    if (phone && address) {
        localStorage.setItem("phone", phone);
        localStorage.setItem("address", address);
        document.getElementById("step-1").style.display = "none";
        document.getElementById("step-2").style.display = "none";
        document.getElementById("step-3").style.display = "block";
        document.getElementById("step-4").style.display = "none";
        document.getElementById("step-5").style.display = "none";
    }
    else {
        alert("Please fill out all fields.");
    }
});
// Step 3: Skills and Experience
document.getElementById("next-3").addEventListener("click", function () {
    var skills = document.getElementById("skills").value;
    var experience = document.getElementById("experience").value;
    if (skills && experience) {
        localStorage.setItem("skills", skills);
        localStorage.setItem("experience", experience);
        document.getElementById("step-1").style.display = "none";
        document.getElementById("step-2").style.display = "none";
        document.getElementById("step-3").style.display = "none";
        document.getElementById("step-4").style.display = "block";
        document.getElementById("step-5").style.display = "none";
    }
    else {
        alert("Please fill out all fields.");
    }
});
// Step 4: Additional Information
document.getElementById("next-4").addEventListener("click", function () {
    var jobObjective = document.getElementById("job-objective").value;
    var education = document.getElementById("education").value;
    var languages = document.getElementById("languages").value;
    var certifications = document.getElementById("certifications").value;
    var hobbies = document.getElementById("hobbies").value;
    if (jobObjective && education && languages && certifications && hobbies) {
        localStorage.setItem("job-objective", jobObjective);
        localStorage.setItem("education", education);
        localStorage.setItem("languages", languages);
        localStorage.setItem("certifications", certifications);
        localStorage.setItem("hobbies", hobbies);
        document.getElementById("step-1").style.display = "none";
        document.getElementById("step-2").style.display = "none";
        document.getElementById("step-3").style.display = "none";
        document.getElementById("step-4").style.display = "none";
        document.getElementById("step-5").style.display = "flex";
    }
    else {
        alert("Please fill out all fields.");
    }
});
// Step 5: Resume Preview
document.getElementById("share-resume").addEventListener("click", function () {
    var shareData = new URLSearchParams({
        name: localStorage.getItem("name"),
        email: localStorage.getItem("email"),
        phone: localStorage.getItem("phone"),
        address: localStorage.getItem("address"),
        skills: localStorage.getItem("skills"),
        experience: localStorage.getItem("experience"),
        jobObjective: localStorage.getItem("job-objective"),
        education: localStorage.getItem("education"),
        languages: localStorage.getItem("languages"),
        certifications: localStorage.getItem("certifications"),
        hobbies: localStorage.getItem("hobbies")
    }).toString();
    // Create the link to share the resume
    var resumeLink = "https://giaic-resume-builder-assignment.vercel.app/ViewResume.html?".concat(shareData);
    // Copy the resume link to the clipboard
    navigator.clipboard.writeText(resumeLink)
        .then(function () {
        alert("Resume link copied to clipboard");
    })
        .catch(function (err) {
        alert("Failed to copy the link. Please try again.");
        console.error("Error copying link: ", err);
    });
});
// Display data if it's in the URL
setInterval(function () {
    document.getElementById("preview-name").textContent = localStorage.getItem("name") || "";
    document.getElementById("preview-email").textContent = localStorage.getItem("email") || "";
    document.getElementById("preview-phone").textContent = localStorage.getItem("phone") || "";
    document.getElementById("preview-address").textContent = localStorage.getItem("address") || "";
    document.getElementById("preview-skills").textContent = localStorage.getItem("skills") || "";
    document.getElementById("preview-experience").textContent = localStorage.getItem("experience") || "";
    document.getElementById("preview-job-objective").textContent = localStorage.getItem("job-objective") || "";
    document.getElementById("preview-education").textContent = localStorage.getItem("education") || "";
    document.getElementById("preview-languages").textContent = localStorage.getItem("languages") || "";
    document.getElementById("preview-certifications").textContent = localStorage.getItem("certifications") || "";
    document.getElementById("preview-hobbies").textContent = localStorage.getItem("hobbies") || "";
}, 3000);
// Edit Resume
function EditResume() {
    document.getElementById("step-5").style.display = "none";
    document.getElementById("step-1").style.display = "block";
    var name = localStorage.getItem("name");
    var email = localStorage.getItem("email");
    var phone = localStorage.getItem("phone");
    var address = localStorage.getItem("address");
    var skills = localStorage.getItem("skills");
    var experience = localStorage.getItem("experience");
    var jobObjective = localStorage.getItem("job-objective");
    var education = localStorage.getItem("education");
    var languages = localStorage.getItem("languages");
    var certifications = localStorage.getItem("certifications");
    var hobbies = localStorage.getItem("hobbies");
}
// Complete Edit
function CompleteEdit() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var skills = document.getElementById("skills").value;
    var experience = document.getElementById("experience").value;
    var jobObjective = document.getElementById("job-objective").value;
    var education = document.getElementById("education").value;
    var languages = document.getElementById("languages").value;
    var certifications = document.getElementById("certifications").value;
    var hobbies = document.getElementById("hobbies").value;
    console.log("name", name, "email", email, "phone", phone, "address", address, "skills", skills, "experience", experience, "jobObjective", jobObjective, "education", education, "languages", languages, "certifications", certifications, "hobbies", hobbies);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
    localStorage.setItem("address", address);
    localStorage.setItem("skills", skills);
    localStorage.setItem("experience", experience);
    localStorage.setItem("job-objective", jobObjective);
    localStorage.setItem("education", education);
    localStorage.setItem("languages", languages);
    localStorage.setItem("certifications", certifications);
    localStorage.setItem("hobbies", hobbies);
    document.getElementById("step-1").style.display = "none";
    document.getElementById("step-2").style.display = "none";
    document.getElementById("step-3").style.display = "none";
    document.getElementById("step-4").style.display = "none";
    document.getElementById("step-5").style.display = "flex";
}
