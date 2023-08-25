

class IndexController{

  viewIndex = (req, res) => {

    res.render('index', {title: 'ZenPlaces'})

  }
}

module.exports = new IndexController;