import { setCustomerReviews } from ".";
import { AppDispatch } from "../../store";
import { LandingPageServices } from "./services";

const getCustomReviews = () => async (dispatch: AppDispatch) => {
    try{
        // const res = await LandingPageServices.getCustomReviews();
        // const data = res.data;
        const data = {
            "reviews": [
                {
                    "id": 1,
                    "name": "John Doe",
                    "rating": 5,
                    "comment": "Excellent service and fast delivery! The quality of the product exceeded my expectations. Will definitely order again.",
                    "date": "2024-09-25"
                },
                {
                    "id": 2,
                    "name": "Jane Smith",
                    "rating": 4,
                    "comment": "Very satisfied with my purchase. The product is well-made, although the packaging could have been better.",
                    "date": "2024-09-23"
                },
                {
                    "id": 3,
                    "name": "Robert Wilson",
                    "rating": 3,
                    "comment": "The product is good, but the shipping was delayed. Customer support was helpful in resolving the issue.",
                    "date": "2024-09-20"
                },
                {
                    "id": 4,
                    "name": "Emily Johnson",
                    "rating": 5,
                    "comment": "Absolutely love it! The design is perfect, and it arrived much earlier than expected. Highly recommend!",
                    "date": "2024-09-18"
                },
                {
                    "id": 5,
                    "name": "Michael Brown",
                    "rating": 2,
                    "comment": "The product did not match the description. I'm disappointed and had to return it. Customer service was average.",
                    "date": "2024-09-15"
                }
            ]
        };
        dispatch(setCustomerReviews(data?.reviews))
        return {success: true};
    }
    catch(error: any) {
        // dispatch(errorToast(error?.response?.data?.message || "Server Error"));
        // dispatch(response());
        return {success: false};
    }
}

export const LandingPageActions = {
    getCustomReviews,
};
