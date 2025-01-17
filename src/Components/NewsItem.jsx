import image from "../assets/news.png"

const NewsItem = ({title, description, src, url}) => {
  return (
        <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-2 px-2 py-2 card-deck" style={{maxWidth: "290px"}}>
    <img src={src?src:image} style={{height:'170px', width:'270px'}} className="card-img-top" alt="..." />
    <div className="card-body">
        <h5 className="card-title">{title.slice(0,50)}</h5>
        <p className="card-text">{description?description.slice(0,90):"News is getting ready... please wait for while"}</p>
        <a href={url} className="btn btn-primary">Read More</a>
    </div>
    </div>
  )
}

export default NewsItem