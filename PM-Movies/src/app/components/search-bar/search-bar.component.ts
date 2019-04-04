import { Component } from '@angular/core';

import { ContentListStateService } from '../../services';

/**
* Represents a searchbar able to notify others  of its update through the QueryService
**/
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {

  constructor(private queryService: ContentListStateService) { }

  public onSearchUpdate(searchQuery: string) {

    this.queryService.updateQuery(searchQuery);
  }
}
