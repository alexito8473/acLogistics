import { Component, input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-serviceCard',
  imports: [RouterLink],

  templateUrl: './serviceCard.component.html',
  styleUrls: ['./serviceCard.component.css'],
})
export class ServiceCardComponent {
  readonly number = input<string>('');
  readonly title = input<string>('');
  readonly description = input<string>('');
  readonly linkText = input<string>('');
  readonly link = input<string>('/');
  readonly color = input<string>('#168DE2');
  readonly backgroundColor = input<string>('#ffffff');
  readonly titleColor = input<string>('#111827');
  readonly descriptionColor = input<string>('#64748B');
  readonly numberColor = input<string>('#168DE2');
  readonly numberBackgroundColor = input<string>('#EFF6FF');
  readonly numberBorderColor = input<string>('#DBEAFE');
  readonly iconBackgroundColor = input<string>('#EFF6FF');
  readonly iconColor = input<string>('#168DE2');
  readonly iconBorderColor = input<string>('#DBEAFE');
  readonly borderColor = input<string>('#E2E8F0');
  readonly borderHoverColor = input<string>('#168DE2');
  readonly decorationColor = input<string>('#168DE2');
  readonly decorationOpacity = input<string>('0.20');
  readonly linkColor = input<string>('#168DE2');
  readonly linkHoverColor = input<string>('#063B8F');
  readonly shadowColor = input<string>('rgba(15, 23, 42, 0.15)');
  readonly shadowHoverColor = input<string>('rgba(15, 23, 42, 0.22)');
}
