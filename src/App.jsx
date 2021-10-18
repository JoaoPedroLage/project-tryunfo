import './index.css';
import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

export default class App extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.checkCorrectlyFill = this.checkCorrectlyFill.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    };
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.value === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, () => this.checkCorrectlyFill());
  }

  onSaveButtonClick(event) {
    event.preventDefault();
  }

  checkCorrectlyFill() {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    const textFill = [];
    const attrFill = [];

    const attr1 = Number(cardAttr1);
    const attr2 = Number(cardAttr2);
    const attr3 = Number(cardAttr3);
    const maxAttr = 90;
    const minAttr = 0;
    const sumMaxAttrs = 210;

    textFill.push(cardName, cardDescription, cardImage);
    attrFill.push(cardAttr1, cardAttr2, cardAttr3);

    const checkTextFill = textFill.every((text) => text.length > 0);
    const checkAttrFill = attrFill.every((attr) => attr >= minAttr && attr <= maxAttr);

    if (checkTextFill && checkAttrFill === true
      && attr1 + attr2 + attr3 <= sumMaxAttrs) {
      this.setState({ isSaveButtonDisabled: false });
    } else this.setState({ isSaveButtonDisabled: true });
  }

  render() {
    return (
      <>
        <header>
          <h1>Tryunfo</h1>
        </header>
        <main>
          <section className="form">
            <Form
              { ...this.state }
              onInputChange={ this.onInputChange }
              onSaveButtonClick={ this.onSaveButtonClick }
            />
          </section>
          <section className="form-preview">
            <Card
              { ...this.state }
            />
          </section>
        </main>
      </>
    );
  }
}
