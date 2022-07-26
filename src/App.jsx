import './index.css';
import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

const cleanState = {
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

export default class App extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.checkHasTrunfo = this.checkHasTrunfo.bind(this);
    this.displaySavedCards = this.displaySavedCards.bind(this);
    this.checkCorrectlyFill = this.checkCorrectlyFill.bind(this);

    this.state = {
      ...cleanState,
      saveCards: [],
    };
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, () => this.checkCorrectlyFill());
  }

  onSaveButtonClick(event) {
    event.preventDefault();
    const { saveCards } = this.state;

    saveCards.push({ ...this.state });
    this.setState({ ...cleanState });
    this.checkHasTrunfo();
  }

  checkHasTrunfo() {
    const { cardTrunfo } = this.state;

    if (cardTrunfo === true) this.setState({ hasTrunfo: true });
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

  displaySavedCards() {
    const { saveCards } = this.state;

    return saveCards.map((render) => (<Card { ...render } key={ render.cardName } />));
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
        <div className="saved-cards-div">
          <h2>Saved Cards</h2>
          <section className="saved-cards">
            { this.displaySavedCards() }
          </section>
        </div>
      </>
    );
  }
}
