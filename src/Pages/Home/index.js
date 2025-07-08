import HomeBanner from "../../Components/HomeBanner";

const Home =()=>{
    return(
        <>
        <HomeBanner/>


          <section className="homeProducts">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <img src="https://api.spicezgold.com/download/file_1734525757507_NewProject(34).jpg" className="cursor"/>
                    </div>
                </div>
            </div>
          </section>


        </>
    )

}

export default  Home;