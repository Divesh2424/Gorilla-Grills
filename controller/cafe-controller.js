export const getHomePage = async (req, res) => {
    try {
        return res.render("home");
    } catch (error) {
        console.error(`Error rendering the menu page: ${error}`);
    }
}