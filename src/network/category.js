import  request  from './request'
export function getCategorySide() {
  return request({
    url:'/category'
  })
}

export function getCategoryGoods(maitKey) {
  return request({
    url:'/subcategory?maitKey=' + maitKey
  })
}

export function getGoodsInfo(miniWallkey, type){
  return request({
    url: '/subcategory/detail',
    params: {
      miniWallkey,
      type
    }
  })
}