<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/kodebi/libkodebi-ui">
    <img src="assets/kodebi_logo_classic.svg" alt="Logo" width="150" height="150">
  </a>

<h1 align="center">Kodebi UI Component Library</h1>

  <p align="center">
    The 1.0.1 version of the UI components for the Kodebi Web App and Website.
  </p>

<!-- BADGES -->
  <p>
    <a href="https://github.com/kodebi/libkodebi-ui">
      <img src="https://img.shields.io/github/package-json/v/kodebi/libkodebi-ui" />
    </a>
    <a href="https://www.npmjs.com/package/@kodebi/libkodebi-ui">
      <img src="https://img.shields.io/npm/v/@kodebi/libkodebi-ui" />
    </a>
    <a href="https://bundlephobia.com/package/@kodebi/libkodebi-ui@0.0.1">
      <img src="https://img.shields.io/bundlephobia/min/@kodebi/libkodebi-ui" />
    </a>
    <a href="https://bundlephobia.com/package/@kodebi/libkodebi-ui@0.0.1">
      <img src="https://img.shields.io/bundlephobia/minzip/@kodebi/libkodebi-ui" />
    </a>
    <a href="">
      <img src="https://img.shields.io/npm/l/@kodebi/libkodebi-ui" />
    </a>
    <a href="">
      <img src="https://img.shields.io/github/contributors/kodebi/libkodebi-ui" />
    </a>
    <a href="">
      <img src="https://img.shields.io/github/last-commit/kodebi/libkodebi-ui" />
    </a>
    <a href="">
      <img src="https://img.shields.io/npm/dt/@kodebi/libkodebi-ui" />
    </a>
  </p>
</div>

<br />

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

#### AppShell

| Prop     | Type        | Optional? | Description                                                        |
| -------- | ----------- | --------- | ------------------------------------------------------------------ |
| children | `ReactNode` | no        | wraps other components with the shell to inherit the Kodebi styles |

#### Box

| Prop            | Type         | Optional? | Description                                |
| --------------- | ------------ | --------- | ------------------------------------------ |
| variant         | `BoxVariant` | no        | defines the flex layout of the div         |
| children        | `ReactNode`  | no        | passes children objects to the div         |
| width           | `string`     | yes       | customizes the width of the Box            |
| height          | `string`     | yes       | customizes the height of the Box           |
| margin          | `string`     | yes       | sets a custom margin for the Box           |
| className       | `string`     | yes       | adds custom styling via classes to the div |
| padding         | `string`     | yes       | sets a custom padding to the div           |
| position        | `string`     | yes       | accepts `fixed`, `absolute`, `relative`    |
| backgroundColor | `string`     | yes       | gives your Box a proper color              |
| maxWidth        | `string`     | yes       | sets the maximum width of the div          |

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

| Prop      | Type          | Optional? | Description                                              |
| --------- | ------------- | --------- | -------------------------------------------------------- |
| label     | `string`      | no        | gives the Button a label tag                             |
| variant   | `ButtonStyle` | yes       | defines the style of the Button                          |
| type      | `ButtonType`  | yes       | sets the button type                                     |
| width     | `string`      | yes       | customizes the width of the Button                       |
| margin    | `string`      | yes       | sets a custom margin for the Button                      |
| className | `string`      | yes       | adds custom styling via classes                          |
| onClick   | `function`    | yes       | passes a function if the Button should perform an action |
| children  | `ReactNode`   | yes       | passes children objects to the Card component            |

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

#### Card

| Prop        | Type             | Optional? | Description                                                  |
| ----------- | ---------------- | --------- | ------------------------------------------------------------ |
| withBorders | `boolean`        | yes       | sets a border for the Card component                         |
| shadow      | `CardShadowType` | yes       | defines the shadow of the border if border is passed as true |
| center      | `boolean`        | yes       | centers content within the Card                              |
| width       | `string`         | yes       | customizes the width of the Card                             |
| height      | `string`         | yes       | sets a custom height for the Card                            |
| children    | `ReactNode`      | yes       | passes children objects to the Card component                |

##### CardShadowType

| Prop   | Pass as  |
| ------ | -------- |
| none   | `string` |
| light  | `string` |
| bright | `string` |

#### Footer

| Prop  | Type                     | Optional? | Description                            |
| ----- | ------------------------ | --------- | -------------------------------------- |
| links | `Array` of `LinkWrapper` | yes       | passes an array of links to the footer |
| icons | `Array` of `IconWrapper` | yes       | passes an arry of icons to the footer  |

#### Input

| Prop        | Type            | Optional? | Description                                                    |
| ----------- | --------------- | --------- | -------------------------------------------------------------- |
| variant     | `InputVariant`  | yes       | defines the style of the Input                                 |
| name        | `string`        | yes       | gives the Input a dedicated name tag                           |
| id          | `string`        | yes       | sets an unique id for the Input                                |
| type        | `InputType`     | yes       | sets the Input type                                            |
| width       | `string`        | yes       | customizes the width of the Input                              |
| margin      | `string`        | yes       | sets a custom margin for the Input                             |
| position    | `LabelPosition` | yes       | defines the relative position of the label                     |
| className   | `string`        | yes       | adds custom styling via classes                                |
| placeholder | `string`        | yes       | sets a placeholder to display a CTA within the input field     |
| value       | `string`        | yes       | used to react to user inputs                                   |
| marginRight | `string`        | yes       | defines a right margin for the label                           |
| required    | `boolean`       | yes       | defines if the Input is mandatory to be filled out by the user |
| onChange    | `function`      | yes       | passes a function if the Input should listen to changes        |
| textarea    | `boolean`       | yes       | if true, the Input gets replaced with a Textarea               |
| rows        | `number`        | yes       | defines how many rows the textarea should span                 |
| cols        | `number`        | yes       | defines how many cols the textarea should span                 |
| textLength  | `string`        | yes       | sets the overall text length of the textarea                   |
| borderColor | `string`        | yes       | sets a custom borderColor for the Input                        |
| labelColor  | `string`        | yes       | sets a custom color for the Input label                        |
| wrap        | `string`        | yes       | defines if the textarea content should wrap or no              |

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

##### LabelPosition

| Prop  | Pass as  |
| ----- | -------- |
| above | `string` |
| left  | `string` |

#### LinkWrapper

| Prop     | Type        | Optional? | Description                                          |
| -------- | ----------- | --------- | ---------------------------------------------------- |
| to       | `string`    | no        | passes the path to link to respective route          |
| type     | `LinkType`  | yes       | accepts `default`, `menu` and `footer` for styling   |
| children | `ReactNode` | yes       | passes children objects to the LinkWrapper component |

##### LinkType

| Prop    | Pass as  |
| ------- | -------- |
| default | `string` |
| menu    | `string` |
| footer  | `string` |

#### IconWrapper

| Prop     | Type        | Optional? | Description                                          |
| -------- | ----------- | --------- | ---------------------------------------------------- |
| href     | `string`    | yes       | passes the path to link to external URLs             |
| fontSize | `string`    | yes       | sets the size of the icon wrapper                    |
| children | `ReactNode` | yes       | passes children objects to the IconWrapper component |

#### Dropdown

| Prop        | Type                 | Optional? | Description                                                 |
| ----------- | -------------------- | --------- | ----------------------------------------------------------- |
| options     | `Array` of `Options` | yes       | pass an array of options to choose from                     |
| variant     | `DropdownType`       | yes       | defines the style of the Dropdown menu                      |
| name        | `string`             | yes       | give the Dropdown a dedicated name tag                      |
| id          | `string`             | yes       | set an unique id for the Dropdown                           |
| width       | `string`             | yes       | customizes the width of the Select component                |
| margin      | `string`             | yes       | sets a custom margin for the Select component               |
| padding     | `string`             | yes       | sets a padding for the Dropdown                             |
| className   | `string`             | yes       | adds custom styling via classes                             |
| placeholder | `string`             | yes       | sets a placeholder to display a CTA within the select field |
| value       | `string`             | yes       | used to react to user inputs                                |
| label       | `boolean`            | yes       | defines if the Dropdown needs a label tag or not            |
| position    | `LabelPosition`      | yes       | defines the relative position of the label                  |
| onChange    | `function`           | yes       | passes a function if the Dropdown should listen to changes  |

##### Options

| Prop      | Type                 | Optional? | Description                                                |
| --------- | -------------------- | --------- | ---------------------------------------------------------- | --- |
| key       | `string`             | yes       | passes the index of the array as unique key                |
| value     | `string` or `number` | yes       | sets a value for the option component                      |     |
| width     | `string`             | yes       | sets a custom width for the option                         |
| className | `string`             | yes       | adds custom styling via classes                            |
| onClick   | `function`           | yes       | passes a function which propagates to the Select component |

##### DropdownType

| Prop    | Pass as  |
| ------- | -------- |
| default | `string` |
| filter  | `string` |

#### Text

| Prop      | Type         | Optional? | Description                              |
| --------- | ------------ | --------- | ---------------------------------------- |
| weight    | `TextWeight` | yes       | defines the weight of the Text           |
| color     | `string`     | yes       | sets the color of the Text               |
| padding   | `string`     | yes       | sets a custom padding for the Text       |
| margin    | `string`     | yes       | sets a custom margin for the Text        |
| className | `string`     | yes       | adds custom styling via classes          |
| children  | `ReactNode`  | yes       | passes children objects to the paragraph |
| fontSize  | `string`     | yes       | alters the size of the font              |

##### TextWeight

| Prop    | Pass as  |
| ------- | -------- |
| regular | `string` |
| bold    | `string` |

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

<a href="https://github.com/kodebi/libkodebi-ui/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=kodebi/libkodebi-ui" />
</a>

Contributions are always welcome. Feel free to fork the repository, create a new branch and start developing. For merging your contributions, please open a PR and explicitly add me as a reviewer. After carefully checking and resolving potential merge conflicts or any remarks, the contributions will be merged. A release cycle needs to be determined in due time, so any propositions are highly welcome as well.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

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
