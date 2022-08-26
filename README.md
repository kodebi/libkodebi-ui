<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/kodebi/libkodebi-ui">
    <img src="assets/kodebi_logo_classic.svg" alt="Logo" width="150" height="150">
  </a>

<h3 align="center">Kodebi UI Component Library</h3>

  <p align="center">
    The 0.0.1 version of the UI components for the Kodebi Web App and Website.
  </p>

<!-- BADGES -->

</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#run-locally">Run Locally</a></li>
        <li><a href="#run-tests">Run Tests</a></li>
      </ul>
    </li>
    <li>
      <a href="#usage">Usage</a>
      <ul>
        <li><a href="#quick-start">Quick Start</a></li>
        <li><a href="#components">Components</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This library was created to cater the design requirements of Kodebi web applications. It provides a basic set of components like Buttons, Inputs, Dropdowns, etc., which come with the default Kodebi styles but are also customizable to a certain degree. Future versions will provide even more components with even more customization options.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

<ul>
  <li><a href="https://www.typescriptlang.org/">Typescript</a></li>
  <li><a href="https://reactjs.org/">React.js</a></li>
  <li><a href="https://emotion.sh/">Emotion</a></li>
  <li><a href="https://storybook.js.org/">Storybook</a></li>
  <li><a href="https://rollupjs.org/">Rollup</a></li>
  <li><a href="https://testing-library.com/react">React Testing Library</a></li>
</ul>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Installation

Install the package via npm

```sh
  npm i @kodebi/libkodebi-ui
```

### Run Locally

Clone the project

```sh
  git clone https://github.com/kodebi/libkodebi-ui.git
```

Go to the project directory

```sh
  cd path/to/where_you_cloned_the_repo
```

Install all the dependencies

```sh
  npm install
```

Start Storybook and start developing

```sh
  npm run storybook
```

### Run Tests

To run tests with the library, run the following command:

```sh
  npm run test
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

### Quick Start

In order to use a component in your project, just run the following command:

```javascript
import { Button } from '@kodebi/libkodebi-ui';

function App() {
	return <Button variant="action" type="submit" label="Test" />;
}
```

### Components

Components from the library come with a default styling, but are also customizable to some extent. In order to give a proper overview, we provide a full list of attributes for each component.

#### Box

| Prop            | Type         | Optional? | Description                               |
| --------------- | ------------ | --------- | ----------------------------------------- |
| variant         | `BoxVariant` | no        | defines the flex layout of the div        |
| children        | `ReactNode`  | no        | pass children objects to the div          |
| width           | `string`     | yes       | customize the width of the Box            |
| height          | `string`     | yes       | customize the height of the Box           |
| margin          | `string`     | yes       | set a custom margin for the Box           |
| className       | `string`     | yes       | add custom styling via classes to the div |
| padding         | `string`     | yes       | set a custom padding to the div           |
| position        | `string`     | yes       | accepts `fixed`, `absolute`, `relative`   |
| backgroundColor | `string`     | yes       | give your Box a proper color              |
| maxWidth        | `string`     | yes       | set the maximum width of the div          |

##### BoxVariant

| Prop               | Pass as  |
| ------------------ | -------- |
| default            | `string` |
| center             | `string` |
| flex-col           | `string` |
| flex-col-start     | `string` |
| flex-space-between | `string` |
| flex-align-start   | `string` |
| flex-align-end     | `string` |

#### Button

| Prop      | Type          | Optional? | Description                                            |
| --------- | ------------- | --------- | ------------------------------------------------------ |
| label     | `string`      | no        | gives the Button a label tag                           |
| variant   | `ButtonStyle` | yes       | defines the style of the Button                        |
| type      | `ButtonType`  | yes       | sets the button type                                   |
| width     | `string`      | yes       | customize the width of the Button                      |
| margin    | `string`      | yes       | set a custom margin for the Button                     |
| className | `string`      | yes       | add custom styling via classes                         |
| onClick   | `function`    | yes       | pass a function if the Button should perform an action |

##### ButtonStyle

| Prop             | Pass as  |
| ---------------- | -------- |
| signin (default) | `string` |
| action           | `string` |
| filter           | `string` |

##### ButtonType

| Prop             | Pass as  |
| ---------------- | -------- |
| button (default) | `string` |
| submit           | `string` |
| reset            | `string` |

#### Input

| Prop        | Type           | Optional? | Description                                                    |
| ----------- | -------------- | --------- | -------------------------------------------------------------- |
| variant     | `InputVariant` | no        | defines the style of the Input                                 |
| name        | `string`       | no        | give the Input a dedicated name tag                            |
| id          | `string`       | no        | set an unique id for the Input                                 |
| type        | `InputType`    | no        | sets the Input type                                            |
| width       | `string`       | yes       | customize the width of the Button                              |
| margin      | `string`       | yes       | set a custom margin for the Button                             |
| className   | `string`       | yes       | add custom styling via classes                                 |
| placeholder | `string`       | yes       | set a placeholder to display a CTA within the input field      |
| value       | `string`       | yes       | used to react to user inputs                                   |
| required    | `boolean`      | yes       | defines if the Input is mandatory to be filled out by the user |
| onChange    | `function`     | yes       | pass a function if the Input should listen to changes          |

##### InputVariant

| Prop              | Pass as  |
| ----------------- | -------- |
| primary (default) | `string` |
| secondary         | `string` |
| search            | `string` |

##### InputType

| Prop           | Pass as  |
| -------------- | -------- |
| text (default) | `string` |
| email          | `string` |
| password       | `string` |
| url            | `string` |
| search         | `string` |
| number         | `string` |

#### TBC

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

TBD

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Chris Schimetschka - [![LinkedIn][linkedin-shield]][linkedin-url] - chris.schimetschka@kodebi.de

Project Link: [https://github.com/kodebi/libkobei-ui](https://github.com/kodebi/libkodebi-ui)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

TBD

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWNS AND URLS -->

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/schimetschka
