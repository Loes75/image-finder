import React from 'react'

const Imagen = (props) => {
    const {largeImageURL, likes, webformatURL, tags, views} = props.imagen;
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card ">
                <img src={webformatURL} alt={tags} className="card-img-top" />
                <div className="card-body">
                    <h3 className="card-text h5">{likes} Likes</h3>
                    <h3 className="card-text h5">{views} View</h3>
                    <a href={largeImageURL} target="_blank" className="btn btn-primary btn-block">See Full Image</a>
                </div>
            </div>  
        </div>
    )
}

export default Imagen;
