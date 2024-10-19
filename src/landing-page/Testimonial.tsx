import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../store';
import { LandingPageActions } from './reducers/actions';
import { getPublicURL } from '../utils';

const Testimonial = () => {
    const [selectedCustomerReview, setSelectedCustomerReview] = React.useState(0);
    const dispatach = useAppDispatch();
    const { customerReviews } = useAppSelector(state => state.LandingPage);

    useEffect(() => {
        dispatach(LandingPageActions.getCustomReviews());
    }, [])

    return (
        <div id="testimonial-section" className="section flex flex-col gap-8">
            <div>
                <p className='title-3 text-center xl:text-left'>What customers think about our product:</p>
            </div>
            <div className='grid grid-cols-1 xl:grid-cols-10 gap-12 xl:gap-0'>
                <div className='col-span-1 xl:col-span-2 flex flex-row justify-center xl:flex-col gap-8 flex-wrap'>
                    {customerReviews.map((review, index) => {
                        return (
                            <div
                                key={review.id}
                                className={`cursor-pointer flex flex-col justify-center items-center xl:items-start ${index !== selectedCustomerReview ? "opacity-50 text-gray-400" : ""}`}
                                onClick={() => setSelectedCustomerReview(index)}
                            >
                                <img className="w-16 h-16 rounded-full" src={getPublicURL("/images/avatar.png")} alt="Avatar" />
                                <span className='title-4'>{review.name}</span>
                            </div>
                        )
                    })}
                </div>
                <div className='col-span-1 xl:col-span-8 h-full flex justify-center items-center'>
                    <p className='title-2 text-center xl:text-left'>
                        <q>{customerReviews[selectedCustomerReview]?.comment ?? ""}</q>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Testimonial;
