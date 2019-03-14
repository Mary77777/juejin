import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import api from '@/api/kind/index';
import { NavBar } from 'antd-mobile';
import '../components/kind/style.scss';


class Com extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: []
		};
	}

	componentDidMount() {
		api.requestlist().then((data) => {
			// console.log(data)
			this.setState({
				list: data
			});
		});
	}
	render() {
		return (
			<div className="content">
				<NavBar
					mode="dark"
					
				>话题</NavBar>
				<h1>全部话题</h1>
				<ul>
					{this.state.list.map((item, index) => {
						return (
							<Link to={'/KindDetail/' + index} key={item.objectId}>
								<li className="list" key={item.objectId}>
									<div className="img">
										<img className="logo" src={item.icon} alt="11" />
									</div>
									<div className="introduce">
										<h2>{item.title}</h2>
										<span>
											{item.followersCount}关注·{item.msgsCount}沸点
										</span>
										<p>+关注</p>
									</div>
								</li>
							</Link>
						);
					})}
				</ul>
			</div>
		);
	}
}
export default Com;
