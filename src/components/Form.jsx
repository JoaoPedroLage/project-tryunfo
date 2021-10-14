import React from 'react';

export default class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name-input">
          Nome da carta:
          <input type="text" data-testid="name-input" />
        </label>
        <label htmlFor="description-input">
          Descrição da carta:
          <input type="textarea" data-testid="description-input" />
        </label>
        <label htmlFor="attr1-input">
          Inserir o primeiro atributo da carta
          <input type="number" data-testid="attr1-input" />
        </label>
        <label htmlFor="attr2-input">
          Inserir o segundo atributo da carta
          <input type="number" data-testid="attr2-input" />
        </label>
        <label htmlFor="attr3-input">
          Inserir o terceiro atributo da carta
          <input type="number" data-testid="attr3-input" />
        </label>
        <label htmlFor="image-input">
          Inserir o caminho para imagem da carta
          <input type="text" data-testid="image-input" />
        </label>
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
