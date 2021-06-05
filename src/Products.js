import React from "react";
import "./products.css";

class Products extends React.Component {
  state = {
    products: [],
  };

  componentDidMount() {
    this.setState({
      products: [
        { id: 1, name: "Товар 1", price: 1000 },
        { id: 2, name: "Товар 2", price: 2000 },
        { id: 3, name: "Товар 3", price: 3000 },
        { id: 4, name: "Товар 4", price: 4000 },
        { id: 5, name: "Товар 5", price: 5000 },
      ],
    });
  }

  delete = (targetId) => this.setState({
      products: this.state.products.filter(({id}) => id != targetId)
  });

  render() {
    const { products } = this.state;
    return (
      <table className="products">
        <thead>
          <th className="products__th">#</th>
          <th className="products__th">Название</th>
          <th className="products__th">Цена</th>
          <th className="products__th">Действие</th>
        </thead>
        <tbody>
          {products.map(({ id, name, price }) => (
            <tr key={id}>
              <td className="products__td">{id}</td>
              <td className="products__td">{name}</td>
              <td className="products__td">{id}</td>
              <td className="products__td">
                <button
                  className="products__btn"
                  onClick={() => {
                    this.delete(id);
                  }}
                >
                  Удалить
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Products;
