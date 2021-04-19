exports.getError = (req, res) => {
    res.status(404).render("error", {docTitle: "Error"});
}