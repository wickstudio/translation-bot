# Translation Bot

A Discord bot designed to translate messages from Korean, Arabic, and Spanish into English directly within your Discord server. This bot utilizes the `google-translate-api-browser` to perform translations, ensuring that your community can seamlessly communicate across language barriers.

## Features

- **Automatic Translation :** Automatically translates messages from Korean, Arabic, and Spanish into English or whatever you want.
- **Easy Configuration :** Simple setup through a configuration file, allowing for quick changes to the bot's settings.
- **Support for Multiple Languages :** Ready to translate messages from multiple languages with the potential to easily add more.

## Getting Started

These instructions will get you a copy of the bot up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- A Discord account and a bot token ([How to create a Discord bot](https://discord.com/developers/docs/intro))
- `google-translate-api-browser` npm package

### Installing

1. Clone the repository to your local machine:
    ```bash
    git clone https://github.com/wickstudio/translation-bot.git
    ```
2. Navigate into the bot's directory:
    ```bash
    cd translation-bot
    ```
3. Install the required npm packages:
    ```bash
    npm install
    ```
4. Create a `config.js` file in the root directory with the following content, replacing placeholders with your actual data:
    ```javascript
    module.exports = {
      token: 'YOUR_DISCORD_BOT_TOKEN', // Your Discord bot token
    };
    ```
5. Start the bot:
    ```bash
    node index.js
    ```

## Usage

The bot will automatically translate messages sent in the configured languages within the channels it has access to. Ensure the bot has the necessary permissions to read and send messages in these channels.

## Contributing

Please read [CONTRIBUTING.md](https://github.com/wickstudio/translation-bot/readme.md) for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- Google Translate API for enabling seamless translations.
- Discord.js for providing a powerful library to interact with the Discord API.


## Contact

- Email : wick@wick-studio.com

- Website : https://wickdev.xyz

- Discord : https://discord.gg/wicks

- Youtube : https://www.youtube.com/@wick_studio