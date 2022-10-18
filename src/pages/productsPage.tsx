import Loader from '../components/Loader';
import { Product } from '../components/Product';
import { useProducts } from '../hooks/products';
import Error from '../components/Error';
import Modal from '../components/Modal';
import CreateProduct from '../components/CreateProduct';
import { useContext } from 'react';
import { IProduct } from '../models';
import { ModalContext } from '../context/ContextModal';

const ProductsPage = () => {
  
    const { products, loading, error, addProduct } = useProducts();
    const {modal, open:openModal, close:closeModal}=useContext(ModalContext)

    function createHandler(product: IProduct) {
        closeModal()
        addProduct(product);
    }

    return (
        <div className='container mx-auto max-w-2xl pt-5'>
            {loading ? <Loader /> : null}
            {error ? <Error error={error} /> : null}
            {!loading && !error
                ? products.map((product) => (
                      <Product
                          product={product}
                          key={product.id}
                      />
                  ))
                : null}

            {modal ? (
                <Modal
                    title='Create new product'
                    onClose={closeModal}>
                    {' '}
                    <CreateProduct onCreate={createHandler} />{' '}
                </Modal>
            ) : null}
            <button
                onClick={openModal}
                className='fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2'>
                +
            </button>
        </div>
    );
  
}

export default ProductsPage