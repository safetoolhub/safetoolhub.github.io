document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("download-modal");
    if (!modal) return;
  
    const closeBtn = modal.querySelector(".modal-close");
    const openBtns = document.querySelectorAll(".btn-download-trigger");
    const tabs = modal.querySelectorAll(".os-tab");
    const contents = modal.querySelectorAll(".os-content");
    const dlActionBtn = document.getElementById("modal-dl-action");
    const downloadVersion = modal.querySelector("#modal-version");
  
    let currentAppId = null;
    let currentOS = "win";
  
    function openModal(appId, version) {
        window.currentAppId = appId;
        currentAppId = appId;
        if(downloadVersion) {
            downloadVersion.textContent = version;
        }

        // Apply pre-selected OS based on UserAgent
        const ua = (navigator.userAgent || '').toLowerCase();
        let detectOS = "win";
        if (/mac|iphone|ipad/.test(ua)) detectOS = "mac";
        else if (/linux/.test(ua)) detectOS = "lin";
        
        switchTab(detectOS);
        modal.classList.add("modal-open");
        document.body.style.overflow = "hidden"; // Prevent background scrolling
    }
  
    function closeModal() {
        modal.classList.remove("modal-open");
        document.body.style.overflow = "";
    }
  
    function switchTab(osTarget) {
        currentOS = osTarget;
        
        // Update tabs
        tabs.forEach(tab => {
            if (tab.getAttribute("data-target") === osTarget) {
                tab.classList.add("active");
            } else {
                tab.classList.remove("active");
            }
        });
        
        // Update content sections
        contents.forEach(content => {
            if (content.getAttribute("id") === `os-${osTarget}`) {
                content.classList.add("active");
            } else {
                content.classList.remove("active");
            }
        });

        // Update the main download button at the bottom of the modal if it exists
        updateDownloadLink();
    }

    function updateDownloadLink() {
        // Collect links from the DOM (assuming original links are stored as data attributes or hidden elements in the app cards)
        const appCard = document.querySelector(`.tool-card[data-app-id="${currentAppId}"]`);
        if (!appCard || !dlActionBtn) return;

        let assetUrl = "";
        let extension = "";

        // Because we might have multiple links for linux (deb, rpm, AppImage, flatpak), we handle Linux specially. 
        // For Windows and Mac, there's usually just one primary link. 
        // The modal could just fetch the link from a hidden element that GitHub API populates.
        let targetSelector = "";
        if (currentOS === "win") targetSelector = ".hidden-links #dl-win, .hidden-links #pdftrim-dl-win";
        else if (currentOS === "mac") targetSelector = ".hidden-links #dl-mac, .hidden-links #pdftrim-dl-mac";
        else if (currentOS === "lin") targetSelector = ".hidden-links #dl-appimage, .hidden-links #pdftrim-dl-appimage";

        const linkElement = appCard.querySelector(targetSelector);
        
        if (linkElement && linkElement.href) {
            dlActionBtn.href = linkElement.href;
            dlActionBtn.style.display = "inline-flex";
            if (currentOS === "win") {
                dlActionBtn.innerHTML = `<span><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 8px;"><path d="M3 5.548l6.024-.874V10.5H3V5.548zm0 12.904l6.024.874V13.5H3v4.952zm6.724 1.01L21 21V13.5H9.724v5.962zM9.724 4.538V10.5H21V3l-11.276 1.538z" /></svg> <span data-i18n="modal-dl-btn">Download for</span> Windows</span>`;
            } else if (currentOS === "mac") {
                dlActionBtn.innerHTML = `<span><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 8px;"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.81-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg> <span data-i18n="modal-dl-btn">Download for</span> macOS</span>`;
            }
            
            // Re-apply translations for dynamic content
            if (window.applyLanguage && localStorage.getItem('safetoolhub_lang')) {
                // simple manual translation apply for dynamic text
                const lang = localStorage.getItem('safetoolhub_lang') || 'en';
                const dict = translations[lang] || translations.en;
                const span = dlActionBtn.querySelector('[data-i18n="modal-dl-btn"]');
                if (span && dict["modal-dl-btn"]) {
                    span.textContent = dict["modal-dl-btn"];
                }
            }
        } else {
            // Fallback to releases page
            const fallbackLink = appCard.querySelector(".all-releases-link");
            dlActionBtn.href = fallbackLink ? fallbackLink.href : "https://github.com/safetoolhub";
            
            // Re-apply translations for dynamic content
            let dlText = "Download";
            if (localStorage.getItem('safetoolhub_lang')) {
                const lang = localStorage.getItem('safetoolhub_lang') || 'en';
                const dict = translations[lang] || translations.en;
                dlText = dict["modal-dl-btn"] ? dict["modal-dl-btn"] + " " + (currentOS === "win" ? "Windows" : currentOS === "mac" ? "macOS" : "Linux") : `Download for ${currentOS === "win" ? "Windows" : currentOS === "mac" ? "macOS" : "Linux"}`;
            }

            dlActionBtn.innerHTML = `<span>${dlText} (.zip / tar)</span>`;
            dlActionBtn.style.display = currentOS === "lin" ? "none" : "inline-flex"; // Hide main button on linux as there are multiple links
        }
    }
  
    // Event Listeners
    openBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            const appId = btn.getAttribute("data-app-id");
            const version = btn.getAttribute("data-version");
            openModal(appId, version);
        });
    });
  
    closeBtn.addEventListener("click", closeModal);
    modal.addEventListener("click", (e) => {
        if (e.target === modal) closeModal();
    });
  
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            switchTab(tab.getAttribute("data-target"));
        });
    });
});
