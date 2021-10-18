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
    textFill.push(cardName, cardDescription, cardImage);
    const checkTextFill = textFill.every((fill) => fill.length > 0);

    const attr1 = Number(cardAttr1);
    const attr2 = Number(cardAttr2);
    const attr3 = Number(cardAttr3);
    const maxAttribute = 90;
    const minAttribute = 0;
    const sumMaxAttributes = 210;

    if (attr1 >= minAttribute && attr1 <= maxAttribute
      && attr2 >= minAttribute && attr2 <= maxAttribute
      && attr3 >= minAttribute && attr3 <= maxAttribute
      && attr1 + attr2 + attr3 <= sumMaxAttributes
      && checkTextFill === true) {
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
