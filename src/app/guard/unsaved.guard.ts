/**
 *
 * Created by PhpStorm.
 * @author lait <lait233@foxmail.com>
 * Date: 17/8/22
 * Time: 21:55
 */
import { CanDeactivate } from "@angular/router";
import { ProductComponent } from "../product/product.component";

export class UnsavedGuard implements CanDeactivate<ProductComponent> {
    canDeactivate( component: ProductComponent ) {
        return window.confirm( "您还没有保存,确定要离开吗?" );
    }
}
