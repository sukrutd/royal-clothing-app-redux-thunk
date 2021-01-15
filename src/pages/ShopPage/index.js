import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';
import CollectionOverview from '../../components/CollectionOverview';
import WithSpinner from '../../components/HOC/WithSpinner';
import Collection from '../Collection';
import './styles.scss';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionWithSpinner = WithSpinner(Collection);

class ShopPage extends Component {
	state = {
		loading: true
	};

	unsubscribeFromSnapShot = null;

	componentDidMount() {
		const { updateCollections } = this.props;
		const collectionRef = firestore.collection('collections');

		collectionRef.onSnapshot(async (snapshot) => {
			const collectionsMap = convertCollectionSnapshotToMap(snapshot);
			updateCollections(collectionsMap);
			this.setState({ loading: false });
		});
	}

	render() {
		const { match } = this.props;
		const { loading } = this.state;

		return (
			<div className='shop-page'>
				<Route
					exact
					path={`${match.path}`}
					render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props} />}
				/>
				<Route
					exact
					path={`${match.path}/:collectionId`}
					render={(props) => <CollectionWithSpinner isLoading={loading} {...props} />}
				/>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	updateCollections: (collectionsMap) => dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);
