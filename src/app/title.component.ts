import { Input, Component } from '@angular/core'
import { UserService } from './user.service';


@Component(
    {
        selector: 'app-title',
        templateUrl: './title.component.html'
    }
)
export class TiltleComponent {
    @Input() subtitle = '';
    title = '(travis-ci)'
    user = ''
    constructor(userService: UserService) {
        this.user = userService.userName;
    }
}