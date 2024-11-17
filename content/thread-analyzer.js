class ThreadAnalyzer {
  constructor(thread) {
    this.thread = thread;
  }

  async analyze() {
    const participants = new Set();
    const attachments = [];
    let fullText = '';
    let subject = '';

    for (const message of this.thread) {
      participants.add(message.author);
      message.to.forEach(recipient => participants.add(recipient));
      
      if (!subject) subject = message.subject;
      fullText += `From: ${message.author}\nDate: ${message.date}\n${message.body}\n\n`;

      if (message.attachments) {
        for (const attachment of message.attachments) {
          attachments.push({
            name: attachment.name,
            content: await browser.messages.getAttachmentFile(
              message.id, 
              attachment.partName
            )
          });
        }
      }
    }

    return {
      subject,
      participants: Array.from(participants),
      text: fullText,
      attachments
    };
  }
} 