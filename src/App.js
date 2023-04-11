import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Accueil from './composents/Accueil';
import Boutique from './composents/Boutique';
import Footer from './composents/Footer';
import Header from './composents/Header';
import Panier from './composents/Panier';
import products from './products.json';
import PageProduit from './composents/PageProduit';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      displayPanier: false,
      subTotal: 0,
      numberOfProducts: 0,
    }
    this.addProduct = this.addProduct.bind(this);
    this.updateQty = this.updateQty.bind(this);
    this.updateNumberOfProducts = this.updateNumberOfProducts.bind(this)
    this.updateSubTotal = this.updateSubTotal.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.deleteToItem = this.deleteToItem.bind(this);
  }



  addProduct(productId, qty) {
    this.setState(state => {
      const cart = [...state.cart];
      const index = cart.findIndex(item => item.id === productId);
      if (-1 !== index) {
        cart[index] = { ...cart[index], qty: cart[index].qty + qty };
      } else {
        cart.push({ id: productId, qty: qty })
      }
      return { cart };
    })
    this.updateSubTotal()
    this.updateNumberOfProducts()
  }

  deleteToItem(productId) {
    this.setState(state => {
      let cart = [...state.cart];
      cart = cart.filter(item => item.id !== productId)
      return { cart }
    })
    this.updateSubTotal()
    this.updateNumberOfProducts()
  }

  deleteItem() {
    this.setState(state => {
      let cart = [...state.cart];
      cart = []
      return { cart }
    })
    this.updateSubTotal()
    this.updateNumberOfProducts()
  }


  updateQty(productId, qty) {
    this.setState(state => {
      const cart = [...state.cart];
      const index = cart.findIndex(item => item.id === productId);
      if (index !== -1) { cart[index] = { ...cart[index], qty: qty } };
      return { cart };
    })
    this.updateSubTotal()
    this.updateNumberOfProducts()
  }

  updateSubTotal() {
    this.setState(state => {
      const cart = [...state.cart];
      const subTotal = cart.reduce((acc, item) => {
        const product = products.find(product => product.id === item.id);
        if (product) acc += item.qty * product.price;
        return Math.round(acc * 100) / 100;
      }, 0);
      return { subTotal }
    })
    console.log(this.state.subTotal)
  }

  updateNumberOfProducts() {
    this.setState(state => {
      const cart = [...state.cart];
      const numberOfProducts = cart.reduce((acc, item) => {
        if (item) acc += (1 * item.qty);
        return acc;
      }, 0);
      return { numberOfProducts }
    })
  }

  unsetDisplayPanier = () => {
    this.setState({ displayPanier: false })
  }

  setDisplayPanier = (e) => {
    this.setState({ displayPanier: e })
  }

  componentDidMount() {
    const cart = localStorage.getItem('products');
    let updateCart;
    if (cart === null) {
      updateCart = [];
    } else {
      updateCart = JSON.parse(cart);
    }
    this.setState({ cart: updateCart });
    this.updateNumberOfProducts();
    this.updateSubTotal();
  }


  componentDidUpdate() {
    localStorage.setItem('products', JSON.stringify(this.state.cart))
  }




  render() {
    return (
      <BrowserRouter>
        <Header setDisplayPanier={this.setDisplayPanier} displayPanier={this.state.displayPanier} numberOfProducts={this.state.numberOfProducts} />
        {this.state.displayPanier ? <Panier cart={this.state.cart} products={products} unsetDisplayPanier={this.unsetDisplayPanier} updateQty={this.updateQty} deleteItem={this.deleteItem} deleteToItem={this.deleteToItem} subTotal={this.state.subTotal} /> : null}
        <Routes>
          <Route path='/' element={<Accueil />}></Route>
          <Route path='/Boutique' element={<Boutique products={products} addProduct={this.addProduct} />}></Route>
          <Route path='/PageProduit' element={<PageProduit addProduct={this.addProduct} />}></Route>
          {/* path='*' fonctionne si jamais l'url ne correspond à rien de déclaré au dessus, ramène à l'accueil */}
          <Route path='*' element={<Accueil />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
