import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollections } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../CollectionPreview';

const CollectionOverview = ({ collections }) => (
	<div className='collection-overview'>
		{collections.map(({ id, ...collectionProperties }) => (
			<CollectionPreview key={id} {...collectionProperties} />
		))}
	</div>
);

const mapStateToProps = createStructuredSelector({ collections: selectCollections });

export default connect(mapStateToProps)(CollectionOverview);
