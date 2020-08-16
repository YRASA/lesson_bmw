import { Controller } from 'egg'

export default class UserController extends Controller {
  public async index() {
    // JSON
    this.ctx.body = JSON.stringify({
      msg: 'Login Success'
    })
  }
}