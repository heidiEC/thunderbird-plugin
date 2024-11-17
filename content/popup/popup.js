document.getElementById('processThread').addEventListener('click', async () => {
  const statusDiv = document.getElementById('status');
  statusDiv.textContent = 'Processing thread...';
  
  try {
    await browser.runtime.sendMessage({ action: 'processThread' });
    statusDiv.textContent = 'Thread processed and uploaded successfully!';
  } catch (error) {
    statusDiv.textContent = 'Error processing thread: ' + error.message;
  }
}); 