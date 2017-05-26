import * as classrouter from "classrouter";
import * as model1 from "../../../shared/model1";

@classrouter.GET
@classrouter.PATH('/test')
export class Route implements classrouter.IRoute {
    async action(req:any, res:any, next:any) {
        return "the server = " + new model1.Model1().a;
    }
}