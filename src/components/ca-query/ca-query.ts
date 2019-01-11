import { Component, Input, ViewChild, ElementRef, Renderer } from '@angular/core';
// import { CallNumber } from '@ionic-native/call-number';
// import { EmailComposer } from '@ionic-native/email-composer';


@Component({
  selector: 'ca-query',
  templateUrl: 'ca-query.html'
})
export class CaQueryComponent {

  @ViewChild('queryTextContent', {read: ElementRef}) queryTextContent;
  @Input('queryKind') queryKind;
  text: string;

  // constructor(public callNumber: CallNumber, public emailComposer: EmailComposer, public renderer: Renderer) {
  //   console.log('Hello CaQueryComponent Component');
  //   this.text = 'Hello World';
  // }

  ngAfterViewInit(){
    console.log(this.queryKind);
  }

  // call(){
  // this.callNumber.callNumber("18001010101", true)
  // .then(res => console.log('Launched dialer!', res))
  // .catch(err => console.log('Error launching dialer', err));
  // }

  // emailComp(){
  //   this.emailComposer.isAvailable().then((available: boolean) =>{
  //     if(available) {
  //       //Now we know we can send
  //     }
  //    });
     
  //    let email = {
  //      to: 'max@mustermann.de',
  //      cc: 'erika@mustermann.de',
  //      bcc: ['john@doe.com', 'jane@doe.com'],
  //      attachments: [
  //        'file://img/logo.png',
  //        'res://icon.png',
  //        'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
  //        'file://README.pdf'
  //      ],
  //      subject: 'Cordova Icons',
  //      body: 'How are you? Nice greetings from Leipzig',
  //      isHtml: true
  //    };
     
  //    // Send a text message using default options
  //    this.emailComposer.open(email);
  // }

}
