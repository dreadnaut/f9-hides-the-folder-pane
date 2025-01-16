async function toggleFolderPane() {
  const tabs = await browser.mailTabs.query({ active: true, currentWindow: true });
  if (tabs.length > 0) {
    const isVisible = tabs[0].folderPaneVisible;
    browser.mailTabs.update({ folderPaneVisible: !isVisible });
  }
}

browser.commands.onCommand.addListener(toggleFolderPane);
