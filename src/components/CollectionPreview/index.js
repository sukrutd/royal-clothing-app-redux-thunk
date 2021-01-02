import React from 'react';
import CollectionItem from '../CollectionItem';
import './styles.scss';

const CollectionPreview = ({ title, items }) => {
	return (
		<div className='collection-preview'>
			<h2 className='title'>{title.toUpperCase()}</h2>
			<div className='preview'>
				{items
					.filter((item, index) => index < 4)
					.map(({ id, ...itemProperties }) => (
						<CollectionItem key={id} {...itemProperties} />
					))}
			</div>
		</div>
	);
};

export default CollectionPreview;
