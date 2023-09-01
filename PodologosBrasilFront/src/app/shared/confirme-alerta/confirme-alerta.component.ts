import {Component, Input, OnInit} from "@angular/core";
import {Subject} from "rxjs";
import {BsModalRef} from "ngx-bootstrap/modal";

@Component({
  selector: 'app-confirme-alerta',
  templateUrl: './confirme-alerta.component.html',
  styleUrls: ['./confirme-alerta.component.scss']
})
export class ConfirmeAlertaComponent implements OnInit {

  @Input() title: string;
  @Input() msg: string;
  @Input() cancelTxt: string;
  @Input() okTxt: string;

  confirmResult: Subject<boolean>;

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
    this.confirmResult = new Subject();
  }

  onConfirm() {
    this.confirmAndClose(true);
  }

  onClose() {
    this.confirmAndClose(false);
  }

  private confirmAndClose(value: boolean) {
    this.confirmResult.next(value);
    this.bsModalRef.hide();
  }

}
