import { BsModalRef } from 'ngx-bootstrap/modal';
import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';



@Component({
  selector: 'app-alert',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.scss']
})
export class AlertaComponent implements OnInit {

  @Input() type: 'success';
  @Input() message: string;
  @Input() reload: boolean;

  constructor(public bdModalRef: BsModalRef) {}

  closeResult: Subject<any>;

  ngOnInit(): void {
    this.closeResult = new Subject();
  }

  onClose() {

    if (this.reload) { location.reload(); }

    this.closeResult.next();

    this.bdModalRef.hide();
  }

}
