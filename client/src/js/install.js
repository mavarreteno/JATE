const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
const handleBeforeInstallPrompt = (event) => {
  window.deferredPrompt = event;
  butInstall.classList.remove("hidden");
};

window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

// TODO: Implement a click event handler on the `butInstall` element
const handleInstallButtonClick = async () => {
  const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
    return;
  }
  promptEvent.prompt();
  window.deferredPrompt = null;
  butInstall.classList.add("hidden");
};

butInstall.addEventListener("click", handleInstallButtonClick);


// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  window.deferredPrompt = null;
});
