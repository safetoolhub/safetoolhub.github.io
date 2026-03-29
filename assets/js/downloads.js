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
    let currentLinuxFormat = "dl-appimage";
  
    function openModal(appId, version) {
        window.currentAppId = appId;
        currentAppId = appId;
        if(downloadVersion) {
            downloadVersion.textContent = version;
        }

        // Apply pre-selected OS based on UserAgent + platform
        const ua = (navigator.userAgent || '').toLowerCase();
        const platform = (navigator.platform || '').toLowerCase();
        let detectOS = "win";
        if (/macintosh|mac os x|iphone|ipad/.test(ua) || /mac/.test(platform)) detectOS = "mac";
        else if (/linux/.test(ua) && !/android/.test(ua) || /linux/.test(platform)) detectOS = "lin";
        
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
        if (currentOS === "win") targetSelector = ".hidden-links #dl-win, .hidden-links #pdftrim-dl-win, .hidden-links #downloader-dl-win";
        else if (currentOS === "mac") targetSelector = ".hidden-links #dl-mac, .hidden-links #pdftrim-dl-mac, .hidden-links #downloader-dl-mac";
        else if (currentOS === "lin") targetSelector = ".hidden-links #" + currentLinuxFormat +", .hidden-links #pdftrim-" + currentLinuxFormat + ", .hidden-links #downloader-" + currentLinuxFormat;

        const linkElement = appCard.querySelector(targetSelector);
        
        if (linkElement && linkElement.href) {
            dlActionBtn.href = linkElement.href;
            dlActionBtn.style.display = "inline-flex";
            if (currentOS === "win") {
                dlActionBtn.innerHTML = `<span><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 8px;"><path d="M3 5.548l6.024-.874V10.5H3V5.548zm0 12.904l6.024.874V13.5H3v4.952zm6.724 1.01L21 21V13.5H9.724v5.962zM9.724 4.538V10.5H21V3l-11.276 1.538z" /></svg> <span data-i18n="modal-dl-btn">Download for</span> Windows</span>`;
            } else if (currentOS === "mac") {
                dlActionBtn.innerHTML = `<span><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 8px;"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.81-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg> <span data-i18n="modal-dl-btn">Download for</span> macOS</span>`;
            } else if (currentOS === "lin") {
                let linuxLabel = "AppImage";
                if(currentLinuxFormat === "dl-flatpak") linuxLabel = "Flatpak";
                else if(currentLinuxFormat === "dl-deb") linuxLabel = ".deb";
                else if(currentLinuxFormat === "dl-rpm") linuxLabel = ".rpm";
                dlActionBtn.innerHTML = `<span><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 8px;"><path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 00-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139zm.529 3.405h.013c.213 0 .396.062.584.198.19.135.33.332.438.533.105.259.158.459.166.724 0-.02.006-.04.006-.06v.105a.086.086 0 01-.004-.021l-.004-.024a1.807 1.807 0 01-.15.706.953.953 0 01-.213.335.71.71 0 00-.088-.042c-.104-.045-.198-.064-.284-.133a1.312 1.312 0 00-.22-.066c.05-.06.146-.133.183-.198.053-.128.082-.264.088-.402v-.02a1.21 1.21 0 00-.061-.4c-.045-.134-.101-.2-.183-.333-.084-.066-.167-.132-.267-.132h-.016c-.093 0-.176.03-.262.132a.8.8 0 00-.205.334 1.18 1.18 0 00-.09.4v.019c.002.089.008.179.02.267-.193-.067-.438-.135-.607-.202a1.635 1.635 0 01-.018-.2v-.02a1.772 1.772 0 01.15-.768c.082-.22.232-.406.43-.533a.985.985 0 01.594-.2zm-2.962.059h.036c.142 0 .27.048.399.135.146.129.264.288.344.465.09.199.14.4.153.667v.004c.007.134.006.2-.002.266v.08c-.03.007-.056.018-.083.024-.152.055-.274.135-.393.2.012-.09.013-.18.003-.267v-.015c-.012-.133-.04-.2-.082-.333a.613.613 0 00-.166-.267.248.248 0 00-.183-.064h-.021c-.071.006-.13.04-.186.132a.552.552 0 00-.12.27.944.944 0 00-.023.33v.015c.012.135.037.2.08.334.046.134.098.2.166.268.01.009.02.018.034.024-.07.057-.117.07-.176.136a.304.304 0 01-.131.068 2.62 2.62 0 01-.275-.402 1.772 1.772 0 01-.155-.667 1.759 1.759 0 01.08-.668 1.43 1.43 0 01.283-.535c.128-.133.26-.2.418-.2zm1.37 1.706c.332 0 .733.065 1.216.399.293.2.523.269 1.052.468h.003c.255.136.405.266.478.399v-.131a.571.571 0 01.016.47c-.123.31-.516.643-1.063.842v.002c-.268.135-.501.333-.775.465-.276.135-.588.292-1.012.267a1.139 1.139 0 01-.448-.067 3.566 3.566 0 01-.322-.198c-.195-.135-.363-.332-.612-.465v-.005h-.005c-.4-.246-.616-.512-.686-.71-.07-.268-.005-.47.193-.6.224-.135.38-.271.483-.336.104-.074.143-.102.176-.131h.002v-.003c.169-.202.436-.47.839-.601.139-.036.294-.065.466-.065zm2.8 2.142c.358 1.417 1.196 3.475 1.735 4.473.286.534.855 1.659 1.102 3.024.156-.005.33.018.513.064.646-1.671-.546-3.467-1.089-3.966-.22-.2-.232-.335-.123-.335.59.534 1.365 1.572 1.646 2.757.13.535.16 1.104.021 1.67.067.028.135.06.205.067 1.032.534 1.413.938 1.23 1.537v-.043c-.06-.003-.12 0-.18 0h-.016c.151-.467-.182-.825-1.065-1.224-.915-.4-1.646-.336-1.77.465-.008.043-.013.066-.018.135-.068.023-.139.053-.209.064-.43.268-.662.669-.793 1.187-.13.533-.17 1.156-.205 1.869v.003c-.02.334-.17.838-.319 1.35-1.5 1.072-3.58 1.538-5.348.334a2.645 2.645 0 00-.402-.533 1.45 1.45 0 00-.275-.333c.182 0 .338-.03.465-.067a.615.615 0 00.314-.334c.108-.267 0-.697-.345-1.163-.345-.467-.931-.995-1.788-1.521-.63-.4-.986-.87-1.15-1.396-.165-.534-.143-1.085-.015-1.645.245-1.07.873-2.11 1.274-2.763.107-.065.037.135-.408.974-.396.751-1.14 2.497-.122 3.854a8.123 8.123 0 01.647-2.876c.564-1.278 1.743-3.504 1.836-5.268.048.036.217.135.289.202.218.133.38.333.59.465.21.201.477.335.876.335.039.003.075.006.11.006.412 0 .73-.134.997-.268.29-.134.52-.334.74-.4h.005c.467-.135.835-.402 1.044-.7zm2.185 8.958c.037.6.343 1.245.882 1.377.588.134 1.434-.333 1.791-.765l.211-.01c.315-.007.577.01.847.268l.003.003c.208.199.305.53.391.876.085.4.154.78.409 1.066.486.527.645.906.636 1.14l.003-.007v.018l-.003-.012c-.015.262-.185.396-.498.595-.63.401-1.746.712-2.457 1.57-.618.737-1.37 1.14-2.036 1.191-.664.053-1.237-.2-1.574-.898l-.005-.003c-.21-.4-.12-1.025.056-1.69.176-.668.428-1.344.463-1.897.037-.714.076-1.335.195-1.814.12-.465.308-.797.641-.984l.045-.022zm-10.814.049h.01c.053 0 .105.005.157.014.376.055.706.333 1.023.752l.91 1.664.003.003c.243.533.754 1.064 1.189 1.637.434.598.77 1.131.729 1.57v.006c-.057.744-.48 1.148-1.125 1.294-.645.135-1.52.002-2.395-.464-.968-.536-2.118-.469-2.857-.602-.369-.066-.61-.2-.723-.4-.11-.2-.113-.602.123-1.23v-.004l.002-.003c.117-.334.03-.752-.027-1.118-.055-.401-.083-.71.043-.94.16-.334.396-.4.69-.533.294-.135.64-.202.915-.47h.002v-.002c.256-.268.445-.601.668-.838.19-.201.38-.336.663-.336zm7.159-9.074c-.435.201-.945.535-1.488.535-.542 0-.97-.267-1.28-.466-.154-.134-.28-.268-.373-.335-.164-.134-.144-.333-.074-.333.109.016.129.134.199.2.096.066.215.2.36.333.292.2.68.467 1.167.467.485 0 1.053-.267 1.398-.466.195-.135.445-.334.648-.467.156-.136.149-.267.279-.267.128.016.034.134-.147.332a8.097 8.097 0 01-.69.468zm-1.082-1.583V5.64c-.006-.02.013-.042.029-.05.074-.043.18-.027.26.004.063 0 .16.067.15.135-.006.049-.085.066-.135.066-.055 0-.092-.043-.141-.068-.052-.018-.146-.008-.163-.065zm-.551 0c-.02.058-.113.049-.166.066-.047.025-.086.068-.14.068-.05 0-.13-.02-.136-.068-.01-.066.088-.133.15-.133.08-.031.184-.047.259-.005.019.009.036.03.03.05v.02h.003z"/></svg> <span data-i18n="modal-dl-btn">Download for</span> Linux (${linuxLabel})</span>`;
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
            dlActionBtn.style.display = "inline-flex";
        }
    }
  
    // Listen for Linux format selection
    document.querySelectorAll(".linux-format-selector").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelectorAll(".linux-format-selector").forEach(b => b.classList.remove("selected"));
            btn.classList.add("selected");
            currentLinuxFormat = btn.getAttribute("data-format");
            updateDownloadLink();
        });
    });

    // Toggle Windows Option 1 Image
    const toggleWinOpt1 = modal.querySelector("#toggle-win-opt1");
    if (toggleWinOpt1) {
        toggleWinOpt1.addEventListener("click", (e) => {
            e.preventDefault();
            const img = modal.querySelector("#img-win-opt1");
            const isSpanish = localStorage.getItem('safetoolhub_lang') === 'es';
            if (img.style.display === "none") {
                img.style.display = "block";
                toggleWinOpt1.textContent = isSpanish ? "Ocultar" : "Hide";
                toggleWinOpt1.removeAttribute("data-i18n"); // Don't let i18n overwrite current state immediately
            } else {
                img.style.display = "none";
                toggleWinOpt1.textContent = isSpanish ? "Ver dónde" : "Show where";
                toggleWinOpt1.setAttribute("data-i18n", "modal-show-where");
            }
        });
    }

    // Toggle Windows Option 2 Image
    const toggleWinOpt2 = modal.querySelector("#toggle-win-opt2");
    if (toggleWinOpt2) {
        toggleWinOpt2.addEventListener("click", (e) => {
            e.preventDefault();
            const img = modal.querySelector("#img-win-opt2");
            const isSpanish = localStorage.getItem('safetoolhub_lang') === 'es';
            if (img.style.display === "none") {
                img.style.display = "flex"; // It's a row, so flex is good
                toggleWinOpt2.textContent = isSpanish ? "Ocultar" : "Hide";
                toggleWinOpt2.removeAttribute("data-i18n");
            } else {
                img.style.display = "none";
                toggleWinOpt2.textContent = isSpanish ? "Ver dónde" : "Show where";
                toggleWinOpt2.setAttribute("data-i18n", "modal-show-where");
            }
        });
    }

    // Toggle macOS Step 4 Image
    const toggleMacStep4 = modal.querySelector("#toggle-mac-step4");
    if (toggleMacStep4) {
        toggleMacStep4.addEventListener("click", (e) => {
            e.preventDefault();
            const img = modal.querySelector("#img-mac-step4");
            const isSpanish = localStorage.getItem('safetoolhub_lang') === 'es';
            if (img.style.display === "none") {
                img.style.display = "block";
                toggleMacStep4.textContent = isSpanish ? "Ocultar" : "Hide";
                toggleMacStep4.removeAttribute("data-i18n");
            } else {
                img.style.display = "none";
                toggleMacStep4.textContent = isSpanish ? "Ver dónde" : "Show where";
                toggleMacStep4.setAttribute("data-i18n", "modal-show-where");
            }
        });
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
