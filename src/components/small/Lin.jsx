import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './style.scss';
import { Toast } from 'antd-mobile';

var coll = []; 

const List = ( {list }) => ( < ul className = "movielist" >  {
      list.map((item,index) =>  {
        return ( 
          <div className="listli" style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'0 .16rem'}} key={index}>
        <div className="left" style={{display:'flex'}}>
        <Link to={'/detail/small/' + item.id }key =  {item.id } style={{width:'3rem'}}>  
        
        < div className = "poster" >  
        <img src =  {item.img }alt =  {item.alt }/>  
        </div>  
        <div className = "info"> 
          <h3 className = "title">{item.title } </h3>  
          <p className = "author">{item.userData.username }</p> 
          <div className = "other" style={{display:'flex'}}>
            <span data-v-2cc45cae = "" style={{width:'.5rem'}}>{item.section.length }小节 </span>
            <span className = "dot" > · </span>  <span>  {item.buyCount }人已收藏 </span > 
          </div>  
        </div>
        </Link>
        </div>
        
        <div className="right">
        <div className = "price iconfont icon-shoucang" onClick={() => {
              if (localStorage.getItem('shoucang')) {
                let arr = JSON.parse(localStorage.getItem('shoucang'))
                let flag = false
                arr.map((v) =>  {
                  console.log(item,v)
                      if (v.id === item.id) {
                        flag = true
                    }
                    return null
                })
                if(flag){
                  Toast.info('收藏虽好，但是可不能贪杯呀', 2); 
                }else{
                  arr.push(item); 
                  localStorage.setItem('shoucang', JSON.stringify(arr))
                  Toast.info('小可爱，你的收藏已经添加', 2);
                }
              }else {
                coll.push(item); 
                localStorage.setItem('shoucang', JSON.stringify(coll))
              }
              }}></div >  
            </div>
            </div>
        )
      })
    } </ul > )

List.propTypes =  {
  list:PropTypes.array
}
export default List
