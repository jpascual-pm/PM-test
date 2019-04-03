import { Content } from '../content';

export class TvShow extends Content {

  constructor(titleN: string, durationN: number, releaseDateN: Date) {

    super(titleN, durationN, releaseDateN);
    this.type = 'tv';
  }

  public getDetailsRoute(): string {

    return '/tv/' + this.tmdbId;
  }

}
