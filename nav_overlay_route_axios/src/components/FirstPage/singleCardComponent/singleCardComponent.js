import React from 'react'

function singleCard({ imagePath }) {
    return (
        <div>
            {/* <!-- Card Narrower --> */}
            <div className="card card-cascade narrower">
                {/* <!-- Card image --> */}
                <div className="view view-cascade overlay">
                    <img src={imagePath} class="card-img-top " alt="Loding" />
                    <div class="mask rgba-white-slight"></div>
                </div>
                {/* <!-- Card content --> */}
                <div class="card-body card-body-cascade">
                    {/* <!-- Label --> */}
                    <h5 class="pink-text pb-2 pt-1"><i class="fas fa-utensils"></i> Culinary</h5>
                    {/* <!-- Title --> */}
                    <h4 class="font-weight-bold card-title">Cheat day inspirations</h4>
                    {/* <!-- Text --> */}
                    <p class="card-text">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
                                    laboriosam, nisi ut aliquid ex ea commodi.</p>
                    {/* <!-- Button --> */}
                    <a href="google.com" className="btn btn-primary">Button</a>
                </div>
            </div>
            {/* <!-- Card Narrower --> */}
        </div>
    )
}

export default singleCard
