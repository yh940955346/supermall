import  request  from "./request"
export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}
// 进入商品详情页的推荐
export function getGoodsRecommend(){
  return request({
    url: '/recommend'
  })
}
export class Goods {
  constructor(itemInfo, columns, services){
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discount = itemInfo.discountDesc;
    this.columns = columns;
    this.realPrice = itemInfo.lowNowPrice;
    this.services = services
  }
}

export class Shop {
  constructor(shopInfo){
    this.name = shopInfo.name;
    this.logo = shopInfo.shopLogo;
    this.score = shopInfo.score;
    this.fans = shopInfo.cFans;
    this.goodsCount = shopInfo.cGoods;
    this.sells = shopInfo.cSells;
  }
}

export class GoodsParam {
  constructor(info, rule) {
    // 注: images可能没有值(某些商品有值, 某些没有值)
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}