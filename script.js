


const goods = [
  { title: 'Shirt', price: 150 },
  { title: 'Socks', price: 50 },
  { title: 'Jacket', price: 350 },
  { title: 'Shoes', price: 250 },
];


 class GoodsItem {
  constructor({title, price}) {
    this.title = title;
    this.price = price;
  }
  render() {
    return `<div class="goods-item">
    <h3 class="goods-item-title" >${this.title}</h3>
    <p class= "goods-item-price" >${this.price}</p>
    </div>`;
  }
}

class GoodsList {
  constructor() {
    this.goods = goods;
  }
  render() {
    const _goods = [...this.goods];
    const _goodsItems = _goods.map((item) => {
      const goodsItem = new GoodsItem(item);
      return goodsItem.render();
    })
    document.querySelector('.goods-list').innerHTML = _goodsItems.join('');
  }
  GetSumm() { 
    return this.goods.reduce((prev, { price }) => prev + price, 0)
    // this.goods.reduce((prev, item) => prev + item.price, 0)
    
  }
}
class Basket {
  setVision() {}
  renderer() {}
  delete() {}
}
class BasketProduct {
  render() {}
  setCount() {}
  deleteItem() {}
} 

onload = () =>  {
  const goodsList = new GoodsList();
  goodsList.render();
}

//********************************************* */

var Hamburger = {
	
	price: 0,
	calories: 0,

	small: {
		price: 50,
		calories: 20
	},

	large: {
		price: 100,
		calories: 40
	},

	cheese: {
		price: 10,
		calories: 20
	},

	salad: {
		price: 20,
		calories: 5
	},

	potato: {
		price: 15,
		calories: 10
	},

	onion: {
		price: 15,
		calories: 0
	},

	ketchup: {
		price: 20,
		calories: 5
	},
	
	calc: function(size){
		this.price += Hamburger[size].price;
		this.calories += Hamburger[size].calories;
  }
}