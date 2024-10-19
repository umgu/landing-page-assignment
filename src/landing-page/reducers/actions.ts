import { setCustomerReviews } from ".";
import { AppDispatch } from "../../store";
import { LandingPageServices } from "./services";

const getCustomReviews = () => async (dispatch: AppDispatch) => {
    try{
        const res = await LandingPageServices.getCustomReviews();
        const data = res.data;
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
