import { Pipe, PipeTransform } from '@angular/core';
import { SessionType } from './event.model';

@Pipe({
  name: 'sessionType'
})
export class SessionTypePipe implements PipeTransform {

  transform(value: SessionType): string {
    switch (value) {
      case SessionType.FP1:
        return "FP1";
      case SessionType.FP2:
        return "FP2";
      case SessionType.FP3:
        return "FP3";
      case SessionType.Q1:
        return "Q1";
      case SessionType.Q2:
        return "Q2";
      case SessionType.Q3:
        return "Q3";
      case SessionType.R:
        return "RACE";
    }
  }
}
