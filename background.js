browser.browserAction.onClicked.addListener(async (tab) => {
  try {
    const messageList = await browser.messages.listMessages(tab.mailFolder);
    const thread = await getCompleteThread(messageList[0].id);
    
    const threadAnalyzer = new ThreadAnalyzer(thread);
    const boxIntegration = new BoxIntegration();
    const aiSummarizer = new AISummarizer();

    const threadInfo = await threadAnalyzer.analyze();
    const summary = await aiSummarizer.summarize(threadInfo.text);
    
    await boxIntegration.uploadThreadContent(threadInfo, summary);
    
    browser.notifications.create({
      type: "basic",
      title: "Upload Complete",
      message: "Thread content and attachments uploaded to Box successfully!"
    });
  } catch (error) {
    console.error("Error processing thread:", error);
  }
});

async function getCompleteThread(messageId) {
  const message = await browser.messages.get(messageId);
  return browser.messages.getThread(message.threadId);
} 