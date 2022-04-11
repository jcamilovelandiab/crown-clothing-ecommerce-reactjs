import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import CollectionItemComponent from '../../components/collection-item/collection-item.component';

import { selectShopCollection } from '../../redux/shop/shop.selectors';

import './collection.styles.scss';

const CollectionPage = ({ collection }) => {

  const { title, items } = collection;

  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {
          items.map(item => (
            <CollectionItemComponent key={item.id} item={item} />
          ))
        }
      </div>
    </div>
  );
}

const withParams = (Child) => {
  return (props) => {
    const params = useParams();
    return <Child {...props} params={params} />
  }
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectShopCollection(ownProps.params.collectionId)(state)
});

export default withParams(connect(mapStateToProps)(CollectionPage));