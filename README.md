# Thunderbird Box Attachment Manager

A Thunderbird extension that automatically uploads email thread attachments to Box with AI-generated summaries.

## Features

- Automatically processes email threads
- Extracts and uploads attachments to Box
- Generates AI summaries using Hugging Face's API
- Creates organized folders in Box with thread content
- Maintains email context and participant information

## Installation

1. Download the latest release from the releases page
2. Open Thunderbird
3. Go to Tools > Add-ons
4. Click the gear icon and select "Install Add-on From File"
5. Select the downloaded .xpi file

## Configuration

1. Obtain a Box API key from [Box Developer Console](https://developer.box.com)
2. Get a Hugging Face API key from [Hugging Face](https://huggingface.co)
3. Configure the keys in the extension settings

## Development

### Prerequisites

- Node.js 14+
- npm or yarn
- Thunderbird 78+

### Setup

1. Clone the repository: bash
git clone https://github.com/yourusername/thunderbird-plugin.git
cd thunderbird-plugin

2. Install dependencies (if any are added in the future):
bash
npm install


3. Load the extension in Thunderbird:
   - Go to Tools > Add-ons
   - Click the gear icon and select "Debug Add-ons"
   - Click "Load Temporary Add-on"
   - Select the manifest.json file

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.