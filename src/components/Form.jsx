import React from 'react';

export default class Form extends React.Component {
  render() {
    return (
      <form>
        <text data-testid="name-input" />
        <textarea data-testid="description-input" />
        <number data-testid="attr1-input" />
        <number data-testid="attr2-input" />
        <number data-testid="attr3-input" />
        <text data-testid="attr3-input" />
        <select data-testid="rare-input">
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>
        <checkbox data-testid="trunfo-input" />
        <button data-testid="save-button" type="submit">Salvar</button>
      </form>
    );
  }
}
