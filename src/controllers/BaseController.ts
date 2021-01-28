import { IBaseController } from "../interfaces/IBaseController";

export class BaseController implements IBaseController {
    constructor() { 
        this.index = this.index.bind(this);
        this.show = this.show.bind(this);
        this.create = this.create.bind(this);
        this.edit = this.edit.bind(this);
        this.destroy = this.destroy.bind(this);
    }

    public index(req, res) {
    }

    public show(req, res) {
    }

    public create(req, res) {
    }
    
    public edit(req, res) {
    }
    
    public destroy(req, res) {
    }
}