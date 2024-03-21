import React from 'react'
import "./Style/MentorCard.css"
import Mentors from './MentorApi'

const MentorCard = () => {
    return (
        <>
            <section className='main-card--container'>
                {
                    Mentors.map((currElem) => {

                        const { id, name, category, image, description } = currElem;
                        return (
                            <>
                                <div className="card-container">

                                    <div className='cardxxx'>
                                        <div>
                                            <img src={currElem.image} alt="" className='card-media' />
                                            <div className="card-buttons">
                                                <button className="callButton">Call</button>
                                                <button className="messageButton">Message</button>
                                            </div>
                                        </div>

                                        <div className="card-body">
                                            <span className='card-number card-circle subtle'>{currElem.id}</span>
                                            <span className='card-author subtle'>{currElem.category}</span>
                                            <h2 className='card-title'>{currElem.name}</h2>
                                            <span className="card-description subtle">
                                                {currElem.description}
                                            </span>

                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    }
                    )}

            </section>
        </>
    )
}

export default MentorCard;