import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectIsFetchingCollections, selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';
import { fetchCollectionsAsync } from '../../redux/shop/shop.actions';
import CollectionOverview from '../../components/CollectionOverview';
import WithSpinner from '../../components/HOC/WithSpinner';
import Collection from '../Collection';
import './styles.scss';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionWithSpinner = WithSpinner(Collection);

class ShopPage extends Component {
	componentDidMount() {
		const { fetchCollectionsAsync } = this.props;
		fetchCollectionsAsync();
	}

	render() {
		const { match, isFetchingCollections, isCollectionLoaded } = this.props;

		return (
			<div className='shop-page'>
				<Route
					exact
					path={`${match.path}`}
					render={(props) => <CollectionOverviewWithSpinner isLoading={isFetchingCollections} {...props} />}
				/>
				<Route
					exact
					path={`${match.path}/:collectionId`}
					render={(props) => <CollectionWithSpinner isLoading={!isCollectionLoaded} {...props} />}
				/>
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	isFetchingCollections: selectIsFetchingCollections,
	isCollectionLoaded: selectIsCollectionsLoaded
});

const mapDispatchToProps = (dispatch) => ({
	fetchCollectionsAsync: () => dispatch(fetchCollectionsAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
