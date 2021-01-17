import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { fetchCollectionsAsync } from '../../redux/shop/shop.actions';
import CollectionsOverview from '../../components/CollectionsOverview';
import CollectionView from '../CollectionView';
import './styles.scss';

class ShopPage extends Component {
	componentDidMount() {
		const { fetchCollectionsAsync } = this.props;
		fetchCollectionsAsync();
	}

	render() {
		const { match } = this.props;

		return (
			<div className='shop-page'>
				<Route exact path={`${match.path}`} component={CollectionsOverview} />
				<Route exact path={`${match.path}/:collectionId`} component={CollectionView} />
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	fetchCollectionsAsync: () => dispatch(fetchCollectionsAsync())
});

export default connect(null, mapDispatchToProps)(ShopPage);
