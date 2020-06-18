import { Observable } from 'rxjs';
export declare const untilDestroyed: (componentInstance: any, destroyMethodName?: string) => <T>(source: Observable<T>) => Observable<T>;
