import Controller from "./controller.js"

const [rootPath] = window.location.href.split('/pages/')
const factory = {
  async initalize() {
    return Controller.initialize({
     
    view: new CardsView(),
    service: new CardsService({ 
    dbUrl: `${rootPath}/assets/database.json` ,
    cardListWorker
      })
    })
  }
}

export default factory