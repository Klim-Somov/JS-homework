const goods = [
  { title: 'Shirt', price: 150 },
  { title: 'Socks', price: 50 },
  { title: 'Jacket', price: 350 },
  { title: 'Shoes', price: 250 },
];

const renderGoodsItem = (title = 'Товар', price = "цена не определена") => 
   `<div class="goods-item"><h3 class="goods-item-title" >${title}</h3><p class="goods-item-price" >${price}</p></div>`;
;

const renderGoodsList = (list) => {
  let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
  document.querySelector('.goods-list').innerHTML = goodsList.join('');
}


renderGoodsList(goods);