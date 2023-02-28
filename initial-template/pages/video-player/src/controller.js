export default class Controller {
    constructor({}){

    }
    static async initialize(deps) {
        const controller = new CardsController(deps)
        return controller.init()
      }


      async init(){
        
      }
}