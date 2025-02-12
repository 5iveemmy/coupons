import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';

@Component({
  selector: 'app-inquiry',
  imports: [ButtonModule, AvatarModule, AvatarGroupModule],
  templateUrl: './inquiry.component.html',
  styleUrl: './inquiry.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class InquiryComponent {}
