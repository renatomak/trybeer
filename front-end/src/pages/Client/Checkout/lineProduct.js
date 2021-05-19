import React from 'react';

function LineProduct(props) {
  const { index, item, itens } = props;
  const { quantity, name, price, id } = item;

  const totalPrice = (price * quantity).toFixed(2).replace('.', ',');
  const stringPrice = Number(price).toFixed(2).replace('.', ',');

  const handleDelete = () => {
    const newItens = itens.filter((product) => product.id !== id);
    localStorage.setItem('cart', JSON.stringify(newItens));
    getTotalPrice();
  };

  return (
    <div key={ index }>
      <span data-testid={ `${index}-product-qtd-input` }>{quantity}</span>

      <span data-testid={ `${index}-product-name` }>{name}</span>

      <span data-testid={ `${index}-product-total-value` }>
        {`R$ ${totalPrice}`}
      </span>

      <span data-testid={ `${index}-product-unit-price` }>
        {`(R$ ${stringPrice} un)`}
      </span>

      <button
        type="button"
        value={ item }
        data-testid={ `${index}-removal-button` }
        onClick={ () => handleDelete(item) }
      >
        X
      </button>
    </div>
  );
}

export default LineProduct;
