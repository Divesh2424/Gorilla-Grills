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