# Valentine's Day Web Experience

This interactive website offers a unique way to ask someone to be your Valentine, with a fun twist. Users are greeted with Polaroid-style black and white images that come to life in color upon hover. They are then presented with the question: "Do you wanna be my Valentine?" and given two response options. Depending on the choice, users experience a playful interaction leading to a page of virtual envelopes containing sweet "gifts" for Valentine's Day.

Visit page [here.](https://wannabemyvalentine-template.netlify.app/)

## Features

- **Polaroid Effect**: Black and white images that transition to color on hover, mimicking Polaroid photos.
- **Interactive Buttons**: The "No" button dynamically decreases in size and changes text to various phrases of disappointment, while the "Yes" button requires multiple clicks, each with a positive response, before leading to the gift page.
- **Virtual Gifts**: A selection of envelopes that, when clicked, reveal thoughtful virtual gifts you can offer to your Valentine.

## Getting Started

To set up the project locally, follow these steps:

1. **Fork the Repository**: Start by forking this repository to your GitHub account.
2. **Clone Your Fork**: Clone your forked repository to your local machine.
3. **Install Dependencies**: Navigate to the project directory and run `npm install` to install necessary dependencies.
4. **Environment Setup**: Create a `.env` file in the project root and add your page title as `VITE_SITE_TITLE="Wanna be me Valentine, Mr. Grey?"`.
5. **Run the Development Server**: Execute `npm run dev` to start the development server.
6. **Deployment**: Deploy your version of the website on platforms like Netlify or Vercel for public access.

## Configuration

- **polaroids.ts**: Customize the appearance, location, rotation, and zIndex of the Polaroid images.
- **buttontexts.tsx**: Initially contains texts for the buttons. (Consider moving to the `.env` file for future releases.)
- **Global Folder**: Add your square-sized images here to fit the Polaroid style.

## Contributing

We welcome contributions of all kinds, from styling improvements to additional features. Here's how you can contribute:

1. **Fork the Repository**: If you haven't already, fork the repository.
2. **Create a Feature Branch**: Work on your feature or improvement in a separate branch.
3. **Open a Pull Request**: Submit your changes for review.

Please ensure your pull requests are detailed and explain the purpose of the changes.

## Future Plans

- Enhance the responsiveness and design of the buttons.
- Implement growing "Yes" button functionality as the "No" button is clicked.
- Move all customizable texts to the `.env` file for easier personalization.

## License

This project is open source and available under MIT. Feel free to fork and adapt it for your personal use.

## Acknowledgments

A special thank you to the open source community and all contributors to this project. Your efforts make playful and engaging experiences like this possible.
