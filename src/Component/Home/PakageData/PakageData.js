import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faCheckCircle, faCoffee } from '@fortawesome/free-solid-svg-icons'


const PakageData = ({ pakage }) => {
    console.log(pakage)
    return (
        <div className="col-md-4 mt-5 d-flex justify-content-center pakageData">
            <div class="card" style={{ width: '18rem' }}>

                <div class="card-body">
                    <h4 class="card-title text-center">{pakage.name}</h4>
                    <h6 class="card-title text-center text-small">{pakage.subtitle}</h6>
                    <h5></h5>
                    <div className="offer mb-5 mt-5 ">
                        <ul class="list-unstyled mt-3 ">
                            <li  > <FontAwesomeIcon className="text-small" icon={faCheck} />  {pakage.name1}</li>
                            <li > <FontAwesomeIcon className="text-small"  icon={faCheck}/>  {pakage.name2}</li>
                            <li ><FontAwesomeIcon className="text-small"  icon={faCheck}/>  {pakage.name3}</li>
                            <li ><FontAwesomeIcon className="text-small"  icon={faCheck}/>  {pakage.name4}</li>
                            <li ><FontAwesomeIcon className="text-small"  icon={faCheck}/>  {pakage.name5}</li>
                            <li ><FontAwesomeIcon className="text-small"  icon={faCheck}/>  {pakage.name6}</li>
                            <li ><FontAwesomeIcon className="text-small"  icon={faCheck}/>  {pakage.name7}</li>
                            <li ><FontAwesomeIcon className="text-small"  icon={faCheck}/>  {pakage.name8}</li>
                        </ul>
                        <h2 class="text-brand"> ${ pakage.price}.00</h2>
                    </div>
                    <button class="btn-brand ms-auto">Get Offer</button>
                </div>
            </div>
        </div>
    );
};

export default PakageData;