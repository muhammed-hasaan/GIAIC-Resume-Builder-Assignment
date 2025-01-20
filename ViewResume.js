document.addEventListener("DOMContentLoaded", function () {
    // Step 5: Resume Preview
    var editResumeButton = document.getElementById("edit-resume");
    var shareResumeButton = document.getElementById("share-resume");
    if (editResumeButton) {
        editResumeButton.addEventListener("click", function () {
            window.location.href = window.location.href.split("?")[0]; // Reset URL for editing
        });
    }
    if (window.location.search) {
        var params = new URLSearchParams(window.location.search);
        var previewName = document.getElementById("preview-name");
        var previewEmail = document.getElementById("preview-email");
        var previewPhone = document.getElementById("preview-phone");
        var previewAddress = document.getElementById("preview-address");
        var previewSkills = document.getElementById("preview-skills");
        var previewExperience = document.getElementById("preview-experience");
        var previewJobObjective = document.getElementById("preview-job-objective");
        var previewEducation = document.getElementById("preview-education");
        var previewLanguages = document.getElementById("preview-languages");
        var previewCertifications = document.getElementById("preview-certifications");
        var previewHobbies = document.getElementById("preview-hobbies");
        if (previewName)
            previewName.textContent = params.get("name") || "";
        if (previewEmail)
            previewEmail.textContent = params.get("email") || "";
        if (previewPhone)
            previewPhone.textContent = params.get("phone") || "";
        if (previewAddress)
            previewAddress.textContent = params.get("address") || "";
        if (previewSkills)
            previewSkills.textContent = params.get("skills") || "";
        if (previewExperience)
            previewExperience.textContent = params.get("experience") || "";
        if (previewJobObjective)
            previewJobObjective.textContent = params.get("jobObjective") || "";
        if (previewEducation)
            previewEducation.textContent = params.get("education") || "";
        if (previewLanguages)
            previewLanguages.textContent = params.get("languages") || "";
        if (previewCertifications)
            previewCertifications.textContent = params.get("certifications") || "";
        if (previewHobbies)
            previewHobbies.textContent = params.get("hobbies") || "";
    }
});
