import { ASKITECT_SERVICE } from "../../api";

const getCustomReviews = async () => {
    return await ASKITECT_SERVICE.get("/customer-reviews");
}

export const LandingPageServices = {
    getCustomReviews
}
