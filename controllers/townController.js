
class TownController {

  viewTowns = (req, res) => {

    res.send("esta será la vista de Towns")

  }
}

module.exports = new TownController;