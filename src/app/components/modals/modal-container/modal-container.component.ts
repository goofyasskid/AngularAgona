import { CdkDialogContainer } from '@angular/cdk-experimental/dialog';
import { Portal } from '@angular/cdk/portal';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-modal-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalContainerComponent extends CdkDialogContainer {
	portal?: Portal<any>;
}
