import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './style.scss';
import axios from 'axios'
import { NavBar, Tabs } from 'antd-mobile';
import baseUrl from '@/api'
const tabs = [
  { title: '推荐',id:'tuijian' },
  { title: '前端', id: "qd" },
  { title: 'IOS', id: "ios" },
  { title: 'Android', id: "android" },
  { title: '后端', id: "hd" },
  { title: '人工智能', id: "rg" },
  { title: '运维', id: "yw" },
  { title: '产品', id: "cp" },
  { title: '设计', id: "sj" },
  { title: '工具资源', id: "gj" },
  { title: '阅读', id: "yd" },
];

class App extends Component {
  state = {
    visible: false,
    selected: '',
    list: []
  };
  componentDidMount() {
    axios.get(baseUrl + '/juejin/tuijian')
      .then(data => {
        // console.log(data)
        this.setState({
          list: data.data.data
        })

      })
  }
  handleClick(value) {
    // console.log(value)
    axios.get(baseUrl + '/juejin/' + value.id)
      .then(data => {
         console.log(data)
        this.setState({
          list: data.data.data
        })

      })
  }
  render() {
    return (

      <div className="head">
        <NavBar
          mode="dark"
        >首页</NavBar>
        <Tabs tabs={tabs} initialPage={0} animated={false} useOnPan={false} onTabClick={(tabs, index) => { this.handleClick(tabs); }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {
              <ul className="list" >

                {
                  this.state.list.map((item, index) => {
                    return (
                      <Link to={'/detail/' + item.originalUrl.substring(item.originalUrl.indexOf('post/') + 5, item.originalUrl.length)} key={item.objectId} className="titinfo">
                        <div className="tag">
                          <span style={{ fontSize: '.12rem', color: '#909090' }}><i style={{ color: '#b71ed7' }}>专栏</i>-{item.user.username}-{item.updatedAt}-</span>
                        </div>
                        <div className="title">
                          <h3>{item.title}</h3>
                        </div>
                        <div className="info">
                          <span style={{ border: '.02rem solid #eee', color: '#666', padding: '0 .09rem' }}><svg className="icon" style={{ width: '1em', height: '1em', verticalAlign: 'middle', fill: 'currentColor', overflow: 'hidden' }} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1604"><path d="M873.6 416h-188.8c12.8-44.8 28.8-115.2 19.2-188.8-6.4-60.8-41.6-105.6-92.8-124.8-38.4-12.8-76.8-6.4-99.2 16-25.6 25.6-38.4 76.8-51.2 128-9.6 35.2-16 70.4-28.8 89.6-32 54.4-102.4 76.8-115.2 80H224c-19.2 0-32 12.8-32 32v448c0 19.2 12.8 32 32 32h547.2C896 928 960 537.6 960 515.2c0-57.6-44.8-99.2-86.4-99.2zM96 416c-19.2 0-32 12.8-32 32v448c0 19.2 12.8 32 32 32s32-12.8 32-32V448c0-19.2-12.8-32-32-32z" fill="#666666" p-id="1605"></path></svg>{item.collectionCount}</span>
                          <span style={{ border: '.02rem solid #eee', color: '#666', padding: '0 .09rem' }}><svg className="icon" style={{ width: '1em', height: '1em', verticalAlign: 'middle', fill: 'currentColor', overflow: 'hidden' }} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2367"><path d="M512 64C264.96 64 64 236.256 64 448c0 182.976 149.344 339.168 357.056 375.744l64.896 90.848C491.968 923.008 501.664 928 512 928s20.032-4.992 26.048-13.408l64.896-90.88C810.656 787.168 960 631.008 960 448 960 236.256 759.04 64 512 64zM288.032 512c-35.296 0-64-28.704-64-64s28.704-64 64-64 64 28.704 64 64S323.328 512 288.032 512zM512.032 512c-35.296 0-64-28.704-64-64s28.704-64 64-64c35.296 0 64 28.704 64 64S547.328 512 512.032 512zM736.032 512c-35.296 0-64-28.704-64-64s28.704-64 64-64 64 28.704 64 64S771.328 512 736.032 512z" p-id="2368"></path></svg>{item.commentsCount}</span>
                        </div>
                      </Link>
                    )
                  })
                }
              </ul>
            }
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
            {
              <ul className="list">

                {
                  this.state.list.map((item, index) => {
                    return (
                      <Link to={'/detail/' + item.originalUrl.substring(item.originalUrl.indexOf('post/') + 5, item.originalUrl.length)} key={item.objectId} className="titinfo">
                        <div className="tag">
                          <span style={{ fontSize: '.12rem', color: '#909090' }}><i style={{ color: '#b71ed7' }}>专栏</i>-{item.user.username}-{item.updatedAt}-</span>
                        </div>
                        <div className="title">
                          <h3>{item.title}</h3>
                        </div>
                        <div className="info">
                          <span style={{ border: '.02rem solid #eee', color: '#666', padding: '0 .09rem' }}><svg className="icon" style={{ width: '1em', height: '1em', verticalAlign: 'middle', fill: 'currentColor', overflow: 'hidden' }} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1604"><path d="M873.6 416h-188.8c12.8-44.8 28.8-115.2 19.2-188.8-6.4-60.8-41.6-105.6-92.8-124.8-38.4-12.8-76.8-6.4-99.2 16-25.6 25.6-38.4 76.8-51.2 128-9.6 35.2-16 70.4-28.8 89.6-32 54.4-102.4 76.8-115.2 80H224c-19.2 0-32 12.8-32 32v448c0 19.2 12.8 32 32 32h547.2C896 928 960 537.6 960 515.2c0-57.6-44.8-99.2-86.4-99.2zM96 416c-19.2 0-32 12.8-32 32v448c0 19.2 12.8 32 32 32s32-12.8 32-32V448c0-19.2-12.8-32-32-32z" fill="#666666" p-id="1605"></path></svg>{item.collectionCount}</span>
                          <span style={{ border: '.02rem solid #eee', color: '#666', padding: '0 .09rem' }}><svg className="icon" style={{ width: '1em', height: '1em', verticalAlign: 'middle', fill: 'currentColor', overflow: 'hidden' }} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2367"><path d="M512 64C264.96 64 64 236.256 64 448c0 182.976 149.344 339.168 357.056 375.744l64.896 90.848C491.968 923.008 501.664 928 512 928s20.032-4.992 26.048-13.408l64.896-90.88C810.656 787.168 960 631.008 960 448 960 236.256 759.04 64 512 64zM288.032 512c-35.296 0-64-28.704-64-64s28.704-64 64-64 64 28.704 64 64S323.328 512 288.032 512zM512.032 512c-35.296 0-64-28.704-64-64s28.704-64 64-64c35.296 0 64 28.704 64 64S547.328 512 512.032 512zM736.032 512c-35.296 0-64-28.704-64-64s28.704-64 64-64 64 28.704 64 64S771.328 512 736.032 512z" p-id="2368"></path></svg>{item.commentsCount}</span>
                        </div>
                      </Link>
                    )
                  })
                }
              </ul>
            }
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
          {
              <ul className="list">

                {
                  this.state.list.map((item, index) => {
                    return (
                      <Link to={'/detail/' + item.originalUrl.substring(item.originalUrl.indexOf('post/') + 5, item.originalUrl.length)} key={item.objectId} className="titinfo">
                        <div className="tag">
                          <span style={{ fontSize: '.12rem', color: '#909090' }}><i style={{ color: '#b71ed7' }}>专栏</i>-{item.user.username}-{item.updatedAt}-</span>
                        </div>
                        <div className="title">
                          <h3>{item.title}</h3>
                        </div>
                        <div className="info">
                          <span style={{ border: '.02rem solid #eee', color: '#666', padding: '0 .09rem' }}><svg className="icon" style={{ width: '1em', height: '1em', verticalAlign: 'middle', fill: 'currentColor', overflow: 'hidden' }} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1604"><path d="M873.6 416h-188.8c12.8-44.8 28.8-115.2 19.2-188.8-6.4-60.8-41.6-105.6-92.8-124.8-38.4-12.8-76.8-6.4-99.2 16-25.6 25.6-38.4 76.8-51.2 128-9.6 35.2-16 70.4-28.8 89.6-32 54.4-102.4 76.8-115.2 80H224c-19.2 0-32 12.8-32 32v448c0 19.2 12.8 32 32 32h547.2C896 928 960 537.6 960 515.2c0-57.6-44.8-99.2-86.4-99.2zM96 416c-19.2 0-32 12.8-32 32v448c0 19.2 12.8 32 32 32s32-12.8 32-32V448c0-19.2-12.8-32-32-32z" fill="#666666" p-id="1605"></path></svg>{item.collectionCount}</span>
                          <span style={{ border: '.02rem solid #eee', color: '#666', padding: '0 .09rem' }}><svg className="icon" style={{ width: '1em', height: '1em', verticalAlign: 'middle', fill: 'currentColor', overflow: 'hidden' }} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2367"><path d="M512 64C264.96 64 64 236.256 64 448c0 182.976 149.344 339.168 357.056 375.744l64.896 90.848C491.968 923.008 501.664 928 512 928s20.032-4.992 26.048-13.408l64.896-90.88C810.656 787.168 960 631.008 960 448 960 236.256 759.04 64 512 64zM288.032 512c-35.296 0-64-28.704-64-64s28.704-64 64-64 64 28.704 64 64S323.328 512 288.032 512zM512.032 512c-35.296 0-64-28.704-64-64s28.704-64 64-64c35.296 0 64 28.704 64 64S547.328 512 512.032 512zM736.032 512c-35.296 0-64-28.704-64-64s28.704-64 64-64 64 28.704 64 64S771.328 512 736.032 512z" p-id="2368"></path></svg>{item.commentsCount}</span>
                        </div>
                      </Link>
                    )
                  })
                }
              </ul>
            }
              </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
          {
              <ul className="list">

                {
                  this.state.list.map((item, index) => {
                    return (
                      <Link to={'/detail/' + item.originalUrl.substring(item.originalUrl.indexOf('post/') + 5, item.originalUrl.length)} key={item.objectId} className="titinfo">
                        <div className="tag">
                          <span style={{ fontSize: '.12rem', color: '#909090' }}><i style={{ color: '#b71ed7' }}>专栏</i>-{item.user.username}-{item.updatedAt}-</span>
                        </div>
                        <div className="title">
                          <h3>{item.title}</h3>
                        </div>
                        <div className="info">
                          <span style={{ border: '.02rem solid #eee', color: '#666', padding: '0 .09rem' }}><svg className="icon" style={{ width: '1em', height: '1em', verticalAlign: 'middle', fill: 'currentColor', overflow: 'hidden' }} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1604"><path d="M873.6 416h-188.8c12.8-44.8 28.8-115.2 19.2-188.8-6.4-60.8-41.6-105.6-92.8-124.8-38.4-12.8-76.8-6.4-99.2 16-25.6 25.6-38.4 76.8-51.2 128-9.6 35.2-16 70.4-28.8 89.6-32 54.4-102.4 76.8-115.2 80H224c-19.2 0-32 12.8-32 32v448c0 19.2 12.8 32 32 32h547.2C896 928 960 537.6 960 515.2c0-57.6-44.8-99.2-86.4-99.2zM96 416c-19.2 0-32 12.8-32 32v448c0 19.2 12.8 32 32 32s32-12.8 32-32V448c0-19.2-12.8-32-32-32z" fill="#666666" p-id="1605"></path></svg>{item.collectionCount}</span>
                          <span style={{ border: '.02rem solid #eee', color: '#666', padding: '0 .09rem' }}><svg className="icon" style={{ width: '1em', height: '1em', verticalAlign: 'middle', fill: 'currentColor', overflow: 'hidden' }} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2367"><path d="M512 64C264.96 64 64 236.256 64 448c0 182.976 149.344 339.168 357.056 375.744l64.896 90.848C491.968 923.008 501.664 928 512 928s20.032-4.992 26.048-13.408l64.896-90.88C810.656 787.168 960 631.008 960 448 960 236.256 759.04 64 512 64zM288.032 512c-35.296 0-64-28.704-64-64s28.704-64 64-64 64 28.704 64 64S323.328 512 288.032 512zM512.032 512c-35.296 0-64-28.704-64-64s28.704-64 64-64c35.296 0 64 28.704 64 64S547.328 512 512.032 512zM736.032 512c-35.296 0-64-28.704-64-64s28.704-64 64-64 64 28.704 64 64S771.328 512 736.032 512z" p-id="2368"></path></svg>{item.commentsCount}</span>
                        </div>
                      </Link>
                    )
                  })
                }
              </ul>
            }
              </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
            {
              <ul className="list">

                {
                  this.state.list.map((item, index) => {
                    return (
                      <Link to={'/detail/' + item.originalUrl.substring(item.originalUrl.indexOf('post/') + 5, item.originalUrl.length)} key={item.objectId} className="titinfo">
                        <div className="tag">
                          <span style={{ fontSize: '.12rem', color: '#909090' }}><i style={{ color: '#b71ed7' }}>专栏</i>-{item.user.username}-{item.updatedAt}-</span>
                        </div>
                        <div className="title">
                          <h3>{item.title}</h3>
                        </div>
                        <div className="info">
                          <span style={{ border: '.02rem solid #eee', color: '#666', padding: '0 .09rem' }}><svg className="icon" style={{ width: '1em', height: '1em', verticalAlign: 'middle', fill: 'currentColor', overflow: 'hidden' }} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1604"><path d="M873.6 416h-188.8c12.8-44.8 28.8-115.2 19.2-188.8-6.4-60.8-41.6-105.6-92.8-124.8-38.4-12.8-76.8-6.4-99.2 16-25.6 25.6-38.4 76.8-51.2 128-9.6 35.2-16 70.4-28.8 89.6-32 54.4-102.4 76.8-115.2 80H224c-19.2 0-32 12.8-32 32v448c0 19.2 12.8 32 32 32h547.2C896 928 960 537.6 960 515.2c0-57.6-44.8-99.2-86.4-99.2zM96 416c-19.2 0-32 12.8-32 32v448c0 19.2 12.8 32 32 32s32-12.8 32-32V448c0-19.2-12.8-32-32-32z" fill="#666666" p-id="1605"></path></svg>{item.collectionCount}</span>
                          <span style={{ border: '.02rem solid #eee', color: '#666', padding: '0 .09rem' }}><svg className="icon" style={{ width: '1em', height: '1em', verticalAlign: 'middle', fill: 'currentColor', overflow: 'hidden' }} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2367"><path d="M512 64C264.96 64 64 236.256 64 448c0 182.976 149.344 339.168 357.056 375.744l64.896 90.848C491.968 923.008 501.664 928 512 928s20.032-4.992 26.048-13.408l64.896-90.88C810.656 787.168 960 631.008 960 448 960 236.256 759.04 64 512 64zM288.032 512c-35.296 0-64-28.704-64-64s28.704-64 64-64 64 28.704 64 64S323.328 512 288.032 512zM512.032 512c-35.296 0-64-28.704-64-64s28.704-64 64-64c35.296 0 64 28.704 64 64S547.328 512 512.032 512zM736.032 512c-35.296 0-64-28.704-64-64s28.704-64 64-64 64 28.704 64 64S771.328 512 736.032 512z" p-id="2368"></path></svg>{item.commentsCount}</span>
                        </div>
                      </Link>
                    )
                  })
                }
              </ul>
            }
              </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
            {
              <ul className="list">

                {
                  this.state.list.map((item, index) => {
                    return (
                      <Link to={'/detail/' + item.originalUrl.substring(item.originalUrl.indexOf('post/') + 5, item.originalUrl.length)} key={item.objectId} className="titinfo">
                        <div className="tag">
                          <span style={{ fontSize: '.12rem', color: '#909090' }}><i style={{ color: '#b71ed7' }}>专栏</i>-{item.user.username}-{item.updatedAt}-</span>
                        </div>
                        <div className="title">
                          <h3>{item.title}</h3>
                        </div>
                        <div className="info">
                          <span style={{ border: '.02rem solid #eee', color: '#666', padding: '0 .09rem' }}><svg className="icon" style={{ width: '1em', height: '1em', verticalAlign: 'middle', fill: 'currentColor', overflow: 'hidden' }} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1604"><path d="M873.6 416h-188.8c12.8-44.8 28.8-115.2 19.2-188.8-6.4-60.8-41.6-105.6-92.8-124.8-38.4-12.8-76.8-6.4-99.2 16-25.6 25.6-38.4 76.8-51.2 128-9.6 35.2-16 70.4-28.8 89.6-32 54.4-102.4 76.8-115.2 80H224c-19.2 0-32 12.8-32 32v448c0 19.2 12.8 32 32 32h547.2C896 928 960 537.6 960 515.2c0-57.6-44.8-99.2-86.4-99.2zM96 416c-19.2 0-32 12.8-32 32v448c0 19.2 12.8 32 32 32s32-12.8 32-32V448c0-19.2-12.8-32-32-32z" fill="#666666" p-id="1605"></path></svg>{item.collectionCount}</span>
                          <span style={{ border: '.02rem solid #eee', color: '#666', padding: '0 .09rem' }}><svg className="icon" style={{ width: '1em', height: '1em', verticalAlign: 'middle', fill: 'currentColor', overflow: 'hidden' }} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2367"><path d="M512 64C264.96 64 64 236.256 64 448c0 182.976 149.344 339.168 357.056 375.744l64.896 90.848C491.968 923.008 501.664 928 512 928s20.032-4.992 26.048-13.408l64.896-90.88C810.656 787.168 960 631.008 960 448 960 236.256 759.04 64 512 64zM288.032 512c-35.296 0-64-28.704-64-64s28.704-64 64-64 64 28.704 64 64S323.328 512 288.032 512zM512.032 512c-35.296 0-64-28.704-64-64s28.704-64 64-64c35.296 0 64 28.704 64 64S547.328 512 512.032 512zM736.032 512c-35.296 0-64-28.704-64-64s28.704-64 64-64 64 28.704 64 64S771.328 512 736.032 512z" p-id="2368"></path></svg>{item.commentsCount}</span>
                        </div>
                      </Link>
                    )
                  })
                }
              </ul>
            }
              </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
            {
              <ul className="list">

                {
                  this.state.list.map((item, index) => {
                    return (
                      <Link to={'/detail/' + item.originalUrl.substring(item.originalUrl.indexOf('post/') + 5, item.originalUrl.length)} key={item.objectId} className="titinfo">
                        <div className="tag">
                          <span style={{ fontSize: '.12rem', color: '#909090' }}><i style={{ color: '#b71ed7' }}>专栏</i>-{item.user.username}-{item.updatedAt}-</span>
                        </div>
                        <div className="title">
                          <h3>{item.title}</h3>
                        </div>
                        <div className="info">
                          <span style={{ border: '.02rem solid #eee', color: '#666', padding: '0 .09rem' }}><svg className="icon" style={{ width: '1em', height: '1em', verticalAlign: 'middle', fill: 'currentColor', overflow: 'hidden' }} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1604"><path d="M873.6 416h-188.8c12.8-44.8 28.8-115.2 19.2-188.8-6.4-60.8-41.6-105.6-92.8-124.8-38.4-12.8-76.8-6.4-99.2 16-25.6 25.6-38.4 76.8-51.2 128-9.6 35.2-16 70.4-28.8 89.6-32 54.4-102.4 76.8-115.2 80H224c-19.2 0-32 12.8-32 32v448c0 19.2 12.8 32 32 32h547.2C896 928 960 537.6 960 515.2c0-57.6-44.8-99.2-86.4-99.2zM96 416c-19.2 0-32 12.8-32 32v448c0 19.2 12.8 32 32 32s32-12.8 32-32V448c0-19.2-12.8-32-32-32z" fill="#666666" p-id="1605"></path></svg>{item.collectionCount}</span>
                          <span style={{ border: '.02rem solid #eee', color: '#666', padding: '0 .09rem' }}><svg className="icon" style={{ width: '1em', height: '1em', verticalAlign: 'middle', fill: 'currentColor', overflow: 'hidden' }} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2367"><path d="M512 64C264.96 64 64 236.256 64 448c0 182.976 149.344 339.168 357.056 375.744l64.896 90.848C491.968 923.008 501.664 928 512 928s20.032-4.992 26.048-13.408l64.896-90.88C810.656 787.168 960 631.008 960 448 960 236.256 759.04 64 512 64zM288.032 512c-35.296 0-64-28.704-64-64s28.704-64 64-64 64 28.704 64 64S323.328 512 288.032 512zM512.032 512c-35.296 0-64-28.704-64-64s28.704-64 64-64c35.296 0 64 28.704 64 64S547.328 512 512.032 512zM736.032 512c-35.296 0-64-28.704-64-64s28.704-64 64-64 64 28.704 64 64S771.328 512 736.032 512z" p-id="2368"></path></svg>{item.commentsCount}</span>
                        </div>
                      </Link>
                    )
                  })
                }
              </ul>
            }
              </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
            {
              <ul className="list">

                {
                  this.state.list.map((item, index) => {
                    return (
                      <Link to={'/detail/' + item.originalUrl.substring(item.originalUrl.indexOf('post/') + 5, item.originalUrl.length)} key={item.objectId} className="titinfo">
                        <div className="tag">
                          <span style={{ fontSize: '.12rem', color: '#909090' }}><i style={{ color: '#b71ed7' }}>专栏</i>-{item.user.username}-{item.updatedAt}-</span>
                        </div>
                        <div className="title">
                          <h3>{item.title}</h3>
                        </div>
                        <div className="info">
                          <span style={{ border: '.02rem solid #eee', color: '#666', padding: '0 .09rem' }}><svg className="icon" style={{ width: '1em', height: '1em', verticalAlign: 'middle', fill: 'currentColor', overflow: 'hidden' }} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1604"><path d="M873.6 416h-188.8c12.8-44.8 28.8-115.2 19.2-188.8-6.4-60.8-41.6-105.6-92.8-124.8-38.4-12.8-76.8-6.4-99.2 16-25.6 25.6-38.4 76.8-51.2 128-9.6 35.2-16 70.4-28.8 89.6-32 54.4-102.4 76.8-115.2 80H224c-19.2 0-32 12.8-32 32v448c0 19.2 12.8 32 32 32h547.2C896 928 960 537.6 960 515.2c0-57.6-44.8-99.2-86.4-99.2zM96 416c-19.2 0-32 12.8-32 32v448c0 19.2 12.8 32 32 32s32-12.8 32-32V448c0-19.2-12.8-32-32-32z" fill="#666666" p-id="1605"></path></svg>{item.collectionCount}</span>
                          <span style={{ border: '.02rem solid #eee', color: '#666', padding: '0 .09rem' }}><svg className="icon" style={{ width: '1em', height: '1em', verticalAlign: 'middle', fill: 'currentColor', overflow: 'hidden' }} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2367"><path d="M512 64C264.96 64 64 236.256 64 448c0 182.976 149.344 339.168 357.056 375.744l64.896 90.848C491.968 923.008 501.664 928 512 928s20.032-4.992 26.048-13.408l64.896-90.88C810.656 787.168 960 631.008 960 448 960 236.256 759.04 64 512 64zM288.032 512c-35.296 0-64-28.704-64-64s28.704-64 64-64 64 28.704 64 64S323.328 512 288.032 512zM512.032 512c-35.296 0-64-28.704-64-64s28.704-64 64-64c35.296 0 64 28.704 64 64S547.328 512 512.032 512zM736.032 512c-35.296 0-64-28.704-64-64s28.704-64 64-64 64 28.704 64 64S771.328 512 736.032 512z" p-id="2368"></path></svg>{item.commentsCount}</span>
                        </div>
                      </Link>
                    )
                  })
                }
              </ul>
            }
              </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
            {
              <ul className="list">

                {
                  this.state.list.map((item, index) => {
                    return (
                      <Link to={'/detail/' + item.originalUrl.substring(item.originalUrl.indexOf('post/') + 5, item.originalUrl.length)} key={item.objectId} className="titinfo">
                        <div className="tag">
                          <span style={{ fontSize: '.12rem', color: '#909090' }}><i style={{ color: '#b71ed7' }}>专栏</i>-{item.user.username}-{item.updatedAt}-</span>
                        </div>
                        <div className="title">
                          <h3>{item.title}</h3>
                        </div>
                        <div className="info">
                          <span style={{ border: '.02rem solid #eee', color: '#666', padding: '0 .09rem' }}><svg className="icon" style={{ width: '1em', height: '1em', verticalAlign: 'middle', fill: 'currentColor', overflow: 'hidden' }} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1604"><path d="M873.6 416h-188.8c12.8-44.8 28.8-115.2 19.2-188.8-6.4-60.8-41.6-105.6-92.8-124.8-38.4-12.8-76.8-6.4-99.2 16-25.6 25.6-38.4 76.8-51.2 128-9.6 35.2-16 70.4-28.8 89.6-32 54.4-102.4 76.8-115.2 80H224c-19.2 0-32 12.8-32 32v448c0 19.2 12.8 32 32 32h547.2C896 928 960 537.6 960 515.2c0-57.6-44.8-99.2-86.4-99.2zM96 416c-19.2 0-32 12.8-32 32v448c0 19.2 12.8 32 32 32s32-12.8 32-32V448c0-19.2-12.8-32-32-32z" fill="#666666" p-id="1605"></path></svg>{item.collectionCount}</span>
                          <span style={{ border: '.02rem solid #eee', color: '#666', padding: '0 .09rem' }}><svg className="icon" style={{ width: '1em', height: '1em', verticalAlign: 'middle', fill: 'currentColor', overflow: 'hidden' }} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2367"><path d="M512 64C264.96 64 64 236.256 64 448c0 182.976 149.344 339.168 357.056 375.744l64.896 90.848C491.968 923.008 501.664 928 512 928s20.032-4.992 26.048-13.408l64.896-90.88C810.656 787.168 960 631.008 960 448 960 236.256 759.04 64 512 64zM288.032 512c-35.296 0-64-28.704-64-64s28.704-64 64-64 64 28.704 64 64S323.328 512 288.032 512zM512.032 512c-35.296 0-64-28.704-64-64s28.704-64 64-64c35.296 0 64 28.704 64 64S547.328 512 512.032 512zM736.032 512c-35.296 0-64-28.704-64-64s28.704-64 64-64 64 28.704 64 64S771.328 512 736.032 512z" p-id="2368"></path></svg>{item.commentsCount}</span>
                        </div>
                      </Link>
                    )
                  })
                }
              </ul>
            }
              </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
            {
              <ul className="list">

                {
                  this.state.list.map((item, index) => {
                    return (
                      <Link to={'/detail/' + item.originalUrl.substring(item.originalUrl.indexOf('post/') + 5, item.originalUrl.length)} key={item.objectId} className="titinfo">
                        <div className="tag">
                          <span style={{ fontSize: '.12rem', color: '#909090' }}><i style={{ color: '#b71ed7' }}>专栏</i>-{item.user.username}-{item.updatedAt}-</span>
                        </div>
                        <div className="title">
                          <h3>{item.title}</h3>
                        </div>
                        <div className="info">
                          <span style={{ border: '.02rem solid #eee', color: '#666', padding: '0 .09rem' }}><svg className="icon" style={{ width: '1em', height: '1em', verticalAlign: 'middle', fill: 'currentColor', overflow: 'hidden' }} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1604"><path d="M873.6 416h-188.8c12.8-44.8 28.8-115.2 19.2-188.8-6.4-60.8-41.6-105.6-92.8-124.8-38.4-12.8-76.8-6.4-99.2 16-25.6 25.6-38.4 76.8-51.2 128-9.6 35.2-16 70.4-28.8 89.6-32 54.4-102.4 76.8-115.2 80H224c-19.2 0-32 12.8-32 32v448c0 19.2 12.8 32 32 32h547.2C896 928 960 537.6 960 515.2c0-57.6-44.8-99.2-86.4-99.2zM96 416c-19.2 0-32 12.8-32 32v448c0 19.2 12.8 32 32 32s32-12.8 32-32V448c0-19.2-12.8-32-32-32z" fill="#666666" p-id="1605"></path></svg>{item.collectionCount}</span>
                          <span style={{ border: '.02rem solid #eee', color: '#666', padding: '0 .09rem' }}><svg className="icon" style={{ width: '1em', height: '1em', verticalAlign: 'middle', fill: 'currentColor', overflow: 'hidden' }} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2367"><path d="M512 64C264.96 64 64 236.256 64 448c0 182.976 149.344 339.168 357.056 375.744l64.896 90.848C491.968 923.008 501.664 928 512 928s20.032-4.992 26.048-13.408l64.896-90.88C810.656 787.168 960 631.008 960 448 960 236.256 759.04 64 512 64zM288.032 512c-35.296 0-64-28.704-64-64s28.704-64 64-64 64 28.704 64 64S323.328 512 288.032 512zM512.032 512c-35.296 0-64-28.704-64-64s28.704-64 64-64c35.296 0 64 28.704 64 64S547.328 512 512.032 512zM736.032 512c-35.296 0-64-28.704-64-64s28.704-64 64-64 64 28.704 64 64S771.328 512 736.032 512z" p-id="2368"></path></svg>{item.commentsCount}</span>
                        </div>
                      </Link>
                    )
                  })
                }
              </ul>
            }
              </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
            {
              <ul className="list">

                {
                  this.state.list.map((item, index) => {
                    return (
                      <Link to={'/detail/' + item.originalUrl.substring(item.originalUrl.indexOf('post/') + 5, item.originalUrl.length)} key={item.objectId} className="titinfo">
                        <div className="tag">
                          <span style={{ fontSize: '.12rem', color: '#909090' }}><i style={{ color: '#b71ed7' }}>专栏</i>-{item.user.username}-{item.updatedAt}-</span>
                        </div>
                        <div className="title">
                          <h3>{item.title}</h3>
                        </div>
                        <div className="info">
                          <span style={{ border: '.02rem solid #eee', color: '#666', padding: '0 .09rem' }}><svg className="icon" style={{ width: '1em', height: '1em', verticalAlign: 'middle', fill: 'currentColor', overflow: 'hidden' }} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1604"><path d="M873.6 416h-188.8c12.8-44.8 28.8-115.2 19.2-188.8-6.4-60.8-41.6-105.6-92.8-124.8-38.4-12.8-76.8-6.4-99.2 16-25.6 25.6-38.4 76.8-51.2 128-9.6 35.2-16 70.4-28.8 89.6-32 54.4-102.4 76.8-115.2 80H224c-19.2 0-32 12.8-32 32v448c0 19.2 12.8 32 32 32h547.2C896 928 960 537.6 960 515.2c0-57.6-44.8-99.2-86.4-99.2zM96 416c-19.2 0-32 12.8-32 32v448c0 19.2 12.8 32 32 32s32-12.8 32-32V448c0-19.2-12.8-32-32-32z" fill="#666666" p-id="1605"></path></svg>{item.collectionCount}</span>
                          <span style={{ border: '.02rem solid #eee', color: '#666', padding: '0 .09rem' }}><svg className="icon" style={{ width: '1em', height: '1em', verticalAlign: 'middle', fill: 'currentColor', overflow: 'hidden' }} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2367"><path d="M512 64C264.96 64 64 236.256 64 448c0 182.976 149.344 339.168 357.056 375.744l64.896 90.848C491.968 923.008 501.664 928 512 928s20.032-4.992 26.048-13.408l64.896-90.88C810.656 787.168 960 631.008 960 448 960 236.256 759.04 64 512 64zM288.032 512c-35.296 0-64-28.704-64-64s28.704-64 64-64 64 28.704 64 64S323.328 512 288.032 512zM512.032 512c-35.296 0-64-28.704-64-64s28.704-64 64-64c35.296 0 64 28.704 64 64S547.328 512 512.032 512zM736.032 512c-35.296 0-64-28.704-64-64s28.704-64 64-64 64 28.704 64 64S771.328 512 736.032 512z" p-id="2368"></path></svg>{item.commentsCount}</span>
                        </div>
                      </Link>
                    )
                  })
                }
              </ul>
            }
              </div>
        </Tabs>
      </div>
    )
  }

}
const List = ({ list }) => (
  <div>
    <App />
    {/* <ul className="list">

      {}
    </ul> */}
  </div>
)

List.propTypes = {
  list: PropTypes.array
}


export default List