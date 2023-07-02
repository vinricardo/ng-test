import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

import { UniqueIdService } from '../../services/unique-id/unique-id.service';

@Component({
  selector: 'app-like-widget',
  templateUrl: './like-widget.component.html',
  styleUrls: ['./like-widget.component.scss'],
})
export class LikeWidgetComponent {
  @Output() liked = new EventEmitter<void>();
  @Input() likes = 0;
  @Input() id = null;
  fonts = {
    faThumbsUp,
  };

  constructor(private service: UniqueIdService) {}

  ngOnInit(): void {
    if (!this.id)
      this.id = this.service.generateUniqueIdWithPrefix('like-widget');
  }

  like() {
    this.liked.emit();
  }
}
