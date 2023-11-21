import Card from "./Card";

function Tours({tours,removeTour}){
    return(
        <div classNme="container">
            <div>
                <h2 className="tittle">Plan With Me</h2>
            </div>
            <div className="cards">
                {
                    tours.map( (tour) => {
                        return <Card {...tour} removeTour={removeTour}></Card>
                    })
                }
            </div>
        </div>
    )
}

export default Tours;