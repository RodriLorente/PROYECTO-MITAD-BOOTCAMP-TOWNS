class PlaceController {

  viewPlaces = (req, res) => {

    res.send("aquí se estará la vista de Places")

  }
}

module.exports = new PlaceController;