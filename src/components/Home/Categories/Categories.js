import {Link} from 'react-router-dom';

const importImage = (image) => {
    return require(`../../../assets/img/900x900/${image}`).default;
} 

const Categories = (props) => {
    const categories = props.categories;

    return (
        <div className="container pb-4">
            <h2 className="display-5 text-center mb-5 mt-5 mt-md-5">Product Categories</h2>
            <div className="row">
            {categories.map((item, index) => {
                  return (
                    <Link to={"/listings/"+item.id} className="col-md-6 mb-5 mb-lg-5">
                    <div className="overflow-hidden rounded-lg-pseudo">
                        <div className="bg-img-hero rounded-lg min-h-450rem p-4 p-sm-8 transition-zoom-hover" style={{ backgroundImage: 'url(' + importImage(item.image) + ')' }}>
                            <h2 className="display-4 mb-3">{item.name}</h2>
                            <p className="text-dark">{item.description}</p>


                            <Link className="btn btn-sm btn-light btn-pill transition-3d-hover px-5" to={"/listings/"+item.id}>Shop</Link>
                        </div>
                    </div>
                </Link>
                  )
                })}
                

                
            </div>
        </div>

    )
}

export default Categories;