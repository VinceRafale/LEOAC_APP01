import { Injectable } from '@angular/core';
import { Push, PushToken } from '@ionic/cloud-angular';

@Injectable()
export class PushListenerService {

	constructor(push: Push) {
	  console.log("im in!");
		push.register()
			.then((t: PushToken) => {
        console.log("My Device token:",t);
		    push.saveToken(t)
      });

		push.rx.notification()
			.subscribe(this.onPush);
	}

	private onPush(msg) {
		alert(msg.title + ': ' + msg.text);
	}
}
