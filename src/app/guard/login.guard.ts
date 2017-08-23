/**
 *
 * Created by PhpStorm.
 * @author lait <lait233@foxmail.com>
 * Date: 17/8/21
 * Time: 23:19
 */
import { CanActivate } from "@angular/router";

export class LoginGuard implements CanActivate {
    canActivate() {

        let loggedId: boolean = Math.random() < 0.5;

        if ( !loggedId ) {
            console.log( "用户未登录" );
        }
        return loggedId;
    }
}
