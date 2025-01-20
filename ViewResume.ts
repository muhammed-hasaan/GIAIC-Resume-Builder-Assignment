document.addEventListener("DOMContentLoaded", function () {

    // Step 5: Resume Preview
    const editResumeButton: HTMLElement | null = document.getElementById("edit-resume");
    const shareResumeButton: HTMLElement | null = document.getElementById("share-resume");

    if (editResumeButton) {
        editResumeButton.addEventListener("click", function () {
            window.location.href = window.location.href.split("?")[0];  // Reset URL for editing
        });
    }
    if (window.location.search) {
        const params: URLSearchParams = new URLSearchParams(window.location.search);

        const previewName: HTMLElement | null = document.getElementById("preview-name");
        const previewEmail: HTMLElement | null = document.getElementById("preview-email");
        const previewPhone: HTMLElement | null = document.getElementById("preview-phone");
        const previewAddress: HTMLElement | null = document.getElementById("preview-address");
        const previewSkills: HTMLElement | null = document.getElementById("preview-skills");
        const previewExperience: HTMLElement | null = document.getElementById("preview-experience");
        const previewJobObjective: HTMLElement | null = document.getElementById("preview-job-objective");
        const previewEducation: HTMLElement | null = document.getElementById("preview-education");
        const previewLanguages: HTMLElement | null = document.getElementById("preview-languages");
        const previewCertifications: HTMLElement | null = document.getElementById("preview-certifications");
        const previewHobbies: HTMLElement | null = document.getElementById("preview-hobbies");

        if (previewName) previewName.textContent = params.get("name") || "";
        if (previewEmail) previewEmail.textContent = params.get("email") || "";
        if (previewPhone) previewPhone.textContent = params.get("phone") || "";
        if (previewAddress) previewAddress.textContent = params.get("address") || "";
        if (previewSkills) previewSkills.textContent = params.get("skills") || "";
        if (previewExperience) previewExperience.textContent = params.get("experience") || "";
        if (previewJobObjective) previewJobObjective.textContent = params.get("jobObjective") || "";
        if (previewEducation) previewEducation.textContent = params.get("education") || "";
        if (previewLanguages) previewLanguages.textContent = params.get("languages") || "";
        if (previewCertifications) previewCertifications.textContent = params.get("certifications") || "";
        if (previewHobbies) previewHobbies.textContent = params.get("hobbies") || "";
    }
});
