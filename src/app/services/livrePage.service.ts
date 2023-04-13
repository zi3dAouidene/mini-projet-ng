import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
@Injectable()
export class SharingService{
    private data:any = undefined;

    setData(data:any){
        this.data = data;
    }

    getData():any{
        return this.data;
    }
}