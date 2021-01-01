import React, { Component } from 'react';
import shopData from './shop.data';
import CollectionPreview from '../../components/CollectionPreview';

class ShopPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			collections: shopData
		};
	}
	render() {
		const { collections } = this.state;
		return (
			<div className='shop-page'>
				{collections.map(({ id, ...collectionProperties }) => (
					<CollectionPreview key={id} {...collectionProperties} />
				))}
			</div>
		);
	}
}

export default ShopPage;
