export const getHomePage = async (req, res) => {
    try {
        return res.render("home");
    } catch (error) {
        console.error(`Error rendering the menu page: ${error}`);
    }
}

export const getAboutPage = async (req, res) => {
    try {
        return res.render("about");
    } catch (error) {
        console.error(`Error rendering the menu page: ${error}`);
    }
}

export const getMenuPage = async (req, res) => {
    try {
        return res.render("menu");
    } catch (error) {
        console.error(`Error rendering the menu page: ${error}`);
    }
}

export const getOrderPage = async (req, res) => {
    try {
        return res.render("order");
    } catch (error) {
        console.error(`Error rendering the menu page: ${error}`);
    }
}