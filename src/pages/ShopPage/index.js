import React from 'react';
import { Route } from 'react-router-dom';
import CollectionOverview from '../../components/CollectionOverview';
import Collection from '../Collection';
import './styles.scss';

const ShopPage = ({ match }) => (
	<div className='shop-page'>
		<Route exact path={`${match.path}`} component={CollectionOverview} />
		<Route exact path={`${match.path}/:collectionId`} component={Collection} />
	</div>
);

export default ShopPage;
