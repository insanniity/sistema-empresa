
type Props ={
    controller : string;
    action : string;
}

const Breadcrumb = ({controller, action}:Props) => {
    return(
        <nav aria-label="breadcrumb" className="col-lg-12 mb-3">
            <ol className="breadcrumb p-3 rounded">
                <li className="breadcrumb-item">Home</li>
                <li className="breadcrumb-item">{controller}</li>
                <li className="breadcrumb-item active text-capitalize" aria-current="page">{action}</li>
            </ol>
        </nav>
    )
}

export default Breadcrumb;