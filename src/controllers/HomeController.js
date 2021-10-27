class HomeController {
  index(req, res) {
    res.json({ allSet: true });
  }
}

export default new HomeController();
